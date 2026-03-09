import { GalleryIcon } from "./icons";

function WorkSection({ sections, onOpenGallery }) {
  return (
    <section className="work section-reveal" id="work">
      <h2>Áreas de Intervenção</h2>

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
          </div>
        ))}
      </article>
    </section>
  );
}

export default WorkSection;
