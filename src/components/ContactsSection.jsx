import "./ContactsSection.css";
import { AddressCardIcon } from "./icons";

function ContactsSection({ contactItems, intro }) {
  return (
    <section className="contacts section-shell section-reveal">
      <div className="section-heading">
        <p className="section-label">Contactos</p>
        <h2>Todos os pontos de contacto num bloco mais claro.</h2>
        <div className="contacts__intro">
          {Array.isArray(intro)
            ? intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            : <p>{intro}</p>}
        </div>
      </div>

      <article className="contacts-grid">
        <div className="contact-card">
          <AddressCardIcon />
          <img
            src="/media/qrcode.png"
            alt="QR Code with vCard Info"
            className="qrcode"
          />
        </div>

        {contactItems.map((item) => (
          <div className="contact-card" key={item.title}>
            {item.icon}
            <h4>{item.title}</h4>
            {item.content}
          </div>
        ))}
      </article>
    </section>
  );
}

export default ContactsSection;
