'use client';
import { useState } from 'react';

const LetterCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`envelope-wrapper ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="envelope">
        <div className="flap-over"></div>
        <div className="letter">
          <p className="letter-header">To the girl on the red chair,</p>
          <div className="letter-content">
            <p>I never planned for this. Walking into that induction program, I expected nothing but another crowded, noisy day. But then I saw you — sitting quietly on that red chair — and something changed.</p>
            <p>There were hundreds of people around, but somehow, you were the only one I could see. It wasn't dramatic. It wasn't loud. It was just… something. A quiet feeling that never went away.</p>
            <p>Since then, you stopped being "the girl on the red chair." You became the person I look forward to seeing, the one I want to talk to, the one I think about when I smile at random.</p>
            <p>I love the way you laugh, the way your eyes light up, the way you make even silence feel comfortable. Your cuteness is so natural, so effortless — and every time I see it, my heart quietly smiles.</p>
            <p>You're honestly very pretty. But it's not just about how you look. It's the way you carry yourself, the way you think, the way you care. You have this calm beauty that doesn't need attention — but still gets mine every time.</p>
            <p>I don't just like spending time with you. I like <em>you</em>. The real you.</p>
            <p>And I don't want to keep this feeling hidden anymore.</p>
          </div>
          <p className="letter-footer">From someone whose story changed because of you ❤️</p>
        </div>
      </div>

      {!isOpen && <div className="tap-hint">Tap to open 💌</div>}

      <style jsx>{`
        .envelope-wrapper {
          position: relative;
          width: 340px;
          height: 230px;
          cursor: pointer;
          perspective: 1000px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .envelope-wrapper:hover {
          transform: translateY(-6px);
        }
        .envelope {
          position: relative;
          width: 100%;
          height: 100%;
          background: rgba(253, 248, 248, 0.93);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 182, 193, 0.35);
          border-radius: 6px;
          box-shadow: 0 12px 45px rgba(194, 80, 106, 0.08);
          overflow: hidden;
        }
        .flap-over {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-left: 170px solid transparent;
          border-right: 170px solid transparent;
          border-top: 115px solid rgba(232, 120, 138, 0.88);
          z-index: 3;
          transform-origin: top;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.06));
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
          background: linear-gradient(to bottom, #fffcfc, #fff7f8);
          padding: 1.5rem;
          z-index: 2;
          transform: translateY(0);
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), top 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          overflow-y: auto;
          box-shadow: inset 0 0 20px rgba(255, 228, 225, 0.25);
          border-radius: 4px;
        }
        .letter::-webkit-scrollbar {
          width: 4px;
        }
        .letter::-webkit-scrollbar-thumb {
          background: rgba(194, 80, 106, 0.18);
          border-radius: 10px;
        }
        .open .letter {
          transform: translateY(-55px);
          top: -25px;
          z-index: 4;
          height: auto;
          max-height: 450px;
        }
        .letter-header {
          font-family: var(--font-cursive);
          font-size: 1.5rem;
          color: var(--deep-rose, #c2506a);
          margin-bottom: 1.2rem;
        }
        .letter-content p {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 0.95rem;
          line-height: 1.85;
          margin-bottom: 0.9rem;
          color: var(--text-dark, #3d2e3a);
        }
        .letter-content em {
          color: var(--deep-rose, #c2506a);
          font-style: italic;
        }
        .letter-footer {
          font-family: var(--font-cursive);
          text-align: right;
          margin-top: 1.5rem;
          font-size: 1.15rem;
          color: var(--deep-rose, #c2506a);
          line-height: 1.5;
        }
        .tap-hint {
          position: absolute;
          bottom: -42px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.88rem;
          color: var(--deep-rose, #c2506a);
          animation: pulse 2.5s infinite;
          white-space: nowrap;
          letter-spacing: 1px;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.35; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.03); }
        }
      `}</style>
    </div>
  );
};

export default LetterCard;
