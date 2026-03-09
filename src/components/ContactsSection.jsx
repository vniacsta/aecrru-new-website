import "./ContactsSection.css";
import { AddressCardIcon } from "./icons";

function ContactsSection({ contactItems }) {
  return (
    <section className="contacts section-reveal" id="contacts">
      <h2>Contate-nos</h2>
      <h3>
        Estamos ao seu dispor de segunda a sexta-feira das 9h às 18h.
        <br />
        Aguardamos o seu contato atráves dos meios disponibilizados.
      </h3>

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
