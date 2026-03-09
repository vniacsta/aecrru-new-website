import "./WorkSection.css";
import { GalleryIcon } from "./icons";

function WorkSection({ sections, onOpenGallery }) {
  return (
    <section className="work section-shell section-reveal">
      <div className="section-heading work__heading">
        <p className="section-label">Áreas de Intervenção</p>
        <h2>Seleção visual organizada por tipologia de projeto.</h2>
      </div>

      <article className="work-grid">
        {sections.map((section) => (
          <div className="work-card" key={section.id}>
            <h4>{section.title}</h4>
            <div
              className="work-type"
              style={{ backgroundImage: `url(${section.cover})` }}
            >
              <button
                type="button"
                className="btn-more"
                onClick={() => onOpenGallery(section.id)}
                aria-label={`Abrir galeria ${section.title}`}
              >
                <GalleryIcon />
              </button>
            </div>
            <p className="work-card__description">{section.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default WorkSection;
