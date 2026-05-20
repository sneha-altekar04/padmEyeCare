import { useEffect, useRef } from "react";
import "./EyeCursor.css";

export default function EyeCursor() {
  const containerRef = useRef(null);
  const pupilLeftRef = useRef(null);
  const pupilRightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      // Left eye
      if (pupilLeftRef.current) {
        const eyeL = pupilLeftRef.current.closest(".eye-inner");
        if (eyeL) {
          const eyeLRect = eyeL.getBoundingClientRect();
          const eyeLCenterX = eyeLRect.left + eyeLRect.width / 2;
          const eyeLCenterY = eyeLRect.top + eyeLRect.height / 2;

          const angle = Math.atan2(e.clientY - eyeLCenterY, e.clientX - eyeLCenterX);
          const distance = 10;
          const pupilX = Math.cos(angle) * distance;
          const pupilY = Math.sin(angle) * distance;

          pupilLeftRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      }

      // Right eye
      if (pupilRightRef.current) {
        const eyeR = pupilRightRef.current.closest(".eye-inner");
        if (eyeR) {
          const eyeRRect = eyeR.getBoundingClientRect();
          const eyeRCenterX = eyeRRect.left + eyeRRect.width / 2;
          const eyeRCenterY = eyeRRect.top + eyeRRect.height / 2;

          const angle = Math.atan2(e.clientY - eyeRCenterY, e.clientX - eyeRCenterX);
          const distance = 10;
          const pupilX = Math.cos(angle) * distance;
          const pupilY = Math.sin(angle) * distance;

          pupilRightRef.current.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eye-cursor-container" ref={containerRef} aria-hidden="true">
      <div className="glasses-frame">
        <div className="eye-frame left-frame">
          <div className="eye-inner">
            <div className="white-area">
              <div className="iris-real" />
              <div className="pupil" ref={pupilLeftRef} />
              <div className="pupil-highlight" />
            </div>
          </div>
        </div>
        
        <div className="bridge" />
        
        <div className="eye-frame right-frame">
          <div className="eye-inner">
            <div className="white-area">
              <div className="iris-real" />
              <div className="pupil" ref={pupilRightRef} />
              <div className="pupil-highlight" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
