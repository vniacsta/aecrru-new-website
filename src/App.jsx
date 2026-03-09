import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactsSection from "./components/ContactsSection";
import Footer from "./components/Footer";
import GalleryModal from "./components/GalleryModal";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WorkSection from "./components/WorkSection";
import {
  aboutColumns,
  contactItems,
  heroSlides,
  navLinks,
  workSections,
} from "./data/siteData";
import { useCarousel } from "./hooks/useCarousel";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [heroIndex, setHeroIndex] = useCarousel(heroSlides.length, 4000, true);
  const activeGallery = workSections.find((section) => section.id === activeModal);
  const [galleryIndex, setGalleryIndex] = useCarousel(
    activeGallery?.images.length ?? 0,
    4000,
    Boolean(activeGallery),
  );

  useEffect(() => {
    document.body.style.overflow = activeGallery ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeGallery]);

  useEffect(() => {
    setGalleryIndex(0);
  }, [activeModal, setGalleryIndex]);

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
  }, [activeGallery, setGalleryIndex]);

  const closeMenu = () => setMenuOpen(false);
  const nextHero = () => setHeroIndex((current) => (current + 1) % heroSlides.length);
  const previousHero = () =>
    setHeroIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((current) => !current)}
        onCloseMenu={closeMenu}
        navLinks={navLinks}
      />

      <main className="page-shell">
        <HeroSection
          slides={heroSlides}
          activeIndex={heroIndex}
          onSelect={setHeroIndex}
          onPrevious={previousHero}
          onNext={nextHero}
        />
        <AboutSection columns={aboutColumns} />
        <WorkSection sections={workSections} onOpenGallery={setActiveModal} />
        <ContactsSection contactItems={contactItems} />
      </main>

      <Footer />

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

export default App;
