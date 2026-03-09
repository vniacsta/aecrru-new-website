import "./PageIntro.css";

function PageIntro({ eyebrow, title, text, media, align = "left" }) {
  return (
    <section className={`page-intro page-intro--${align}`}>
      <div className="page-intro__content">
        {eyebrow ? <p className="page-intro__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <div className="page-intro__text">
          {Array.isArray(text) ? text.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>{text}</p>}
        </div>
      </div>

      {media ? (
        <div className="page-intro__media" style={{ backgroundImage: `url(${media})` }} />
      ) : null}
    </section>
  );
}

export default PageIntro;
