type SwatchProps = {
  title: string;
  description?: string;
  tokens: Array<{
    name: string;
    label?: string;
  }>;
};

function Tile({ name, label }: { name: string; label?: string }) {
  return (
    <div className="swatchTile">
      <div
        className="swatchChip"
        style={{ background: `var(${name})` }}
        aria-label={label ?? name}
        title={name}
      />
      <div className="swatchMeta">
        <div className="swatchLabel">{label ?? name}</div>
        <div className="swatchVar">{name}</div>
      </div>
    </div>
  );
}

export default function Swatch({ title, description, tokens }: SwatchProps) {
  return (
    <section className="swatchCard">
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      <div className="swatchGrid">
        {tokens.map((t) => (
          <Tile key={t.name} name={t.name} label={t.label} />
        ))}
      </div>
    </section>
  );
}