const pipelineStages = [
  { label: "PyTorch / VLA", tag: "MODEL" },
  { label: "AOT Compilation", tag: "COMPILE" },
  { label: "Kernels + Memory", tag: "LOWER" },
  { label: "Schedule + Placement", tag: "MAP" },
  { label: "Zephyr Runtime", tag: "RUN" },
];

const hardware = ["Scalar RISC-V", "Vector Cores", "TCM", "Systolic Array", "Custom Accel / OPU"];
const traceSignals = ["Latency", "Utilization", "Synchronization", "HW Assignment"];
const targets = ["Spike", "RTL Simulation", "FireSim", "Silicon"];

export function SystemPipeline() {
  return (
    <figure className="system-pipeline" aria-labelledby="pipeline-caption">
      <figcaption id="pipeline-caption" className="sr-only">
        The tutorial workflow takes PyTorch and robotic workloads through compilation,
        scheduling, a Zephyr runtime, heterogeneous RISC-V hardware, tracing, and feedback-driven optimization.
      </figcaption>

      <div className="pipeline-flow" aria-hidden="true">
        {pipelineStages.map((stage, index) => (
          <div className="pipeline-step-wrap" key={stage.label}>
            <div className="pipeline-step">
              <small>{stage.tag}</small>
              <strong>{stage.label}</strong>
            </div>
            {index < pipelineStages.length - 1 ? <span className="pipeline-connector"><i /></span> : null}
          </div>
        ))}
        <span className="pipeline-connector"><i /></span>
        <div className="soc-block">
          <div className="soc-block__header"><small>TARGET</small><strong>Heterogeneous RISC-V SoC</strong></div>
          <div className="soc-block__resources">
            {hardware.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </div>

      <div className="trace-feedback" aria-hidden="true">
        <div className="trace-readout">
          <span className="trace-readout__pulse" />
          <strong>TRACE</strong>
          {traceSignals.map((signal) => <span key={signal}>{signal}</span>)}
        </div>
        <div className="feedback-arrow"><span>measured feedback</span><i>↺</i></div>
        <div className="optimization-box"><small>ITERATE</small><strong>Autotuning + Optimization</strong></div>
      </div>

      <div className="target-track" aria-hidden="true">
        <span className="target-track__label">same workflow</span>
        {targets.map((target, index) => (
          <span className="target-chip" key={target}>{target}{index < targets.length - 1 ? <i>→</i> : null}</span>
        ))}
      </div>
    </figure>
  );
}
