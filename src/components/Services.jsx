import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Services.css";

const serviceData = [
  {
    icon: "👁️",
    en: "Computerised Eye Check Up",
    mr: "संगणकाद्वारे डोळे तपासणी",
    desc_en: "Advanced computerised examination for accurate diagnosis",
    desc_mr: "अचूक निदानासाठी अत्याधुनिक संगणक तपासणी",
    details_en: "Includes vision screening, refraction, slit lamp evaluation, and digital records.",
    details_mr: "व्हिजन स्क्रीनिंग, रेफ्रॅक्शन, स्लिट लॅम्प तपासणी आणि डिजिटल नोंदींचा समावेश.",
    images: ["/checkup.jpg", "/hero-eye.jpg", "/doctor.jpg"]
  },
  {
    icon: "🔬",
    en: "Cataract Diagnosis & Treatment",
    mr: "मोतीबिंदू निदान व उपचार",
    desc_en: "Slit lamp, A Scan, Phacoemulsification (SICS)",
    desc_mr: "स्लिट लॅम्प, A स्कॅन, प्रगत फेकोइमल्सिफिकेशन, SICS",
    details_en: "From diagnosis to surgery planning with foldable lens options and post-op follow-up.",
    details_mr: "निदानापासून शस्त्रक्रिया नियोजन, फोल्डेबल लेन्स पर्याय आणि पोस्ट-ऑप फॉलोअपपर्यंत सेवा.",
    images: ["/cataract.jpg", "/checkup.jpg", "/hero-eye.jpg"]
  },
  {
    icon: "🩺",
    en: "Retina / Diabetic Eye Check Up",
    mr: "रेटिना / मधुमेह डोळा तपासणी",
    desc_en: "Fundus examination, OCT, Intra-Vitreal Injection",
    desc_mr: "फंडस तपासणी, OCT, इंट्रा-विट्रियल इंजेक्शन",
    details_en: "Specialized retina evaluation for diabetic retinopathy, macular issues, and early intervention.",
    details_mr: "डायबेटिक रेटिनोपथी, मॅक्युला समस्या आणि लवकर हस्तक्षेपासाठी विशेष तपासणी.",
    images: ["/retina.jpg", "/hero-eye.jpg", "/checkup.jpg"]
  },
  {
    icon: "👀",
    en: "Squint & Oculoplasty",
    mr: "स्क्विंट व ऑक्युलोप्लास्टी",
    desc_en: "Squint correction and eyelid surgeries",
    desc_mr: "तिरळेपणा सुधारणा व पापण्यांच्या शस्त्रक्रिया",
    details_en: "Functional and cosmetic correction for squint, droopy eyelids, and periocular conditions.",
    details_mr: "तिरळेपणा, पापणी समस्या आणि डोळ्याभोवतीच्या स्थितींसाठी कार्यात्मक व सौंदर्यात्मक उपचार.",
    images: ["/doctor.jpg", "/checkup.jpg", "/hero-eye.jpg"]
  },
  {
    icon: "💧",
    en: "Glaucoma Diagnosis & Management",
    mr: "काचबिंदू निदान व उपचार",
    desc_en: "Tonometer, Trab Surgery, Applanation, YAG PI",
    desc_mr: "टोनोमीटर, ट्रॅब शस्त्रक्रिया, YAG PI",
    details_en: "Regular pressure monitoring and long-term glaucoma management with medical and surgical plans.",
    details_mr: "नियमित प्रेशर मॉनिटरिंग आणि औषध/शस्त्रक्रियेच्या दीर्घकालीन व्यवस्थापनाची योजना.",
    images: ["/glaucoma.jpg", "/checkup.jpg", "/hero-eye.jpg"]
  },
  {
    icon: "⚡",
    en: "Laser Facility & Treatment",
    mr: "लेझरद्वारे उपचार",
    desc_en: "YAG Laser, Green Laser",
    desc_mr: "YAG लेझर, ग्रीन लेझर",
    details_en: "In-clinic laser procedures for retina and anterior segment conditions with quick recovery.",
    details_mr: "रेटिना आणि अँटेरियर सेगमेंट समस्यांसाठी क्लिनिकमध्येच लेझर उपचार आणि जलद पुनर्वसन.",
    images: ["/laser.jpg", "/retina.jpg", "/hero-eye.jpg"]
  },
  {
    icon: "✨",
    en: "LASIK Treatment",
    mr: "लॅसिक उपचार",
    desc_en: "Laser vision correction to eliminate spectacle power",
    desc_mr: "लेझरद्वारे चष्म्याचे नंबर घालवणे",
    details_en: "Detailed corneal workup and vision correction pathway for suitable candidates.",
    details_mr: "योग्य उमेदवारांसाठी कॉर्नियल वर्कअप आणि दृष्टी सुधारण्यासाठी टप्प्याटप्प्याची प्रक्रिया.",
    images: ["/lasik.jpg", "/laser.jpg", "/hero-eye.jpg"]
  }
];

export default function Services() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language === "mr";
  const [activeTreatment, setActiveTreatment] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showTreatmentsOverview, setShowTreatmentsOverview] = useState(false);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveTreatment(null);
        setShowTreatmentsOverview(false);
      }
    };

    const handleOpenFromMenu = () => {
      setShowTreatmentsOverview(true);
    };

    const handleHashOpen = () => {
      if (window.location.hash === "#treatments") {
        handleOpenFromMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("open-treatment-popup", handleOpenFromMenu);
    window.addEventListener("hashchange", handleHashOpen);
    handleHashOpen();

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("open-treatment-popup", handleOpenFromMenu);
      window.removeEventListener("hashchange", handleHashOpen);
    };
  }, []);

  const openTreatmentModal = (service) => {
    setActiveTreatment(service);
    setActiveSlide(0);
  };

  const moveSlide = (direction) => {
    if (!activeTreatment) return;

    const total = activeTreatment.images.length;
    setActiveSlide((prev) => (prev + direction + total) % total);
  };

  return (
    <section className="services" id="services">
      <div id="treatments" className="section-anchor" aria-hidden="true" />
      <div className="services-container">
        <div className="section-header">
          <h2>{t("services_heading")}</h2>
          <p>{t("services_sub")}</p>
        </div>

        <div className="service-grid">
          {serviceData.map((service, index) => (
            <button
              type="button"
              className="service-card"
              key={index}
              onClick={() => openTreatmentModal(service)}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{isMarathi ? service.mr : service.en}</h3>
                <p className="service-sub">{isMarathi ? service.en : service.mr}</p>
                <p className="service-desc">{isMarathi ? service.desc_mr : service.desc_en}</p>
              </div>
            </button>
          ))}
        </div>

        {showTreatmentsOverview && (
          <div className="treatments-overview-backdrop" onClick={() => setShowTreatmentsOverview(false)}>
            <div
              className="treatments-overview-modal"
              role="dialog"
              aria-modal="true"
              aria-label={t("treatments_modal_heading")}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="treatments-overview-header">
                <div className="treatments-overview-title-wrap">
                  <h2>{t("treatments_modal_heading")}</h2>
                  <p>{t("treatments_modal_sub")}</p>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setShowTreatmentsOverview(false)}
                  aria-label={t("treatments_modal_close")}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="treatments-overview-grid">
                {serviceData.map((service, index) => (
                  <button
                    type="button"
                    className="treatments-overview-card"
                    key={index}
                    style={{ animationDelay: `${0.06 * index}s` }}
                    onClick={() => {
                      setShowTreatmentsOverview(false);
                      openTreatmentModal(service);
                    }}
                  >
                    <div className="treatments-overview-icon">{service.icon}</div>
                    <div className="treatments-overview-info">
                      <h3>{isMarathi ? service.mr : service.en}</h3>
                      <p className="treatments-overview-alt-lang">{isMarathi ? service.en : service.mr}</p>
                      <p>{isMarathi ? service.desc_mr : service.desc_en}</p>
                    </div>
                    <span className="treatments-overview-arrow">›</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTreatment && (
          <div className="treatment-modal-backdrop" onClick={() => setActiveTreatment(null)}>
            <div
              className="treatment-modal"
              role="dialog"
              aria-modal="true"
              aria-label={isMarathi ? activeTreatment.mr : activeTreatment.en}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                onClick={() => setActiveTreatment(null)}
                aria-label="Close treatment details"
              >
                <X size={18} />
              </button>

              <div className="treatment-modal-grid">
                <div className="modal-slider-wrap">
                  <div className="modal-slider-main">
                    <img
                      src={activeTreatment.images[activeSlide]}
                      alt={`${activeTreatment.en} image ${activeSlide + 1}`}
                    />
                    <button
                      type="button"
                      className="modal-nav prev"
                      onClick={() => moveSlide(-1)}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      className="modal-nav next"
                      onClick={() => moveSlide(1)}
                      aria-label="Next image"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="modal-slider-dots">
                    {activeTreatment.images.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        className={`modal-dot ${activeSlide === index ? "active" : ""}`}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Open image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="treatment-modal-content">
                  <div className="treatment-modal-banner">
                    <span className="modal-icon">{activeTreatment.icon}</span>
                    <h3>{isMarathi ? activeTreatment.mr : activeTreatment.en}</h3>
                  </div>
                  <div className="treatment-modal-body">
                    <p>{isMarathi ? activeTreatment.desc_mr : activeTreatment.desc_en}</p>
                    <p>{isMarathi ? activeTreatment.details_mr : activeTreatment.details_en}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
