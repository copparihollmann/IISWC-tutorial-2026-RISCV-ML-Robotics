import { tutorial } from "../data/tutorial";
import { ExternalIcon } from "./Icons";

export function RegistrationCTA() {
  return (
    <section id="register" className="section registration-section" aria-labelledby="registration-title">
      <div className="container">
        <header className="registration-heading">
          <p className="eyebrow">Registration</p>
          <h2 id="registration-title">Registration and Tutorial RSVP</h2>
          <p>{tutorial.event.shortDate} · {tutorial.event.shortLocation}</p>
        </header>

        <div className="registration-options">
          <article>
            <small>Attend IISWC</small>
            <h3>Register for IISWC 2026</h3>
            <p>Conference registration is required to attend the IISWC tutorial and workshop program.</p>
            <a className="button button--secondary" href={tutorial.urls.iiswcRegistration} target="_blank" rel="noreferrer">
              Conference Registration <ExternalIcon />
            </a>
          </article>
          <article className="registration-options__rsvp">
            <small>Hands-on tutorial</small>
            <h3>Tutorial RSVP and Cloud VM Request</h3>
            <p>Use the tutorial RSVP to indicate whether you need a pre-provisioned VM.</p>
            <a className="button button--primary" href={tutorial.urls.tutorialRsvp} target="_blank" rel="noreferrer">
              Tutorial RSVP <ExternalIcon />
            </a>
          </article>
        </div>

        <p className="registration-disclaimer">The tutorial RSVP does not replace IISWC conference registration.</p>

        <div className="registration-form">
          <header className="registration-form__heading">
            <div>
              <p className="eyebrow">Tutorial RSVP + Cloud VM Reservation</p>
              <h3>Tutorial RSVP and VM request</h3>
              <p>Complete the form below. A separate link is provided if the embedded form does not load.</p>
            </div>
            <a href={tutorial.urls.tutorialRsvp} target="_blank" rel="noreferrer">
              Open form in a new tab <ExternalIcon />
            </a>
          </header>
          <iframe
            src={tutorial.urls.tutorialRsvpEmbed}
            title="Tutorial RSVP and cloud VM reservation form"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          >
            Loading the tutorial RSVP form…
          </iframe>
        </div>
      </div>
    </section>
  );
}
