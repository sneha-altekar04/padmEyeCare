import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./GallerySection.css";

const galleryImages = [
  "/gallaryphotoes/PUKT0034.JPG",
  "/gallaryphotoes/PUKT0039.JPG",
  "/gallaryphotoes/PUKT0041.JPG",
  "/gallaryphotoes/PUKT0075.JPG",
  "/gallaryphotoes/PUKT0078.JPG",
  "/gallaryphotoes/PUKT0233.JPG",
  "/gallaryphotoes/PUKT0251.JPG",
  "/gallaryphotoes/PUKT0281.JPG",
  "/gallaryphotoes/PUKT0321.JPG",
  "/gallaryphotoes/doctor-profile.jpg",
  "/gallaryphotoes/PUKT0354.JPG",
  "/gallaryphotoes/PUKT0443.JPG",
  "/gallaryphotoes/PUKT0451.JPG",
  "/gallaryphotoes/PUKT0542.JPG",
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoRotate = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3600);

    return () => window.clearInterval(autoRotate);
  }, []);

  const activeImage = galleryImages[activeIndex];

  const thumbnailTrack = useMemo(() => {
    return galleryImages.slice(0, 8);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <p className="gallery-kicker">Visual Tour</p>
          <h2>Hospital Gallery</h2>
          <p>Explore our facilities, technology, and patient-care environment.</p>
        </div>

        <div className="gallery-showcase">
          <button className="showcase-nav prev" onClick={prevSlide} aria-label="Previous photo">
            <ChevronLeft size={18} />
          </button>

          <div className="showcase-main">
            <img src={activeImage} alt={`Gallery Highlight ${activeIndex + 1}`} loading="lazy" />
            <div className="showcase-badge">{activeIndex + 1} / {galleryImages.length}</div>
          </div>

          <button className="showcase-nav next" onClick={nextSlide} aria-label="Next photo">
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="showcase-thumbs">
          {thumbnailTrack.map((image, index) => (
            <button
              key={image}
              className={`thumb-btn ${activeImage === image ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open gallery image ${index + 1}`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <article className="gallery-card" key={`${image}-${index}`} style={{ animationDelay: `${index * 30}ms` }}>
              <img src={image} alt={`Padm Eye Care Gallery ${index + 1}`} loading="lazy" />
            </article>
          ))}
        </div>

        <div className="gallery-footer">
          <span>Animated gallery loaded from gallaryphotoes folder.</span>
        </div>
      </div>
    </section>
  );
}
