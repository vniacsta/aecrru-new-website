import ContactsSection from "../components/ContactsSection";
import PageIntro from "../components/PageIntro";
import { contactIntro, contactItems } from "../data/siteData";
import "./ContactsPage.css";

function ContactsPage() {
  return (
    <div className="contacts-page">
      <PageIntro
        eyebrow="Contactos"
        title="Fale connosco para obra nova, remodelação ou reabilitação."
        text={contactIntro}
        media="/media/work-type-1/type1-08.jpg"
      />
      <ContactsSection contactItems={contactItems} intro={contactIntro} />
    </div>
  );
}

export default ContactsPage;
