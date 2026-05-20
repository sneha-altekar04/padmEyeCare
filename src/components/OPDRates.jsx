import { useTranslation } from "react-i18next";
import "./OPDRates.css";

const rates_en = [
  { label: "1st OPD Visit (First Checkup)", price: "₹250", highlight: false },
  { label: "1 Week to 15 Days Follow Up", price: "FREE", highlight: true },
  { label: "15 Days to 1 Month Follow Up", price: "₹150", highlight: false },
  { label: "After 1 Month", price: "₹250", highlight: false },
  { label: "A Scan Charges", price: "₹400", highlight: false },
  { label: "YAG Cap Laser (Per Eye)", price: "₹1300", highlight: false },
  { label: "Retina Consultant Fees", price: "₹400", highlight: false },
  { label: "OCT Charges (Both Eyes)", price: "₹1800", highlight: false }
];

const rates_mr = [
  { label: "पहिली ओपीडी भेट (पहिला चेकअप)", price: "₹२५०", highlight: false },
  { label: "१ आठवडा ते १५ दिवस फॉलो अप", price: "मोफत", highlight: true },
  { label: "१५ दिवस ते १ महिना फॉलो अप", price: "₹१५०", highlight: false },
  { label: "१ महिन्यानंतर", price: "₹२५०", highlight: false },
  { label: "A स्कॅन शुल्क", price: "₹४००", highlight: false },
  { label: "YAG लेझर (प्रति डोळा)", price: "₹१३००", highlight: false },
  { label: "रेटिना सल्लागार शुल्क", price: "₹४००", highlight: false },
  { label: "OCT शुल्क (दोन्ही डोळे)", price: "₹१८००", highlight: false }
];

export default function OPDRates() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language === "mr";
  const rates = isMarathi ? rates_mr : rates_en;

  return (
    <section className="opd-section">
      <div className="opd-container">
        <div className="section-header">
          <h2>{t("opd_heading")}</h2>
          <p>{t("opd_sub")}</p>
        </div>

        <div className="opd-card">
          <div className="opd-brand">
            <span className="opd-brand-title">
              {isMarathi ? "पद्म सुपरस्पेशालिटी आय केअर" : "Padm Superspeciality Eye Care"}
            </span>
          </div>

          <div className="opd-list">
            {rates.map((rate, i) => (
              <div className={`opd-row ${rate.highlight ? "free-row" : ""}`} key={i}>
                <div className="opd-bullet">➤</div>
                <span className="opd-label">{rate.label}</span>
                <span className={`opd-price ${rate.highlight ? "free-price" : ""}`}>
                  {rate.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
