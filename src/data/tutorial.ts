export const IISWC_REGISTRATION_URL = "https://iiswc.org/iiswc2026/reg.html";

export const TUTORIAL_RSVP_URL = "https://forms.gle/n11XLXU7SjWG2MLM8";
export const TUTORIAL_RSVP_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd8E-eL5QhB4Pw9rl4VmtK9El5ibjzpgvJ24GloYlBBI4B14A/viewform?embedded=true";

export interface Organizer {
  name: string;
  initials: string;
  affiliation: string;
  photo: string | null;
  role: string | null;
  homepage: string | null;
  github: string | null;
  email: string | null;
}

export interface Material {
  title: string;
  description: string;
  url: string | null;
}

export interface AgendaItem {
  title: string;
  description: string;
  handsOn?: boolean;
}

export interface AgendaSession {
  label: string;
  items: AgendaItem[];
}

const organizers: Organizer[] = [
  { name: "Dima Nikiforov", email: null },
  { name: "Shengjun Kris Dong", email: null },
  { name: "Agustin Coppari Hollmann", email: null },
  { name: "Loren Hung", email: null },
  { name: "Ailsa Sun", email: null },
  { name: "Chengyi Lux Zhang", email: "iansseijelly@berkeley.edu" },
  { name: "Yakun Sophia Shao", email: null },
].map(({ name, email }) => ({
  name,
  initials: name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(-2)
    .join(""),
  affiliation: "UC Berkeley",
  photo: null,
  role: null,
  homepage: null,
  github: null,
  email,
}));

export const tutorial = {
  title:
    "Building, Tracing, and Optimizing End-to-End ML and Robotic Workloads on Heterogeneous RISC-V SoCs with a Lightweight Zephyr Runtime",
  heroTitle:
    "Building, Tracing, and Optimizing End-to-End ML and Robotic Workloads on Heterogeneous RISC-V SoCs",
  subtitle: "with a Lightweight Zephyr Runtime",
  shortTitle: "Heterogeneous RISC-V ML & Robotics",
  conference: "IEEE International Symposium on Workload Characterization — IISWC 2026",
  conferenceShort: "IISWC 2026",
  affiliation: "UC Berkeley",
  siteUrl: "https://copparihollmann.github.io/IISWC-tutorial-2026-RISCV-ML-Robotics/",
  socialImageUrl:
    "https://copparihollmann.github.io/IISWC-tutorial-2026-RISCV-ML-Robotics/assets/og-card.png",
  event: {
    date: "Sunday, September 27, 2026",
    shortDate: "Sunday, September 27",
    startDate: "2026-09-27T13:30:00-06:00",
    time: "1:30 PM",
    duration: "Half-day tutorial",
    durationLabel: "Half-day tutorial",
    location: "Boulder, Colorado, USA",
    shortLocation: "Boulder, Colorado",
    format: "In Person",
    capacity: "30–60 attendees",
  },
  seo: {
    title: "IISWC 2026 Tutorial | Heterogeneous RISC-V ML & Robotics",
    description:
      "Hands-on IISWC 2026 tutorial on compiling, scheduling, tracing, and optimizing ML and robotic workloads on heterogeneous RISC-V SoCs using a lightweight Zephyr runtime.",
    openGraphTitle: "IISWC 2026 Tutorial | Heterogeneous RISC-V ML & Robotics",
  },
  urls: {
    conference: "https://iiswc.org/iiswc2026/",
    iiswcRegistration: IISWC_REGISTRATION_URL,
    tutorialRsvp: TUTORIAL_RSVP_URL,
    tutorialRsvpEmbed: TUTORIAL_RSVP_EMBED_URL,
  },
  navItems: [
    { label: "Overview", href: "#overview" },
    { label: "What You'll Build", href: "#build" },
    { label: "Agenda", href: "#agenda" },
    { label: "Organizers", href: "#organizers" },
    { label: "FAQ", href: "#faq" },
  ],
  organizers,
  organizationLogos: [
    { name: "UC Berkeley", asset: "assets/uc-berkeley-seal.svg", kind: "seal" },
    { name: "SLICE", asset: "assets/slice-logo.png", kind: "slice" },
  ],
  buildSteps: [
    { number: "01", title: "Start with a model", description: "PyTorch-based ML or robotic workload." },
    { number: "02", title: "Compile", description: "Generate kernels, tensor layouts, static memory plans, and a Zephyr-compatible executable." },
    { number: "03", title: "Execute", description: "Run persistent workers across heterogeneous RISC-V compute resources." },
    { number: "04", title: "Schedule", description: "Control hardware placement, execution frequency, ordering, and temporal constraints." },
    { number: "05", title: "Trace", description: "Collect dispatch-level timing and synchronization information." },
    { number: "06", title: "Analyze", description: "Inspect latency, utilization, hardware assignment, and missed timing constraints." },
    { number: "07", title: "Optimize", description: "Use measured feedback to improve kernels, placement, and scheduling decisions." },
  ],
  agenda: [
    {
      label: "Session I",
      items: [
        { title: "Welcome and System Overview", description: "Motivation for lightweight heterogeneous ML runtimes and the architecture of the tutorial stack." },
        { title: "From PyTorch to Zephyr", description: "Ahead-of-time compilation, quantization, memory planning, target-specific kernels, and ELF generation." },
        { title: "Hands-on Lab I", description: "Run a compiled workload, validate its output, and inspect execution across simulated RISC-V hardware.", handsOn: true },
        { title: "Runtime Architecture and Tracing", description: "Persistent workers, hart affinity, accelerator dispatch, synchronization, and per-dispatch tracing." },
      ],
    },
    {
      label: "Session II",
      items: [
        { title: "From Single Models to Robotic Workloads", description: "Perception, planning, control, VLA-style tasks, multi-rate execution, and temporal constraints." },
        { title: "Ahead-of-Time Heterogeneous Scheduling", description: "Assign model operations to hardware backends and deploy a schedule to the runtime." },
        { title: "Hands-on Lab II", description: "Execute and compare schedules using provided workloads and trace data.", handsOn: true },
        { title: "Closing the Optimization Loop", description: "Use traces to guide kernel optimization, placement, autotuning, and agentic optimization." },
        { title: "Pre-Silicon to Silicon", description: "Spike, RTL simulation, FireSim, and commercial or custom RISC-V platforms." },
        { title: "Discussion and Q&A", description: "Future directions for lightweight ML runtimes and heterogeneous embedded systems." },
      ],
    },
  ] satisfies AgendaSession[],
  materials: [
    { title: "Slides", description: "Presentation deck", url: null },
    { title: "Hands-on Guide", description: "Step-by-step lab instructions", url: null },
    { title: "Source Code", description: "Tutorial repositories", url: null },
    { title: "Example Workloads", description: "ML and robotics examples", url: null },
    { title: "Trace Dataset", description: "Cached SoC traces", url: null },
  ] satisfies Material[],
  faq: [
    { question: "Do I need to register for IISWC?", answer: "Yes. The tutorial is part of the IISWC workshop and tutorial program. The tutorial RSVP is used separately for hands-on planning and cloud VM allocation." },
    { question: "Do I need to install anything beforehand?", answer: "No specialized RISC-V, Zephyr, FPGA, or GPU software needs to be installed locally. Hands-on exercises will use pre-provisioned cloud environments." },
    { question: "What should I bring?", answer: "A laptop with a modern web browser and an SSH client." },
    { question: "Do I need previous RISC-V experience?", answer: "No. Familiarity with computer architecture or systems is useful, but the tutorial is accessible to attendees coming from ML, compilers, robotics, or adjacent areas." },
    { question: "Is the tutorial hands-on?", answer: "Yes. Participants will execute workloads, inspect runtime behavior and traces, and experiment with scheduling and optimization decisions." },
    { question: "Will we use an FPGA during the tutorial?", answer: "The tutorial explains and demonstrates the flow through FPGA-accelerated simulation with FireSim, but attendees do not need to configure local FPGA infrastructure." },
    { question: "Can I attend without doing the labs?", answer: "Yes. The presentations and demonstrations remain useful without reserving a cloud VM." },
    { question: "Where will the tutorial materials be posted?", answer: "Slides, lab instructions, source code, and supporting materials will be linked from this website as they become available." },
  ],
} as const;
