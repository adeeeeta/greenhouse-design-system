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

export default function ResourcesPage() {
  return (
    <>
      <h1>Resources</h1>
      <p>
        Everything you need to plant Greenhouse in your own project — install
        the package, wire up the styles, and follow the system as it grows.
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
    </>
  );
}