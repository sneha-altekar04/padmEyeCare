import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Menu, X, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import TechnologyPopup from "./TechnologyPopup";
import "./navbar.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const isMarathi = i18n.language === "mr";

  const toggleLang = () => {
    i18n.changeLanguage(isMarathi ? "en" : "mr");
  };

  const handleSectionNavigation = (event, href) => {
    if (!href.startsWith("/#")) return;

    event.preventDefault();
    setMenuOpen(false);

    const sectionId = href.replace("/#", "");

    if (window.location.pathname !== "/") {
      window.location.href = href;
      return;
    }

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  const navLinks = [
    { label: "Doctors", href: "/#doctor" },
    { label: "Treatments", href: "/#treatments" },
    { label: "Technology", href: "/#services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Insurance", href: "/#insurance" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* LEFT MENU — desktop */}
        <nav className="nav-left">
          {navLinks.map((link) =>
            link.label === "Technology" ? (
              <button
                key={link.label}
                className="nav-tech-btn"
                onClick={() => setShowTech(true)}
              >
                {link.label}
              </button>
            ) : link.href === "/gallery" ? (
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
                onClick={(event) => handleSectionNavigation(event, link.href)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* CENTER BRAND */}
        <Link
          to="/"
          className="nav-logo"
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src="/logo.png" alt="Padm Eye Care logo" />
          <div className="brand-text">
            <span className="brand-name">{t("nav_title")}</span>
            <span className="brand-subtitle">
              {isMarathi ? "नेत्रतपासणी | मोतीबिंदू | बालरोग नेत्रचिकित्सा" : "Eye Checkup | Cataract | Pediatric Ophthalmology"}
            </span>
          </div>
        </Link>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <a href="tel:7030775791" className="icon" title="Call Us">
            <Phone size={18} />
          </a>
          <a href="/#contact" className="icon" title="Location">
            <MapPin size={18} />
          </a>
          <a
            href="https://www.instagram.com/padmeyecarepen?igsh=MXhmcm9jYjJ4aGp5Zw=="
            className="icon"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100066816640081&name=xhp_nt__fb__action__open_user"
            className="icon"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={16} />
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
          link.label === "Technology" ? (
            <button
              key={link.label}
              className="mobile-link mobile-tech-btn"
              onClick={() => { setShowTech(true); setMenuOpen(false); }}
            >
              {link.label}
            </button>
          ) : link.href === "/gallery" ? (
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
              onClick={(event) => handleSectionNavigation(event, link.href)}
            >
              {link.label}
            </a>
          )
        )}
        <div className="mobile-contacts">
          <a href="tel:7030775791"><Phone size={14} /> 7030775791</a>
          <a href="tel:9859853853"><Phone size={14} /> 9859853853</a>
        </div>
        <div className="mobile-icons">
          <a href="tel:7030775791" className="mobile-icon-btn" title="Call Us"><Phone size={18} /></a>
          <a href="/#contact" className="mobile-icon-btn" title="Location" onClick={(e) => handleSectionNavigation(e, "/#contact")}><MapPin size={18} /></a>
          <a href="https://www.instagram.com" className="mobile-icon-btn" title="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={18} /></a>
          <a href="https://www.facebook.com" className="mobile-icon-btn" title="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF size={18} /></a>
          <a href="mailto:padmeyecare@gmail.com" className="mobile-icon-btn" title="Email"><Mail size={18} /></a>
        </div>
      </div>

      {/* FLOATING WHATSAPP — mobile only */}
      <a
        href="https://wa.me/917030775791"
        className="float-wa-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
      </a>

      {showTech && <TechnologyPopup onClose={() => setShowTech(false)} />}
    </header>
  );
}