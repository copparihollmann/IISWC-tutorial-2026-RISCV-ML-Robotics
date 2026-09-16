import { tutorial } from "../data/tutorial";
import { ArrowIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function BuildWorkflow() {
  return (
    <section id="build" className="section build-section" aria-labelledby="build-title">
      <div className="container">
        <SectionHeading
          id="build-title"
          eyebrow="Hands-on workflow"
          title="Model compilation, execution, and analysis"
          description={<p>The two labs use a common workload and produce executable artifacts, schedules, and traces.</p>}
          inverse
        />

        <ol className="build-flow">
          {tutorial.buildSteps.map((step, index) => (
            <li key={step.number}>
              <div className="build-flow__number">{step.number}</div>
              <div className="build-flow__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < tutorial.buildSteps.length - 1 ? <ArrowIcon className="build-flow__arrow" /> : null}
            </li>
          ))}
        </ol>

        <p className="build-outcome">
          <span>Outcome</span>
          Participants will take a robotic ML workload from PyTorch to traced,
          schedule-driven execution on a heterogeneous RISC-V platform.
        </p>
      </div>
    </section>
  );
}
