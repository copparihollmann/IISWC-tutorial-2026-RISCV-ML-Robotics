import { tutorial } from "../data/tutorial";
import { SectionHeading } from "./SectionHeading";

export function Agenda() {
  return (
    <section id="agenda" className="section agenda-section" aria-labelledby="agenda-title">
      <div className="container">
        <SectionHeading
          id="agenda-title"
          eyebrow="Sunday afternoon"
          title="Tutorial Agenda"
          description={<p>The tutorial begins at {tutorial.event.time} and consists of two sessions separated by a coffee break.</p>}
        />

        <div className="agenda-list">
          {tutorial.agenda.map((session, sessionIndex) => (
            <div className="agenda-session-wrap" key={session.label}>
              <article className="agenda-session">
                <header>
                  <span>{String(sessionIndex + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{session.label}</h3>
                    <small>Segment times TBD</small>
                  </div>
                </header>
                <ol>
                  {session.items.map((item) => (
                    <li key={item.title}>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
              {sessionIndex === 0 ? (
                <div className="coffee-break" aria-label="Coffee break between sessions">
                  <span>Time TBD</span>
                  <strong>Coffee Break</strong>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <p className="timing-note"><span>Timing</span> Detailed segment times will be posted when finalized.</p>
      </div>
    </section>
  );
}
