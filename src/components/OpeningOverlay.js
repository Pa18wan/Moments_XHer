'use client';
import { useState } from 'react';

const OpeningOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const handleStart = () => {
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.muted = false;
      audio.volume = 0.5;
      audio.play().catch(e => console.log('Audio play failed', e));
    }
    setIsFading(true);
    setTimeout(() => setIsVisible(false), 1200);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`opening-overlay ${isFading ? 'fade-out' : ''}`}
      onClick={handleStart}
      onTouchStart={handleStart}
    >
      <div className="overlay-bg"></div>
      <div className="sparkle sparkle-1">✦</div>
      <div className="sparkle sparkle-2">✦</div>
      <div className="sparkle sparkle-3">✦</div>
      <div className="sparkle sparkle-4">✦</div>
      <div className="content">
        <div className="ring-container">
          <div className="ring ring-outer"></div>
          <div className="ring ring-middle"></div>
          <div className="ring ring-inner"></div>
          <span className="heart-pulse">❤️</span>
        </div>
        <p className="title-text">Something From My Heart</p>
        <p className="subtitle-text">for you</p>
        <div className="divider"></div>
        <p className="cta-text">Tap anywhere to begin</p>
        <div className="pulse-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .opening-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 1;
          transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), visibility 1.2s;
        }
        .overlay-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, rgba(255, 250, 250, 0.97), rgba(255, 240, 244, 0.97), rgba(253, 246, 246, 0.97));
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
        .opening-overlay.fade-out {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .sparkle {
          position: absolute;
          font-size: 0.7rem;
          color: rgba(194, 80, 106, 0.2);
          z-index: 1;
          animation: sparkleFloat 4s ease-in-out infinite;
        }
        .sparkle-1 { top: 20%; left: 15%; animation-delay: 0s; }
        .sparkle-2 { top: 30%; right: 18%; animation-delay: -1s; }
        .sparkle-3 { bottom: 25%; left: 22%; animation-delay: -2s; }
        .sparkle-4 { bottom: 35%; right: 15%; animation-delay: -3s; }
        @keyframes sparkleFloat {
          0%, 100% { opacity: 0.2; transform: scale(1) translateY(0); }
          50% { opacity: 0.6; transform: scale(1.5) translateY(-8px); }
        }
        .content {
          text-align: center;
          color: #c2506a;
          z-index: 2;
          position: relative;
        }
        .ring-container {
          position: relative;
          width: 130px;
          height: 130px;
          margin: 0 auto 2.5rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(194, 80, 106, 0.1);
        }
        .ring-outer {
          width: 130px;
          height: 130px;
          animation: ringPulse 3.5s ease-in-out infinite;
        }
        .ring-middle {
          width: 105px;
          height: 105px;
          animation: ringPulse 3.5s ease-in-out infinite 0.4s;
        }
        .ring-inner {
          width: 80px;
          height: 80px;
          animation: ringPulse 3.5s ease-in-out infinite 0.8s;
        }
        .heart-pulse {
          font-size: 2.8rem;
          display: block;
          animation: heartBeat 2s infinite ease-in-out;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 4px 12px rgba(194, 80, 106, 0.2));
        }
        .title-text {
          font-family: 'Dancing Script', cursive;
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
          line-height: 1.3;
        }
        .subtitle-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          letter-spacing: 4px;
          opacity: 0.5;
          text-transform: lowercase;
          font-style: italic;
          margin-bottom: 1.5rem;
        }
        .divider {
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(194, 80, 106, 0.4), transparent);
          margin: 0 auto 1.5rem auto;
        }
        .cta-text {
          font-size: 0.78rem;
          letter-spacing: 3px;
          opacity: 0.45;
          text-transform: uppercase;
          font-family: 'Outfit', sans-serif;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }
        .pulse-dots {
          display: flex;
          gap: 6px;
          justify-content: center;
        }
        .pulse-dots span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(194, 80, 106, 0.35);
          animation: dotPulse 1.5s infinite ease-in-out;
        }
        .pulse-dots span:nth-child(2) { animation-delay: 0.2s; }
        .pulse-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes heartBeat {
          0% { transform: scale(1); }
          15% { transform: scale(1.18); }
          30% { transform: scale(1); }
          45% { transform: scale(1.12); }
          60% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.12); opacity: 0.08; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
};

export default OpeningOverlay;
