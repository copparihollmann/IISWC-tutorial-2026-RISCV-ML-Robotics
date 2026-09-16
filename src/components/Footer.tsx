import { tutorial } from "../data/tutorial";

const footerLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Agenda", href: "#agenda" },
  { label: "Organizers", href: "#organizers" },
  { label: "IISWC", href: tutorial.urls.conference, external: true },
  { label: "Registration", href: tutorial.urls.iiswcRegistration, external: true },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>IISWC 2026 Tutorial</strong>
          <p>{tutorial.title}</p>
        </div>
        <div className="footer-meta">
          <p>{tutorial.affiliation}</p>
          <p>{tutorial.event.date} · {tutorial.event.shortLocation}</p>
        </div>
        <nav aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
