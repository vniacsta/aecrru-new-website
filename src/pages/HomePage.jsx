import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import {
  companyMetrics,
  heroSlides,
  homeHighlights,
  workSections,
} from "../data/siteData";
import { useCarousel } from "../hooks/useCarousel";
import "./HomePage.css";

function HomePage() {
  const [heroIndex, setHeroIndex] = useCarousel(heroSlides.length, 4000, true);

  return (
    <div className="home-page">
      <HeroSection
        slides={heroSlides}
        activeIndex={heroIndex}
        onSelect={setHeroIndex}
        onPrevious={() =>
          setHeroIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)
        }
        onNext={() => setHeroIndex((current) => (current + 1) % heroSlides.length)}
      />

      <section className="home-page__intro section-shell">
        <div className="home-page__statement">
          <p className="section-label">AECRRU</p>
          <h2>Construção, remodelação e reabilitação com uma linguagem mais atual.</h2>
          <p>
            Mantemos a mesma base de atuação da empresa, agora organizada numa
            experiência mais clara: apresentação, especialidades, portefólio de
            imagens e contactos em páginas próprias.
          </p>
          <div className="home-page__actions">
            <Link className="button button--primary" to="/areas-de-intervencao">
              Ver áreas de intervenção
            </Link>
            <Link className="button button--secondary" to="/contactos">
              Pedir contacto
            </Link>
          </div>
        </div>

        <div className="home-page__metrics">
          {companyMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell home-page__highlights">
        <div className="section-heading">
          <p className="section-label">Capacidades</p>
          <h2>Uma presença mais editorial, sem perder a identidade da marca.</h2>
        </div>

        <div className="highlight-grid">
          {homeHighlights.map((item) => (
            <article className="highlight-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell home-page__featured-work">
        <div className="section-heading">
          <p className="section-label">Projetos</p>
          <h2>Quatro frentes de trabalho apresentadas como coleção.</h2>
        </div>

        <div className="featured-work-grid">
          {workSections.map((section) => (
            <article className="featured-work-card" key={section.id}>
              <div
                className="featured-work-card__image"
                style={{ backgroundImage: `url(${section.cover})` }}
              />
              <div className="featured-work-card__body">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
