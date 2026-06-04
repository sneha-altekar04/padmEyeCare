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
  {
    src: "/ourtechnology/Topcon%20OMS%2090%20Operating%20Microscope.jpg",
    name: "Topcon OMS 90 Operating Microscope",
    desc: "High-definition optics for precise surgical procedures",
  },
  {
    src: "/ourtechnology/YAG%20Laser.jpg",
    name: "YAG Laser",
    desc: "Laser treatment for posterior capsule opacification & glaucoma",
  },
  {
    src: "/ourtechnology/Slit%20Lamp.jpg",
    name: "Slit Lamp",
    desc: "Detailed examination of anterior & posterior eye segments",
  },
  {
    src: "/ourtechnology/Non-Contact%20Tonometer.jpg",
    name: "Non-Contact Tonometer",
    desc: "Painless intraocular pressure measurement for glaucoma screening",
  },
  {
    src: "/ourtechnology/Auto%20Refraction%20with%20Keratometer.jpg",
    name: "Auto Refraction with Keratometer",
    desc: "Automated measurement of refractive error & corneal curvature",
  },
  {
    src: "/ourtechnology/A-Scan.jpg",
    name: "A-Scan Biometry",
    desc: "Ultrasound-based eye length measurement for IOL power calculation",
  },
  {
    src: "/ourtechnology/Motorised%20Operating%20Table.jpg",
    name: "Motorised Operating Table",
    desc: "Fully adjustable surgical table for patient comfort & precision",
  }
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
