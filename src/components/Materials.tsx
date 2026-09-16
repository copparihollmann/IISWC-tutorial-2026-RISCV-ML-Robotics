import { tutorial, type Material } from "../data/tutorial";
import { ExternalIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

function MaterialCard({ material }: { material: Material }) {
  const content = (
    <>
      <small>{material.url ? "Available" : "Coming soon"}</small>
      <h3>{material.title}</h3>
      <p>{material.description}</p>
      {material.url ? <ExternalIcon /> : <span className="material-placeholder" aria-hidden="true">—</span>}
    </>
  );

  return material.url ? (
    <a className="material-card material-card--linked" href={material.url} target="_blank" rel="noreferrer">{content}</a>
  ) : (
    <article className="material-card">{content}</article>
  );
}

export function Materials() {
  return (
    <section className="section materials-section" aria-labelledby="materials-title">
      <div className="container">
        <SectionHeading
          id="materials-title"
          eyebrow="Resources"
          title="Tutorial Materials"
          description={<p>Slides, lab instructions, source code, workloads, and traces will be linked here when available.</p>}
        />
        <div className="materials-grid">
          {tutorial.materials.map((material) => <MaterialCard key={material.title} material={material} />)}
        </div>
      </div>
    </section>
  );
}
