import { Card, Divider } from "@adeeeeta/greenhouse";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import styles from "./page.module.css";

const links = [
    {
      name: "npm",
      description: "Install the published package into your own project.",
      href: "https://www.npmjs.com/package/@adeeeeta/greenhouse",
      external: true,
    },
    {
      name: "GitHub",
      description: "Browse the source, file notes, and follow along as it grows.",
      href: "https://github.com/adeeeeta/greenhouse-design-system",
      external: true,
    },
    {
      name: "Figma (Coming soon)",
      description: "All variables and components in the design file mirror the token architecture.",
      href: "#", // TODO: replace with the real Figma file URL
      external: false,
    },
  ];

const agentLinks = [
    {
      name: "llms-full.txt",
      description: "Every component, token and theme with its rules, in one plain-text file for AI tools.",
      href: "/llms-full.txt",
      external: false,
    },
    {
      name: "AGENTS.md",
      description: "The mistakes agents most often make with Greenhouse, and a checklist to run before finishing.",
      href: "https://github.com/adeeeeta/greenhouse-design-system/blob/main/packages/greenhouse/AGENTS.md",
      external: true,
    },
    {
      name: "Source docs (DSDS)",
      description: "The YAML files every rule on this site and in the README is generated from.",
      href: "https://github.com/adeeeeta/greenhouse-design-system/tree/main/packages/greenhouse/docs",
      external: true,
    },
  ];

export default function ResourcesPage() {
  return (
    <>
      <h1>Resources</h1>
      <p>
        Everything you need to plant Greenhouse in your own project. Install the package, wire up the styles, and follow the system as it grows.
      </p>

      <Divider />

      <h2 id="install">Install</h2>
      <p>
        Add the package from npm. It ships with React 19 as a peer dependency,
        so make sure your project is on React 19 or later.
      </p>
      <CodeBlock caption="Terminal" code={`npm i @adeeeeta/greenhouse`} />

      <Divider />

      <h2 id="setup">Setup</h2>
      <p>
        Import the token and component stylesheets once at the root of your app.
        The <code>tokens.css</code> file defines every design token — colors,
        spacing, typography — and <code>styles.css</code> carries the component
        styles. Both are required for components to render correctly.
      </p>
      <CodeBlock
        caption="app/layout.tsx"
        code={`import "@adeeeeta/greenhouse/tokens.css";\nimport "@adeeeeta/greenhouse/styles.css";`}
      />
      <p>
        Greenhouse doesn't ship font files. Load Plus Jakarta Sans, Fraunces
        and Fira Code yourself, and assign each one to the CSS variable it
        fills. Without this step, all text falls back to system fonts.
      </p>
      <CodeBlock
        caption="app/layout.tsx"
        code={`import { Plus_Jakarta_Sans, Fraunces, Fira_Code } from "next/font/google";\n\nconst sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans-face" });\nconst display = Fraunces({ subsets: ["latin"], variable: "--font-display-face" });\nconst mono = Fira_Code({ subsets: ["latin"], variable: "--font-mono-face" });\n\n// <html className={\`\${sans.variable} \${display.variable} \${mono.variable}\`}>`}
      />
      <p>
        Then import any component and use it directly. Everything is exported
        from the package root.
      </p>
      <CodeBlock
        caption="app/page.tsx"
        code={`import { Button } from "@adeeeeta/greenhouse";\n\nexport default function Page() {\n  return <Button kind="primary">Add to greenhouse</Button>;\n}`}
      />

      <Divider />

      <h2 id="links">Links</h2>
      <p>
        The package, its source, and the design file it grew from.
      </p>
      <div className={styles.linkGrid}>
      {links.map((link) => (
          <Card
            key={link.name}
            variant="outlined"
            href={link.href}
            target={link.external ? "_blank" : undefined}
          >
            <span className={styles.linkName}>{link.name}</span>
            <p className={styles.linkDescription}>{link.description}</p>
          </Card>
        ))}
      </div>

      <Divider />

      <h2 id="agents">For AI agents</h2>
      <p>
        Building with Cursor, Claude or another AI tool? Point it at these.
        They're generated from the same source as this site, so they stay in
        step with every release. AI tools also find{" "}
        <code>/llms.txt</code> on this site automatically.
      </p>
      <div className={styles.linkGrid}>
        {agentLinks.map((link) => (
          <Card
            key={link.name}
            variant="outlined"
            href={link.href}
            target={link.external ? "_blank" : undefined}
          >
            <span className={styles.linkName}>{link.name}</span>
            <p className={styles.linkDescription}>{link.description}</p>
          </Card>
        ))}
      </div>
    </>
  );
}