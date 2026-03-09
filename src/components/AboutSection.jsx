import "./AboutSection.css";

function AboutSection({ columns }) {
  return (
    <section className="about section-reveal" id="about">
      <h2>Quem Somos</h2>
      <article className="two-column">
        {columns.map((column) => (
          <div className="text-card" key={column.title}>
            <h4>{column.title}</h4>
            {column.content}
          </div>
        ))}
      </article>
    </section>
  );
}

export default AboutSection;
