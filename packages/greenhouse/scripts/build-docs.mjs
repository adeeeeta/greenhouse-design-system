#!/usr/bin/env node
// Builds Greenhouse's agent-readable docs from the DSDS files in ./docs.
//
//   npm run docs:build          write the outputs
//   npm run docs:build -- --check   fail if any output is out of date (used before publishing)
//
// Outputs:
//   README.md                         only the regions between <!-- dsds:start X --> and <!-- dsds:end X -->
//   AGENTS.md                         fully generated
//   ../../apps/docs/public/llms.txt       short index for AI tools
//   ../../apps/docs/public/llms-full.txt  every entry as plain text
//
// The YAML files are the source of truth. Edit them, not the outputs.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const PKG = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(PKG, "docs");
const SITE = "https://greenhouse-design-system.vercel.app";
const CHECK = process.argv.includes("--check");

// ---------- 1. Load every entry, following rel: file refs from the index ----------

function loadFile(path) {
  const doc = parse(readFileSync(path, "utf8"));
  return { path, doc, entries: doc.schemaVersion ? doc.entries ?? [] : [doc] };
}

const index = loadFile(join(DOCS, "index.dsds.yaml"));
const files = [index];
for (const ref of index.doc.refs ?? []) {
  if (ref.rel === "file") files.push(loadFile(join(DOCS, ref.href)));
}
const all = files.flatMap((f) => f.entries);
const byId = new Map(all.map((e) => [e.id, e]));
const system = all.find((e) => e.kind === "system");
const components = all.filter((e) => e.kind === "component");
const tokens = all.filter((e) => e.kind === "token");
const themes = all.filter((e) => e.kind === "theme");

// ---------- 2. Small helpers ----------

const LEVEL = { must: "Must", should: "Should", may: "May", "should-not": "Should not", "must-not": "Must not" };

// "<dsds:toast>" inline links become the entry's name (with a README anchor when asked).
function text(s, { anchors = false } = {}) {
  return String(s).replace(/<dsds:([a-z0-9.-]+)>/gi, (_, id) => {
    const e = byId.get(id);
    const name = e?.name ?? id;
    return anchors && e?.kind === "component" ? `[${name}](#${slug(name)})` : name;
  });
}
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const sections = (e, pred) => (e.sections ?? []).filter(pred);
const guidelines = (e, { forWho, whenToUse }) =>
  sections(e, (s) =>
    s.kind === "guidelines" &&
    (forWho ? s.for === forWho : true) &&
    (whenToUse === undefined ? true : whenToUse === (s.framing === "when-to-use"))
  ).flatMap((s) => s.items ?? []);
const rule = (g, opts) => `- **${LEVEL[g.level]}:** ${text(g.statement, opts)}`;
const demo = (e) => (e.refs ?? []).find((r) => r.rel === "demo")?.href;
const tokenName = (t) => `--${t.id}`;

// ---------- 3. README regions ----------

function readmeComponentTable() {
  const rows = components.map((c) => {
    const wtu = guidelines(c, { forWho: "all", whenToUse: true });
    const useFor = wtu.filter((g) => g.level === "should" || g.level === "must").map((g) => text(g.statement)).join(" ");
    const instead = wtu.filter((g) => g.level.endsWith("not")).map((g) => text(g.statement, { anchors: true })).join("<br>");
    return `| [${c.name}](#${slug(c.name)}) | ${useFor || c.description} | ${instead || "—"} |`;
  });
  return ["| Component | Use it for | Don't use it when… |", "|---|---|---|", ...rows].join("\n");
}

function readmeComponents() {
  return components.map((c) => {
    const lines = [`### ${c.name}`, "", text(c.description), ""];
    const imp = (c.imports ?? [])[0]?.code;
    if (imp) lines.push("```tsx", imp, "```", "");
    const traits = (c.traits ?? []).map((t) =>
      t.kind === "enum" ? `\`${t.id}\`: ${t.values.map((v) => `\`${v.id}\``).join(" · ")}` : `\`${t.id}\``
    );
    if (traits.length) lines.push(`**Props to know:** ${traits.join("; ")}. Full props are in the TypeScript types.`, "");
    const rules = guidelines(c, { forWho: "all", whenToUse: false });
    if (rules.length) lines.push(...rules.map((g) => rule(g, { anchors: true })), "");
    if (demo(c)) lines.push(`[Live demo](${demo(c)})`, "");
    return lines.join("\n");
  }).join("\n");
}

function readmeRules() {
  return sections(system, (s) => s.kind === "guidelines" && s.for !== "agent")
    .map((s) => [`**${s.title ?? "General"}**`, "", ...s.items.map((g) => rule(g)), ""].join("\n"))
    .join("\n");
}

function readmeTokens() {
  const groups = new Map();
  for (const t of tokens) {
    const g = (t.metadata?.group ?? "other").split(".")[0];
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push(t);
  }
  const out = [];
  for (const [g, list] of groups) {
    out.push(`**${g[0].toUpperCase() + g.slice(1)}**`, "", "| Token | Use for |", "|---|---|");
    for (const t of list) {
      const use = guidelines(t, { forWho: "all" }).find((x) => x.level === "should" || x.level === "must");
      out.push(`| \`${tokenName(t)}\` | ${text(use?.statement ?? t.description)} |`);
    }
    out.push("");
  }
  return out.join("\n");
}

function readmeThemes() {
  return themes.map((t) =>
    [`**${t.name}** — ${text(t.description)}`, "", ...guidelines(t, { forWho: "all" }).map((g) => rule(g)), ""].join("\n")
  ).join("\n");
}

function fillRegions(src, regions) {
  let out = src;
  for (const [name, body] of Object.entries(regions)) {
    const re = new RegExp(`(<!-- dsds:start ${name} -->)[\\s\\S]*?(<!-- dsds:end ${name} -->)`);
    if (!re.test(out)) throw new Error(`README.md is missing the region markers for "${name}".`);
    out = out.replace(re, `$1\n<!-- Generated from docs/*.dsds.yaml. Edit the YAML, then run npm run docs:build. -->\n\n${body.trim()}\n\n$2`);
  }
  return out;
}

// ---------- 4. AGENTS.md ----------

function agentsMd() {
  const out = [
    "# Greenhouse — notes for AI agents",
    "",
    "<!-- Generated from docs/*.dsds.yaml by npm run docs:build. Do not edit by hand. -->",
    "",
    "Read `README.md` first. This file adds what agents most often get wrong, and a checklist to run before you finish.",
    "",
    "## Ground truth",
    "",
    "- Prop names, values and defaults: the `.d.ts` files. If a prop isn't in the types, it doesn't exist.",
    "- Token values: `tokens.css`.",
    "",
  ];
  const gaps = guidelines(system, { forWho: "agent" });
  if (gaps.length) out.push("## Known gaps", "", ...gaps.map((g) => rule(g)), "");
  out.push("## By component", "");
  for (const c of components) {
    const notes = guidelines(c, { forWho: "agent" });
    if (!notes.length) continue;
    out.push(`### ${c.name}`, "", ...notes.map((g) => rule(g)), "");
  }
  const tokenNotes = tokens.flatMap((t) => guidelines(t, { forWho: "agent" }));
  const themeNotes = themes.flatMap((t) => guidelines(t, { forWho: "agent" }));
  if (tokenNotes.length) out.push("## Tokens", "", ...tokenNotes.map((g) => rule(g)), "");
  if (themeNotes.length) out.push("## Themes", "", ...themeNotes.map((g) => rule(g)), "");
  out.push("## Before you finish", "");
  for (const s of sections(system, (s) => s.kind === "steps")) {
    for (const step of s.items) out.push(`- [ ] ${text(step.title)}${step.optional ? " (if you use it)" : ""}`);
  }
  for (const g of guidelines(system, { forWho: "all" }).filter((g) => g.level.startsWith("must"))) {
    out.push(`- [ ] ${text(g.statement)}`);
  }
  out.push("- [ ] Every prop you used exists in the `.d.ts` files", "- [ ] The page works with `data-theme=\"dark\"` on `<html>`", "");
  return out.join("\n");
}

// ---------- 5. llms.txt and llms-full.txt ----------

function llmsTxt() {
  const out = [`# ${system.name}`, "", `> ${text(system.description)}`, "",
    "Install with `npm i @adeeeeta/greenhouse`. For every rule in one file, read llms-full.txt.", "",
    "## Docs", "", `- [Full agent reference](${SITE}/llms-full.txt): every component, token and theme with its rules`];
  for (const c of components) out.push(`- [${c.name}](${demo(c) ?? SITE}): ${text(c.description)}`);
  out.push("", "## Optional", "", `- [Typography](${SITE}/foundations/typography)`, `- [Color](${SITE}/foundations/color)`,
    `- [Spacing](${SITE}/foundations/spacing)`, "- [Source on GitHub](https://github.com/adeeeeta/greenhouse-design-system)", "");
  return out.join("\n");
}

function llmsFull() {
  const block = (e) => {
    const lines = [`## ${e.name}${e.kind === "token" ? ` (\`${tokenName(e)}\`)` : ""}`, "", `Kind: ${e.kind}`, "", text(e.description), ""];
    if (e.imports?.[0]) lines.push(`Import: \`${e.imports[0].code}\``, "");
    for (const s of e.sections ?? []) {
      const head = s.framing === "when-to-use" ? "When to use" : s.title ?? (s.for === "agent" ? "Agent notes" : "Rules");
      if (s.kind === "guidelines") lines.push(`${head}:`, ...s.items.map((g) => rule(g)), "");
      if (s.kind === "steps") lines.push(`${head}:`, ...s.items.map((st, i) => `${i + 1}. ${text(st.title)}`), "");
      if (s.kind === "definitions") lines.push("Parts:", ...s.items.map((d) => `- ${d.term}: ${text(d.definition)}`), "");
    }
    for (const t of e.traits ?? []) {
      lines.push(`Prop \`${t.id}\` (${t.traitType}): ${text(t.description)}`);
      for (const v of t.values ?? []) lines.push(`  - \`${v.id}\`: ${text(v.description)}`);
    }
    if (e.traits?.length) lines.push("");
    if (e.alternatives?.length) lines.push(`Alternatives: ${e.alternatives.map((a) => byId.get(a.to)?.name ?? a.to).join(", ")}`, "");
    return lines.join("\n");
  };
  return [`# ${system.name} — full agent reference`, "",
    "Generated from the Greenhouse DSDS files (designsystemdocspec.org). Prop types live in the package's .d.ts files; token values live in tokens.css.", "",
    block(system), "# Components", "", ...components.map(block), "# Tokens", "", ...tokens.map(block), "# Themes", "", ...themes.map(block)].join("\n");
}

// ---------- 6. Write (or check) ----------

const readmePath = join(PKG, "README.md");
const outputs = {
  [readmePath]: fillRegions(readFileSync(readmePath, "utf8"), {
    rules: readmeRules(),
    "component-table": readmeComponentTable(),
    components: readmeComponents(),
    tokens: readmeTokens(),
    themes: readmeThemes(),
  }),
  [join(PKG, "AGENTS.md")]: agentsMd(),
  [join(PKG, "../../apps/docs/public/llms.txt")]: llmsTxt(),
  [join(PKG, "../../apps/docs/public/llms-full.txt")]: llmsFull(),
};

let stale = 0;
for (const [path, content] of Object.entries(outputs)) {
  const current = existsSync(path) ? readFileSync(path, "utf8") : "";
  const short = path.replace(resolve(PKG, "../..") + "/", "");
  if (current === content) { console.log(`✓ ${short} is up to date`); continue; }
  if (CHECK) { console.error(`✗ ${short} is out of date. Run npm run docs:build.`); stale++; continue; }
  writeFileSync(path, content);
  console.log(`✎ wrote ${short}`);
}
console.log(`${components.length} components, ${tokens.length} tokens, ${themes.length} themes`);
if (stale) process.exit(1);