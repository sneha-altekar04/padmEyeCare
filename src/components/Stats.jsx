import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Stats.css";

const statsData = [
  { value: 20000, suffix: "+", label_en: "Cataract Surgeries", label_mr: "मोतीबिंदू शस्त्रक्रिया" },
  { value: 4000, suffix: "+", label_en: "Squint & Lid Surgeries", label_mr: "पापण्यांच्या शस्त्रक्रिया" },
  { value: 2000, suffix: "+", label_en: "Pediatric Eye Surgeries", label_mr: "बालकांच्या शस्त्रक्रिया" },
  { value: 15, suffix: "+", label_en: "Years Experience", label_mr: "वर्षांचा अनुभव" }
];

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatted = count >= 1000
    ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + "K"
    : count;

  return <span ref={ref}>{formatted}{suffix}</span>;
}

export default function Stats() {
  const { t, i18n } = useTranslation();
  const isMarathi = i18n.language === "mr";

  return (
    <section className="stats-section">
      <div className="stats-container">
        <h2 className="stats-heading">{t("stats_heading")}</h2>
        <div className="stats-grid">
          {statsData.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-value">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">
                {isMarathi ? stat.label_mr : stat.label_en}
              </div>
              <div className="stat-sublabel">
                {isMarathi ? stat.label_en : stat.label_mr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
