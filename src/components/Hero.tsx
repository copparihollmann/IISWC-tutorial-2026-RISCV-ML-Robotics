import { tutorial } from "../data/tutorial";
import { ArrowIcon, CalendarIcon, ClockIcon, ExternalIcon, LocationIcon, PersonIcon } from "./Icons";
import { SystemPipeline } from "./SystemPipeline";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero-copy">
        <p className="eyebrow">IISWC 2026 · Hands-on Tutorial</p>
        <h1 id="hero-title">{tutorial.heroTitle}</h1>
        <p className="hero-subtitle">{tutorial.subtitle}</p>
        <p className="hero-description">
          Learn how to take ML and robotic workloads from PyTorch to traced,
          schedule-driven binaries running across heterogeneous RISC-V systems—from
          instruction-set simulation to FPGA-accelerated simulation and real silicon.
        </p>

        <div className="event-metadata" aria-label="Tutorial details">
          <div><CalendarIcon /><span>{tutorial.event.date}</span></div>
          <div><ClockIcon /><span>{tutorial.event.time} · {tutorial.event.duration}</span></div>
          <div><LocationIcon /><span>{tutorial.event.shortLocation}</span></div>
          <div><PersonIcon /><span>{tutorial.event.format}</span></div>
        </div>

        <div className="hero-ctas">
          <a className="button button--primary" href={tutorial.urls.tutorialRsvp} target="_blank" rel="noreferrer">
            Reserve Your Hands-on Spot <ExternalIcon />
          </a>
          <a className="button button--secondary" href={tutorial.urls.iiswcRegistration} target="_blank" rel="noreferrer">
            IISWC Registration <ExternalIcon />
          </a>
        </div>
        <p className="cta-context"><strong>Already registered for IISWC?</strong> Reserve a hands-on VM for the tutorial.</p>
        <p className="hero-note">Hands-on exercises use pre-provisioned cloud VMs. No local RISC-V, FPGA, or GPU setup required.</p>
      </div>

      <div className="container">
        <SystemPipeline />
      </div>

      <a className="hero-scroll" href="#overview">
        Explore the tutorial <ArrowIcon />
      </a>
    </section>
  );
}
