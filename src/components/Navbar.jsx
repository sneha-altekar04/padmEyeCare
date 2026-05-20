import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Menu, X, Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMarathi = i18n.language === "mr";

  const toggleLang = () => {
    i18n.changeLanguage(isMarathi ? "en" : "mr");
  };

  const navLinks = [
    { label: "Our Technology", href: "/#services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Treatments", href: "/#treatments" },
    { label: "Meet Doctors", href: "/#doctor" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LEFT MENU — desktop */}
        <nav className="nav-left">
          {navLinks.map((link) => 
            link.href === "/gallery" ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (link.href === "/#treatments") {
                    window.dispatchEvent(new CustomEvent("open-treatment-popup"));
                  }
                  setMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CENTER BRAND */}
        <div className="nav-logo">
          <img src="/logo.png" alt="Padm Eye Care logo" />
          <div className="brand-text">
            <span className="brand-name">{t("nav_title")}</span>
            <span className="brand-subtitle">
              {isMarathi ? "नेत्रतपासणी | मोतीबिंदू | बालरोग नेत्रचिकित्सा" : "Eye Checkup | Cataract | Pediatric Ophthalmology"}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <a href="tel:7030775791" className="icon" title="Call Us">
            <Phone size={18} />
          </a>
          <a href="/#contact" className="icon" title="Location">
            <MapPin size={18} />
          </a>
          <a
            href="https://www.instagram.com"
            className="icon"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={16} />
          </a>
          <a href="mailto:padmeyecare@gmail.com" className="icon" title="Email">
            <Mail size={16} />
          </a>
          <a
            href="https://wa.me/917030775791"
            className="icon"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={16} />
          </a>
          <button className="lang-toggle" onClick={toggleLang}>
            {isMarathi ? "EN" : "मराठी"}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) =>
          link.href === "/gallery" ? (
            <Link
              key={link.label}
              to={link.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="mobile-link"
              onClick={() => {
                if (link.href === "/#treatments") {
                  window.dispatchEvent(new CustomEvent("open-treatment-popup"));
                }
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          )
        )}
        <div className="mobile-contacts">
          <a href="tel:7030775791"><Phone size={14} /> 7030775791</a>
          <a href="tel:9859853853"><Phone size={14} /> 9859853853</a>
        </div>
      </div>
    </header>
  );
}