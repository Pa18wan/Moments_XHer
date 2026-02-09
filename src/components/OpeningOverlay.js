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
    setTimeout(() => setIsVisible(false), 800); // Wait for transition
  };

  if (!isVisible) return null;

  return (
    <div
      className={`opening-overlay ${isFading ? 'fade-out' : ''}`}
      onClick={handleStart}
      onTouchStart={handleStart}
    >
      <div className="content">
        <span className="heart-pulse">❤️</span>
        <p>Tap to enter</p>
      </div>

      <style jsx>{`
        .opening-overlay {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 1;
          transition: opacity 0.8s ease, visibility 0.8s;
        }
        .opening-overlay.fade-out {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
        .content {
          text-align: center;
          color: #d87093; /* Deep rose */
          font-family: 'Playfair Display', serif;
        }
        .heart-pulse {
          font-size: 3rem;
          display: block;
          margin-bottom: 1rem;
          animation: pulse 2s infinite ease-in-out;
        }
        p {
          font-size: 1.2rem;
          letter-spacing: 2px;
          opacity: 0.8;
          text-transform: uppercase;
          font-family: 'Outfit', sans-serif;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default OpeningOverlay;
