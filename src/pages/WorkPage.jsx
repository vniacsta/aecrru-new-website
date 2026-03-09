import { useEffect, useState } from "react";
import GalleryModal from "../components/GalleryModal";
import PageIntro from "../components/PageIntro";
import WorkSection from "../components/WorkSection";
import { workSections } from "../data/siteData";

function WorkPage() {
  const [activeModal, setActiveModal] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const activeGallery = workSections.find((section) => section.id === activeModal);

  useEffect(() => {
    document.body.style.overflow = activeGallery ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeGallery]);

  useEffect(() => {
    setGalleryIndex(0);
  }, [activeModal]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!activeGallery) {
        return;
      }

      if (event.key === "Escape") {
        setActiveModal(null);
      }

      if (event.key === "ArrowRight") {
        setGalleryIndex((current) => (current + 1) % activeGallery.images.length);
      }

      if (event.key === "ArrowLeft") {
        setGalleryIndex(
          (current) =>
            (current - 1 + activeGallery.images.length) % activeGallery.images.length,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeGallery]);

  return (
    <>
      <PageIntro
        eyebrow="Áreas de Intervenção"
        title="Portefólio visual organizado por especialidade."
        text="Em vez de concentrar toda a navegação numa só página, cada frente de trabalho ganha mais contexto, leitura e foco visual."
        media="/media/work-type-4/type4-05.jpg"
      />

      <WorkSection sections={workSections} onOpenGallery={setActiveModal} />

      {activeGallery ? (
        <GalleryModal
          gallery={activeGallery}
          index={galleryIndex}
          onClose={() => setActiveModal(null)}
          onPrevious={() =>
            setGalleryIndex(
              (current) =>
                (current - 1 + activeGallery.images.length) % activeGallery.images.length,
            )
          }
          onNext={() =>
            setGalleryIndex((current) => (current + 1) % activeGallery.images.length)
          }
          onSelect={setGalleryIndex}
        />
      ) : null}
    </>
  );
}

export default WorkPage;
