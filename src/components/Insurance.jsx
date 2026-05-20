import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./insurance.css";

const companies_en = [
  "Medi Assist Insurance",
  "Aditya Birla Health Insurance",
  "Care Health Insurance",
  "Go Digit Insurance",
  "SBI General Insurance",
  "HDFC ERGO Health Insurance",
  "Future Generali Health Insurance",
  "Universal Sompo Health Insurance",
  "Manipal Cigna Health Insurance"
];

const companies_mr = [
  "मेडी असिस्ट इन्शुरन्स",
  "आदित्य बिर्ला हेल्थ इन्शुरन्स",
  "केअर हेल्थ इन्शुरन्स",
  "गो डिजिट इन्शुरन्स",
  "SBI जनरल इन्शुरन्स",
  "HDFC ERGO हेल्थ इन्शुरन्स",
  "फ्युचर जनरली हेल्थ इन्शुरन्स",
  "युनिव्हर्सल सोम्पो हेल्थ इन्शुरन्स",
  "मणिपाल सिग्ना हेल्थ इन्शुरन्स"
];

const logoMap = {
  "Medi Assist Insurance": "/insurance/mediassist.png",
  "Aditya Birla Health Insurance": "/insurance/aditya.png",
  "Care Health Insurance": "/insurance/care.png",
  "Go Digit Insurance": "/insurance/digit.png",
  "SBI General Insurance": "/insurance/sbi.png",
  "HDFC ERGO Health Insurance": "/insurance/hdfc.png",
  "Future Generali Health Insurance": "/insurance/future.png",
  "Universal Sompo Health Insurance": "/insurance/universal.png",
  "Manipal Cigna Health Insurance": "/insurance/manipal.png"
};

export default function Insurance() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language === "mr";
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.15 });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  const companies = isMarathi ? companies_mr : companies_en;

  return (
    <section className="insurance">
      <div className="insurance-container">

        <h2>{t("insurance_heading")}</h2>
        <p className="insurance-subtitle">{t("insurance_sub")}</p>

        <div className="insurance-grid">
          {companies.map((name, index) => {
            const logoSrc = logoMap[companies_en[index]];
            return (
              <div
                className="insurance-card"
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div className="insurance-card-inner">
                  <img
                    src={logoSrc}
                    alt={name}
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  <span className="insurance-name">{name}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="insurance-notice">
          <span className="notice-icon">ℹ️</span>
          <p>{t("insurance_note")}</p>
        </div>

      </div>
    </section>
  );
}