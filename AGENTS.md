# Working on Greenhouse

Notes for AI agents (Cursor and others) working in this repo.

## Documentation is DSDS

Greenhouse's documentation follows the Design System Doc Spec (DSDS), version **0.23.1**. The DSDS files are the single source for what a component is for, when to use it, and the rules for using it. The README, the package `AGENTS.md` and the docsite's `llms.txt` and `llms-full.txt` are built from them by `scripts/build-docs.mjs`.

- **Location:** `packages/greenhouse/docs/`
  - `index.dsds.yaml` is the system entry. Every other file is listed in its `refs` with `rel: file`.
  - `components/<id>.dsds.yaml` holds one component per file.
  - `tokens/<family>.dsds.yaml` holds the semantic tokens, several entries per file.
  - `themes/<id>.dsds.yaml` holds one theme per file.
- **How to write DSDS:** read `.agents/skills/dsds-specs/SKILL.md` first. Use `dsds-add` for a new entry and `dsds-update` to change one.

## Greenhouse-specific rules

These take priority over the DSDS skill files wherever the two disagree.

- **Validate with the npm script, never on a single file:**
  `npm run docs:validate -w packages/greenhouse`.
  Do not run `npx dsds-validate <one-file>`. Each file depends on `index.dsds.yaml` for `sourceRoot` and for cross-references, so checking one on its own gives false warnings.
- **After changing any DSDS file, run** `npm run docs:build -w packages/greenhouse`. It regenerates the marked regions of `packages/greenhouse/README.md`, all of `packages/greenhouse/AGENTS.md`, and `apps/docs/public/llms.txt` and `llms-full.txt`. Never edit those generated parts by hand.
- **Lint and format with** `npm run docs:lint -w packages/greenhouse` and `npm run docs:format -w packages/greenhouse`.
- **Adding an entry means three changes:**
  1. The new file.
  2. A `rel: file` ref in `index.dsds.yaml`.
  3. If the file starts a new folder, add that folder's glob (e.g. `docs/tokens/*.dsds.yaml`) to `docs:validate` and `docs:lint` in `packages/greenhouse/package.json`.
- **Write `sourceFiles` paths relative to `packages/greenhouse/src/`**, e.g. `components/Card/Card.tsx`. That folder is set as `sourceRoot` in the index.
- **Do not restate props, types or defaults.** `sourceFiles` points at the code. Trait `id`s must match real prop names exactly (`kind`, not `variant`). Check the `.tsx` file before adding a trait.
- **Token entries cover the semantic tier only:** `--color-*`, `--space-*`, `--type-*`, `--radius-*`, `--shadow-*`. Never document the scale tokens (`--green-600`), the palette tokens (`--accent-*`) or the component tokens (`--button-*`).
- **A token or theme `source` points at `src/styles/tokens.css`.** No DTCG file exists yet. Do not create one.
- **Guidelines are Adi's design decisions.** Draft rules from the code and the docsite. Mark any rule you inferred rather than found with a `# TODO(adi): confirm` comment. Never present an invented rule as settled.
- **Use `checkedBy: manual`** unless a real test or lint rule exists. In that case use `automated` and add a `checks` pointer to it.
- **Keep the plant/greenhouse voice** in example copy (monstera, watering, frost alerts).
- **Commit one entry per commit**, separate from code changes.