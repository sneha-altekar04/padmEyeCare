import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import TechnologyPopup from "./TechnologyPopup";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  const [showTech, setShowTech] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/logo.png" alt="logo" className="footer-logo" />
          <h3>Padm Superspeciality Eye Care</h3>
          <p>{t("footer_tagline")}</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <button
                className="footer-tech-btn"
                onClick={() => setShowTech(true)}
              >
                Technology
              </button>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/#treatments">Treatments</a>
            </li>
            <li>
              <a href="/#doctor">Meet Doctors</a>
            </li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            📍 Plot No. 40, Anand Nagar,
            <br />
            Behind Gajanan Maharaj Temple,
            <br />
            Ramwadi, Pen – 402107
          </p>
          <p>
            <a href="tel:7030775791">📞 7030775791</a>
          </p>
          <p>
            <a href="tel:9859853853">📞 9859853853</a>
          </p>
          <p>
            <a href="mailto:padmeyecare@gmail.com">✉ padmeyecare@gmail.com</a>
          </p>
        </div>

        <div className="footer-hours">
          <h4>Timings</h4>
          <p>Mon – Sat</p>
          <p>🌅 9:30 AM – 12:00 PM</p>
          <p>🌆 5:00 PM – 6:30 PM</p>
          <p className="footer-note">Call before visiting</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <span>Developed By</span>
          <a
            href="mailto:techwisesolutions2026@gmail.com"
            className="footer-company-link"
            aria-label="Contact Techwise Solutions"
          >
            <img
              src="/company-logo.png"
              alt="Techwise Solutions"
              className="logo"
            />
          </a>
          <div
            className="footer-dev-actions"
            aria-label="Developer contact actions"
          >
            <a
              href="tel:8530886358"
              className="footer-dev-icon"
              title="Call Us"
              aria-label="Call Techwise Solutions"
            >
              <Phone size={16} />
            </a>
            <a
              href="mailto:techwisesolutions2026@gmail.com"
              className="footer-dev-icon"
              title="Email"
              aria-label="Email Techwise Solutions"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://wa.me/918530886358"
              className="footer-dev-icon"
              title="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
        <p className="footer-bottom-right">{t("footer_rights")}</p>
      </div>

      {showTech && <TechnologyPopup onClose={() => setShowTech(false)} />}
    </footer>
  );
}
