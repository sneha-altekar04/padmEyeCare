import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./AnimatedStats.css";

export default function AnimatedStats() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const increment = end / (duration / 16);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(interval);
    }, [isVisible, end, duration]);

    return (
      <div className="stat-card">
        <div className="stat-number">{count.toLocaleString()}+</div>
        <div className="stat-label">{label}</div>
      </div>
    );
  };

  return (
    <section className="animated-stats" ref={ref}>
      <div className="stats-background">
        <div className="lens lens-1" aria-hidden="true" />
        <div className="lens lens-2" aria-hidden="true" />
        <div className="lens lens-3" aria-hidden="true" />
      </div>

      <div className="stats-container">
        <h2>{t("stats_heading")}</h2>
        <div className="stats-grid">
          <Counter end={12} label="Years Experience" duration={1800} />
          <Counter end={4200} label="Successful Surgeries" duration={2200} />
          <Counter end={700} label="No of Patients Per Month" duration={2000} />
          <Counter end={20000} label="Cataract Surgeries" duration={2400} />
          <Counter end={4000} label="Lid and Squint Surgeries" duration={2200} />
          <Counter end={2000} label="Pediatric Eye Surgeries" duration={2100} />
        </div>
      </div>
    </section>
  );
}
