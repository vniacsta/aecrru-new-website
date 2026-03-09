import ContactsSection from "../components/ContactsSection";
import PageIntro from "../components/PageIntro";
import { contactIntro, contactItems } from "../data/siteData";
import "./ContactsPage.css";

function ContactsPage() {
  const introMedia = `${import.meta.env.BASE_URL}media/work-type-1/type1-08.jpg`;

  return (
    <div className="contacts-page">
      <PageIntro
        eyebrow="Contactos"
        title="Fale connosco para obra nova, remodelação ou reabilitação."
        text={contactIntro}
        media={introMedia}
      />
      <ContactsSection contactItems={contactItems} intro={contactIntro} />
    </div>
  );
}

export default ContactsPage;
