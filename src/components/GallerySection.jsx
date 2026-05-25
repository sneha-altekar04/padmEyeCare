import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./GallerySection.css";

const galleryImages = Object.keys(
  import.meta.glob("/public/galleryphotoes/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}")
)
  .sort((a, b) => a.localeCompare(b))
  .map((filePath) => filePath.replace("/public", ""));

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = galleryImages.length;

  useEffect(() => {
    if (!totalImages) return undefined;

    const autoRotate = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalImages);
    }, 3600);

    return () => window.clearInterval(autoRotate);
  }, [totalImages]);

  const activeImage = galleryImages[activeIndex] ?? "";

  const thumbnailTrack = useMemo(() => {
    return galleryImages.slice(0, 8);
  }, []);

  const nextSlide = () => {
    if (!totalImages) return;
    setActiveIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    if (!totalImages) return;
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
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
            {activeImage ? (
              <img src={activeImage} alt={`Gallery Highlight ${activeIndex + 1}`} loading="lazy" />
            ) : (
              <p>No gallery images found in /public/galleryphotoes.</p>
            )}
            <div className="showcase-badge">{totalImages ? activeIndex + 1 : 0} / {totalImages}</div>
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
          <span>Animated gallery loaded from galleryphotoes folder.</span>
        </div>
      </div>
    </section>
  );
}
