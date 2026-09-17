import { tutorial } from "../data/tutorial";

export function Materials() {
  return (
    <section className="section materials-section" aria-labelledby="materials-title">
      <div className="container materials-simple">
        <h2 id="materials-title">Tutorial Materials</h2>
        <p>{tutorial.materialsNote}</p>
      </div>
    </section>
  );
}
