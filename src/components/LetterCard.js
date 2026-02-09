'use client';
import { useState } from 'react';

const LetterCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="envelope">
        <div className="flap-over"></div>
        <div className="letter">
          <p className="letter-header">Dearest,</p>
          <div className="letter-content">
            <p>Walking into the induction program on that September afternoon, I thought it was just another day amongst the crowd.</p>
            <p>Then, I saw you. Seated on that red chair, amidst the noise, you were a quiet melody I hadn't heard before. You stood out, not by trying, but simply by being.</p>
            <p>Your cuteness isn't just in your smile, but in the way you make the world feel lighter. Hanging out with you feels less like passing time and more like making memories.</p>
            <p>You are not just pretty to look at; you are beautiful to know. Naturally, effortlessly, and completely.</p>
          </div>
          <p className="letter-footer">Always,</p>
        </div>
      </div>

      {!isOpen && <div className="tap-hint">Tap to open 💌</div>}

      <style jsx>{`
        .envelope-wrapper {
          position: relative;
          width: 320px;
          height: 220px;
          cursor: pointer;
          perspective: 1000px;
          transition: transform 0.3s;
        }
        .envelope-wrapper:hover {
          transform: translateY(-5px);
        }
        .envelope {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(253, 245, 245, 0.9);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 182, 193, 0.5);
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .flap-over {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 160px solid transparent;
          border-right: 160px solid transparent;
          border-top: 110px solid rgba(255, 182, 193, 0.95);
          z-index: 3;
          transform-origin: top;
          transition: transform 0.6s ease;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        .open .flap-over {
          transform: rotateX(180deg);
          z-index: 1;
        }
        .letter {
          position: absolute;
          top: 10px;
          bottom: 10px;
          left: 10px;
          right: 10px;
          background: white;
          padding: 1.5rem;
          z-index: 2;
          transform: translateY(0);
          transition: transform 0.6s ease, top 0.6s ease;
          overflow-y: auto;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.02);
        }
        .open .letter {
          transform: translateY(-50px);
          top: -20px;
          z-index: 4;
          height: auto;
          max-height: 400px;
        }
        .letter-header {
          font-family: var(--font-cursive);
          font-size: 1.5rem;
          color: var(--deep-rose);
          margin-bottom: 1rem;
        }
        .letter-content p {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 0.8rem;
          color: var(--text-dark);
        }
        .letter-footer {
          font-family: var(--font-cursive);
          text-align: right;
          margin-top: 1rem;
          font-size: 1.2rem;
          color: var(--deep-rose);
        }
        .tap-hint {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.9rem;
          color: var(--deep-rose);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LetterCard;
