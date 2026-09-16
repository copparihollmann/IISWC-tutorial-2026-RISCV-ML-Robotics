import { SectionHeading } from "./SectionHeading";

export function Overview() {
  return (
    <section id="overview" className="section overview-section" aria-labelledby="overview-title">
      <div className="container split-intro">
        <SectionHeading id="overview-title" eyebrow="Overview" title="From PyTorch to Heterogeneous RISC-V" />
        <div className="prose-column">
          <p>
            This tutorial presents an open-source compilation, runtime, and scheduling stack
            for ML and robotic workloads on heterogeneous RISC-V SoCs.
          </p>
          <p>
            Session I follows a PyTorch model through ahead-of-time compilation into a compact
            Zephyr ELF, including target-specific kernels, static tensor storage, multicore
            execution, accelerator dispatch, correctness validation, and runtime tracing.
          </p>
          <p>
            Session II considers multi-model robotic workloads with real-time constraints and
            uses ahead-of-time schedules to assign computation to heterogeneous hardware.
          </p>
        </div>
      </div>
    </section>
  );
}
