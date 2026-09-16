import { SectionHeading } from "./SectionHeading";

export function Overview() {
  return (
    <section id="overview" className="section overview-section" aria-labelledby="overview-title">
      <div className="container split-intro">
        <SectionHeading id="overview-title" eyebrow="Overview" title="From PyTorch to Heterogeneous RISC-V" />
        <div className="prose-column">
          <p>
            This tutorial presents an open-source runtime, compilation, and scheduling stack
            for deploying end-to-end ML and robotic workloads on heterogeneous RISC-V SoCs.
          </p>
          <p>
            Participants will work through the complete path from PyTorch models to compact
            Zephyr binaries containing target-specific kernels, statically planned tensor
            storage, multicore execution, accelerator dispatch, and runtime tracing.
          </p>
          <p>
            The second half expands from individual models to multi-model robotic workloads
            with real-time constraints, showing how computation can be mapped across
            heterogeneous hardware using ahead-of-time scheduling.
          </p>
        </div>
      </div>
    </section>
  );
}
