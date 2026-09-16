import { SectionHeading } from "./SectionHeading";

const audiences = [
  "Computer architecture researchers",
  "ML systems researchers",
  "Compiler developers",
  "Embedded systems engineers",
  "RISC-V developers",
  "Accelerator designers",
  "Robotics researchers",
  "Graduate students",
  "Hardware/software co-design researchers",
];

const recommended = [
  "Basic command-line familiarity",
  "Basic understanding of machine learning workloads",
  "Interest in systems or computer architecture",
];

const optional = [
  "RISC-V experience",
  "Zephyr or RTOS experience",
  "Compiler experience",
  "PyTorch experience",
  "FPGA or RTL simulation experience",
];

export function Audience() {
  return (
    <section className="section audience-section" aria-labelledby="audience-title">
      <div className="container">
        <SectionHeading
          id="audience-title"
          eyebrow="Audience"
          title="Intended Audience"
          description={<p>Expertise in every component of the software and hardware stack is not required.</p>}
        />

        <div className="audience-chips" aria-label="Intended audiences">
          {audiences.map((audience) => <span key={audience}>{audience}</span>)}
        </div>

        <div className="prerequisite-grid">
          <article>
            <p className="eyebrow">Recommended</p>
            <h3>Background</h3>
            <ul>{recommended.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="eyebrow">Helpful, not required</p>
            <h3>Additional experience</h3>
            <ul>{optional.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>

        <p className="prerequisite-highlight">No prior FireSim or Zephyr setup is required.</p>
      </div>
    </section>
  );
}
