import { useTranslation } from "react-i18next";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

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
            <li><a href="/#services">Our Technology</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/#treatments">Treatments</a></li>
            <li><a href="/#doctor">Meet Doctors</a></li>
            <li><a href="/#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Plot No. 40, Anand Nagar,<br />Behind Gajanan Maharaj Temple,<br />Ramwadi, Pen – 402107</p>
          <p><a href="tel:7030775791">📞 7030775791</a></p>
          <p><a href="tel:9859853853">📞 9859853853</a></p>
          <p><a href="mailto:padmeyecare@gmail.com">✉ padmeyecare@gmail.com</a></p>
        </div>

        <div className="footer-hours">
          <h4>Timings</h4>
          <p>Mon – Sat</p>
          <p>🌅 9:30 AM – 12:00 PM</p>
          <p>🌆 5:00 PM – 6:30 PM</p>
          <p className="footer-note">Tuesday: Call before visiting</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t("footer_rights")}</p>
      </div>
    </footer>
  );
}
