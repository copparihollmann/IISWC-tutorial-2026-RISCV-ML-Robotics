import { useEffect, useState } from "react";
import { tutorial } from "../data/tutorial";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const ids = [...tutorial.navItems.map((item) => item.href.slice(1)), "register"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -65%", threshold: [0.05, 0.25] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="site-brand" href="#top" onClick={() => setIsOpen(false)}>
          <span className="site-brand__mark" aria-hidden="true">T</span>
          <span>
            <strong>{tutorial.conferenceShort}</strong>
            <small>Hands-on Tutorial</small>
          </span>
        </a>

        <div className="nav-affiliations" aria-hidden="true">
          {tutorial.organizationLogos.map((logo) => (
            <img
              className={`nav-affiliations__${logo.kind}`}
              src={`${import.meta.env.BASE_URL}${logo.asset}`}
              alt=""
              key={logo.name}
            />
          ))}
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isOpen ? " primary-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          {tutorial.navItems.map((item) => {
            const id = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === id ? "is-active" : undefined}
                aria-current={activeSection === id ? "location" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
          <a className="nav-register" href="#register" onClick={() => setIsOpen(false)}>
            Register
          </a>
        </nav>
      </div>
    </header>
  );
}
