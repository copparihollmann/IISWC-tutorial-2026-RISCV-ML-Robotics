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
          description={<p>Two sessions beginning at {tutorial.event.time}, separated by a coffee break.</p>}
        />

        <div className="agenda-list">
          {tutorial.agenda.map((session, sessionIndex) => (
            <div className="agenda-session-wrap" key={session.label}>
              <article className="agenda-session">
                <header>
                  <span>{String(sessionIndex + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{session.label}</h3>
                    <small>Detailed timing TBD</small>
                  </div>
                </header>
                <ol>
                  {session.items.map((item) => (
                    <li className={item.handsOn ? "agenda-item--lab" : undefined} key={item.title}>
                      <span className="agenda-time">Time TBD</span>
                      <div>
                        {item.handsOn ? <small>Hands-on</small> : null}
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

        <p className="timing-note"><span>Schedule note</span> Detailed timing coming soon.</p>
      </div>
    </section>
  );
}
