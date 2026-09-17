import { Agenda } from "./components/Agenda";
import { BuildWorkflow } from "./components/BuildWorkflow";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Materials } from "./components/Materials";
import { Navbar } from "./components/Navbar";
import { Organizers } from "./components/Organizers";
import { Overview } from "./components/Overview";
import { RegistrationCTA } from "./components/RegistrationCTA";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Overview />
        <BuildWorkflow />
        <Agenda />
        <Organizers />
        <RegistrationCTA />
        <Materials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
