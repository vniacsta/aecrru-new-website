import "./HeroSection.css";
import { Link } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

function HeroSection({ slides, activeIndex, onSelect, onPrevious, onNext }) {
  const logoSrc = `${import.meta.env.BASE_URL}media/logo-aecrru-shadow.png`;

  return (
    <section className="home-hero">
      <h1 className="sr-only">
        AECRRU | Agostinho Emanuel Construção, Remodelação, Reabilitação, Unip.
        Lda.
      </h1>

      <article className="hero-frame">
        <div className="hero-copy">
          <p className="section-label">AECRRU</p>
          <h2>Construir com clareza. Remodelar com critério.</h2>
          <p>
            Uma apresentação mais contemporânea para a mesma empresa de construção,
            remodelação e reabilitação.
          </p>
          <div className="hero-copy__actions">
            <Link className="button button--primary" to="/quem-somos">
              Conhecer a empresa
            </Link>
            <Link className="button button--ghost" to="/contactos">
              Contactar
            </Link>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={slide}
              className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide})` }}
              aria-hidden={index !== activeIndex}
            >
              <img
                src={logoSrc}
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
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
