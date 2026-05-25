import { useTranslation } from "react-i18next";
import "./HospitalInfo.css";

const education_en = [
  "M.B.B.S. – Rural Medical College, Pravranagar (1999–2004)",
  "Internship – KEM Hospital, Parel, Mumbai (2004–2005)",
  "D.O.M.S. – College of Physicians & Surgeons, MBPT Hospital, Mumbai (2007–2009)",
  "DNB (Ophthalmology) – Sankara Eye Hospital, Andhra Pradesh (2010–2012)",
  "Fellowship (Pediatric Ophthalmology) – H.V. Desai Hospital, Pune (2012–2014)"
];

const education_mr = [
  "M.B.B.S. – रुरल मेडिकल कॉलेज, प्रवरानगर (१९९९–२००४)",
  "इंटर्नशिप – के. ई. एम. हॉस्पिटल, परेल, मुंबई (२००४–२००५)",
  "D.O.M.S. – कॉलेज ऑफ फिजिशियन अँड सर्जन, M.B.P.T. हॉस्पिटल, मुंबई (२००७–२००९)",
  "DNB (Ophthalmology) – शंकरा आय हॉस्पिटल, आंध्र प्रदेश (२०१०–२०१२)",
  "Fellowship (Pediatric Ophthalmology) – एच. व्ही. देसाई हॉस्पिटल, पुणे (२०१२–२०१४)"
];

const surgery_en = [
  "More than 20,000 cataract surgeries",
  "More than 4,000 lid and squint surgeries",
  "More than 2,000 pediatric eye surgeries"
];

const surgery_mr = [
  "२० हजार पेक्षा जास्त मोतीबिंदू शस्त्रक्रियांचा अनुभव",
  "४००० पेक्षा जास्त लासूर आणि पापण्यांच्या शस्त्रक्रियांचा अनुभव",
  "२००० पेक्षा जास्त लहान मुलांच्या डोळ्यांच्या शस्त्रक्रियांचा अनुभव"
];

export default function HospitalInfo() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language === "mr";

  return (
    <section className="doctor-section" id="doctor">
      <div className="doctor-container">
        <div className="section-header">
          <h2>{t("doctor_heading")}</h2>
        </div>

        <div className="doctor-card">
          <aside className="doctor-left" aria-label="Doctor profile">
            <div className="doctor-portrait">
              <img
                src="public/doctor-profile.jpg"
                alt="Dr. Vishal Vasant Patil"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div className="doctor-initials" style={{ display: "none" }}>
                VP
              </div>
            </div>

            <div className="doctor-summary">
              <p className="doctor-role">{t("doctor_quals")}</p>
              <h3 className="doctor-name">{t("doctor_name")}</h3>
              <div className="doctor-tags" aria-label="Specialties">
                <span className="tag">{t("doctor_spec1")}</span>
                <span className="tag">{t("doctor_spec2")}</span>
              </div>
            </div>
          </aside>

          <div className="doctor-right">
            <div className="info-block info-card">
              <div className="info-heading">
                <p className="section-label">Professional Profile</p>
                <h4>{t("doctor_edu_heading")}</h4>
              </div>
              <ul>
                {(isMarathi ? education_mr : education_en).map((item, i) => (
                  <li key={i}>
                    <span className="bullet">▶</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-grid">
              <div className="info-block info-card info-card-accent">
                <div className="info-heading">
                  <p className="section-label">Clinical Expertise</p>
                  <h4>{t("doctor_surgery_heading")}</h4>
                </div>
                <ul>
                  {(isMarathi ? surgery_mr : surgery_en).map((item, i) => (
                    <li key={i}>
                      <span className="bullet-orange">▶</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-card info-card-quote">
                <p className="section-label">Patient care</p>
                <h4>Compassionate pediatric eye care with a modern clinical approach.</h4>
                <p>
                  Vision is crucial to how your child learns, plays, and grows. 
                  Our pediatric ophthalmology department pairs the latest clinical innovations 
                  and state-of-the-art imaging with a deep understanding of childhood development. 
                  We deliver highly accurate diagnoses and tailored treatment plans, 
                  all delivered by experts who know exactly how to make advanced clinical care feel like a 
                  breeze for kids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
