// import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Clock, Phone, MapPin, Mail, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "./Hero.css";

export default function Hero() {
  const { t } = useTranslation();
  // const carouselImages = [
  //   "/gallaryphotoes/PUKT0034.JPG",
  //   "/gallaryphotoes/PUKT0075.JPG",
  //   "/gallaryphotoes/PUKT0233.JPG",
  //   "/gallaryphotoes/PUKT0251.JPG",
  //   "/gallaryphotoes/PUKT0321.JPG",
  //   "/gallaryphotoes/PUKT0451.JPG",
  // ];
  // const [activeSlide, setActiveSlide] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveSlide((prev) => (prev + 1) % carouselImages.length);
  //   }, 4200);

  //   return () => clearInterval(timer);
  // }, [carouselImages.length]);

  return (
    // <section className="hero" id="discover">
    //   <video autoPlay muted loop playsInline className="hero-video">
    //     <source src="/eye-video.mp4" type="video/mp4" />
    //   </video>
    //   <div className="hero-overlay">
    //     <div className="hero-container">
    //       <div className="hero-left">
    //         <div className="hero-badge">{t("hero_badge")}</div>
    //         <h1>{t("hero_heading")}</h1>
    //         <p>{t("hero_desc")}</p>
    //         <div className="hero-points">
    //           <span><span className="check">✔</span> {t("hero_stat1")}</span>
    //           <span><span className="check">✔</span> {t("hero_stat2")}</span>
    //           <span><span className="check">✔</span> {t("hero_stat3")}</span>
    //         </div>
    //       </div>

    //       <div className="hero-gallery" aria-label="Hospital highlights carousel">
    //         <div className="hero-gallery-frame">
    //           {carouselImages.map((image, index) => (
    //             <img
    //               key={image}
    //               src={image}
    //               alt={`Hospital highlight ${index + 1}`}
    //               className={`hero-slide ${activeSlide === index ? "active" : ""}`}
    //             />
    //           ))}

    //           <div className="doctor-float-card" aria-hidden="true">
    //             <div className="doctor-mini-figure">
    //               <span className="doctor-head" />
    //               <span className="doctor-body" />
    //               <span className="doctor-stetho" />
    //             </div>
    //             <div className="doctor-float-copy">
    //               <strong>{t("hero_doctor_title")}</strong>
    //               <span>{t("hero_doctor_sub")}</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="hero-dots">
    //           {carouselImages.map((_, index) => (
    //             <button
    //               key={index}
    //               type="button"
    //               className={`hero-dot ${activeSlide === index ? "active" : ""}`}
    //               onClick={() => setActiveSlide(index)}
    //               aria-label={`Go to slide ${index + 1}`}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="map-section" id="contact">
      <div className="map-container">

        {/* TIMING TICKER */}
        <div className="timing-ticker-wrap">
          <div className="timing-ticker-label">
            <Clock size={13} strokeWidth={2.5} />
            <span>{t("timing_heading")}</span>
          </div>
          <div className="timing-ticker-scroller" aria-label="Hospital timings">
            <div className="timing-ticker-track">
              <span className="timing-ticker-set">
                <span className="ttick-seg"><strong>{t("timing_checkup")}</strong></span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_days")}</span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_morning")}</span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_evening")}</span>
                <span className="ttick-bar">|</span>
                <span className="ttick-seg"><strong>{t("timing_operation")}</strong></span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_op_time")}</span>
                <span className="ttick-bar">|</span>
                <a href="tel:7030775791" className="ttick-phone">7030775791</a>
                <span className="ttick-dot">&bull;</span>
                <a href="tel:9859853853" className="ttick-phone">9859853853</a>
                <span className="ttick-bar">|</span>
              </span>
              <span className="timing-ticker-set" aria-hidden="true">
                <span className="ttick-seg"><strong>{t("timing_checkup")}</strong></span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_days")}</span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_morning")}</span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_evening")}</span>
                <span className="ttick-bar">|</span>
                <span className="ttick-seg"><strong>{t("timing_operation")}</strong></span>
                <span className="ttick-dot">&bull;</span>
                <span className="ttick-seg">{t("timing_op_time")}</span>
                <span className="ttick-bar">|</span>
                <a href="tel:7030775791" className="ttick-phone" tabIndex={-1}>7030775791</a>
                <span className="ttick-dot">&bull;</span>
                <a href="tel:9859853853" className="ttick-phone" tabIndex={-1}>9859853853</a>
                <span className="ttick-bar">|</span>
              </span>
            </div>
          </div>
        </div>

        {/* MAP LAYOUT */}
        <div className="map-layout">
          <div className="address-card">
            <div className="address-item">
              <span className="addr-icon"><MapPin size={18} /></span>
              <div>
                <h4>Address</h4>
                <p>{t("contact_address")}</p>
              </div>
            </div>
            <div className="address-item">
              <span className="addr-icon"><Phone size={18} /></span>
              <div>
                <h4>Phone</h4>
                <div className="addr-phone-row">
                  <a href="tel:7030775791" className="addr-phone-num">7030775791</a>
                  <a href="https://wa.me/917030775791" className="addr-wa-btn" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp 7030775791"><FaWhatsapp size={13} /></a>
                </div>
                <div className="addr-phone-row">
                  <a href="tel:9859853853" className="addr-phone-num">9859853853</a>
                </div>
              </div>
            </div>
            <div className="address-item">
              <span className="addr-icon"><Mail size={18} /></span>
              <div>
                <h4>Email</h4>
                <a href="mailto:padmeyecare@gmail.com">padmeyecare@gmail.com</a>
              </div>
            </div>
            <div className="address-item">
              <span className="addr-icon"><Award size={18} /></span>
              <div>
                <h4>{t("contact_doctor_reg_label")}</h4>
                <p>{t("contact_doctor_reg_value")}</p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Padm+Superspeciality+Eye+Care+Ramwadi+Pen"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
            </a>
          </div>
          <div className="map-frame-wrap">
            <iframe
              src="https://maps.google.com/maps?q=padm+superspeciality+eye+care+ramwadi+pen&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{border:"none"}}
              allowFullScreen
              loading="lazy"
              title="Padm Eye Care Location"
            ></iframe>
          </div>

          <div className="hospital-photo-wrap">
            <img
              src="/galleryphotoes/hospital-image.jpg"
              alt="Padm Superspeciality Eye Care Hospital"
              className="hospital-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
