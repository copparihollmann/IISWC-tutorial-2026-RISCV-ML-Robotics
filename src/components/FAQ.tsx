import { tutorial } from "../data/tutorial";
import { ChevronIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <SectionHeading id="faq-title" eyebrow="Practical information" title="Frequently Asked Questions" compact />
        <div className="faq-list">
          {tutorial.faq.map((item) => (
            <details key={item.question}>
              <summary><span>{item.question}</span><ChevronIcon /></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
