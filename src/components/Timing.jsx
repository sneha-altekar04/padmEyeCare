import { useTranslation } from "react-i18next";
import "./Timing.css";

export default function Timing() {
  const { t } = useTranslation();

  return (
    <section className="timing-section">
      <div className="timing-container">

        <div className="section-header">
          <h2>{t("timing_heading")}</h2>
        </div>

        <div className="timing-grid">

          {/* CHECKUP TIMINGS */}
          <div className="timing-card checkup-card">
            <div className="timing-card-header">
              <span className="timing-icon">🕐</span>
              <h3>{t("timing_checkup")}</h3>
            </div>
            <div className="timing-day-badge">{t("timing_days")}</div>
            <div className="timing-slots">
              <div className="slot morning">
                <span className="slot-icon">🌅</span>
                <span className="slot-time">{t("timing_morning")}</span>
              </div>
              <div className="slot evening">
                <span className="slot-icon">🌆</span>
                <span className="slot-time">{t("timing_evening")}</span>
              </div>
            </div>
          </div>

          {/* OPERATION TIMINGS */}
          <div className="timing-card operation-card">
            <div className="timing-card-header">
              <span className="timing-icon">⚕️</span>
              <h3>{t("timing_operation")}</h3>
            </div>
            <div className="timing-slots">
              <div className="slot operation">
                <span className="slot-icon">🏥</span>
                <span className="slot-time">{t("timing_op_time")}</span>
              </div>
            </div>
          </div>

          {/* TUESDAY NOTICE */}
          <div className="timing-card notice-card">
            <div className="timing-card-header">
              <span className="timing-icon">📞</span>
              <h3>Important Notice</h3>
            </div>
            <p className="notice-text">{t("timing_tuesday")}</p>
            <div className="notice-actions">
              <a href="tel:7030775791" className="call-btn">Call: 7030775791</a>
              <a href="tel:9859853853" className="call-btn">Call: 9859853853</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
