import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

function GalleryModal({ gallery, index, onClose, onPrevious, onNext, onSelect }) {
  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={gallery.title}
    >
      <button
        type="button"
        className="modal-overlay"
        onClick={onClose}
        aria-label="Fechar"
      />
      <div className="modal-card">
        <div className="modal-body">
          <img
            src={gallery.images[index]}
            alt="Imagens exemplos de trabalhos realizados"
            className="work-images"
          />

          {gallery.images.length > 1 ? (
            <>
              <button
                type="button"
                className="carousel-control prev modal-arrow"
                onClick={onPrevious}
                aria-label="Anterior"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                className="carousel-control next modal-arrow"
                onClick={onNext}
                aria-label="Próxima"
              >
                <ChevronRightIcon />
              </button>
            </>
          ) : null}
        </div>

        <div className="carousel-indicators modal-indicators">
          {gallery.images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              className={index === imageIndex ? "active" : ""}
              onClick={() => onSelect(imageIndex)}
              aria-label={`Ir para imagem ${imageIndex + 1}`}
            />
          ))}
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn-back"
            onClick={onClose}
            aria-label="Fechar"
          >
            <ChevronLeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GalleryModal;
