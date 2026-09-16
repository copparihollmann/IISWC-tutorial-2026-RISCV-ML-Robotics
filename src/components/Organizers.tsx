import { tutorial } from "../data/tutorial";
import { SectionHeading } from "./SectionHeading";

export function Organizers() {
  return (
    <section id="organizers" className="section organizers-section" aria-labelledby="organizers-title">
      <div className="container">
        <SectionHeading id="organizers-title" eyebrow="Tutorial team" title="Organizers" description={<p>{tutorial.affiliation}</p>} />
        <div className="organizer-grid">
          {tutorial.organizers.map((organizer) => (
            <article className="organizer-card" key={organizer.name}>
              <div className="organizer-avatar" aria-hidden="true">{organizer.initials}</div>
              <div>
                <h3>{organizer.name}</h3>
                <p>{organizer.affiliation}</p>
                {organizer.role ? <small>{organizer.role}</small> : null}
              </div>
            </article>
          ))}
        </div>
        <div className="affiliation-strip">
          <p className="eyebrow">Affiliations</p>
          <div className="affiliation-logos" aria-label="Organizer affiliations">
            {tutorial.organizationLogos.map((logo) => (
              <figure className={`affiliation-logo affiliation-logo--${logo.kind}`} key={logo.name}>
                <div className="affiliation-logo__frame">
                  <img
                    src={`${import.meta.env.BASE_URL}${logo.asset}`}
                    alt={`${logo.name} logo`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>{logo.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
