import { useEffect } from "react";
import "./TechnologyPopup.css";

const EQUIPMENT = [
  {
    src: "/ourtechnology/Oertli%20phacoemulsification%20machine.jpeg",
    name: "Oertli Phacoemulsification Machine",
    desc: "CataRhex 3 – precision cataract surgery system",
  },
  {
    src: "/ourtechnology/Topcon%20autorefracto-keratometer.jpeg",
    name: "Topcon Autorefracto-Keratometer",
    desc: "Accurate measurement of eye power & corneal curvature",
  },
];

export default function TechnologyPopup({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="tech-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Our Technology"
    >
      <div className="tech-modal" onClick={(e) => e.stopPropagation()}>
        <button className="tech-close" onClick={onClose} aria-label="Close popup">
          &times;
        </button>

        <h2 className="tech-title">Our Technology</h2>
        <p className="tech-subtitle">
          State-of-the-art equipment for precise diagnosis &amp; treatment
        </p>

        <div className="tech-grid">
          {EQUIPMENT.map((item) => (
            <div key={item.name} className="tech-card">
              <div className="tech-img-wrap">
                <img src={item.src} alt={item.name} className="tech-img" loading="lazy" />
              </div>
              <div className="tech-card-info">
                <p className="tech-name">{item.name}</p>
                <p className="tech-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
