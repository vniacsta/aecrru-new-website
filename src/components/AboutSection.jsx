import "./AboutSection.css";

function AboutSection({ columns }) {
  return (
    <section className="about section-shell section-reveal">
      <div className="section-heading">
        <p className="section-label">Quem Somos</p>
        <h2>História e valores apresentados com mais respiro editorial.</h2>
      </div>
      <article className="two-column">
        {columns.map((column) => (
          <div className="text-card" key={column.title}>
            <h4>{column.title}</h4>
            <div className="text-card__content">
              {column.paragraphs.map((paragraph, index) => (
                <p key={`${column.title}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

export default AboutSection;
