import AboutSection from "../components/AboutSection";
import PageIntro from "../components/PageIntro";
import { aboutColumns, companyMetrics } from "../data/siteData";
import "./AboutPage.css";

function AboutPage() {
  const introMedia = `${import.meta.env.BASE_URL}media/work-type-3/type3-21.jpg`;

  return (
    <div className="about-page">
      <PageIntro
        eyebrow="Quem Somos"
        title="Uma empresa jovem com foco em execução rigorosa."
        text="A AECRRU atua em construção, remodelação e reabilitação com uma estrutura ágil, qualificada e orientada para a satisfação do cliente."
        media={introMedia}
      />

      <section className="section-shell about-page__metrics">
        {companyMetrics.map((metric) => (
          <article className="about-page__metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <AboutSection columns={aboutColumns} />
    </div>
  );
}

export default AboutPage;
