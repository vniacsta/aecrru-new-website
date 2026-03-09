import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

function HeroSection({ slides, activeIndex, onSelect, onPrevious, onNext }) {
  return (
    <section className="home" id="home">
      <h1 className="sr-only">
        AECRRU | Agostinho Emanuel Construção, Remodelação, Reabilitação, Unip.
        Lda.
      </h1>

      <article className="carousel">
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={slide}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide})` }}
              aria-hidden={index !== activeIndex}
            >
              <img
                src="/media/logo-aecrru-shadow.png"
                alt="Logo AECRRU"
                className="main-logo"
              />
            </div>
          ))}
        </div>

        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide}
              type="button"
              className={index === activeIndex ? "active" : ""}
              onClick={() => onSelect(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-control prev"
          onClick={onPrevious}
          aria-label="Anterior"
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          className="carousel-control next"
          onClick={onNext}
          aria-label="Próxima"
        >
          <ChevronRightIcon />
        </button>
      </article>
    </section>
  );
}

export default HeroSection;
