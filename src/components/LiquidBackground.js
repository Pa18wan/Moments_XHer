'use client';
import { useEffect, useRef } from 'react';

export default function LiquidBackground() {
    return (
        <div className="liquid-background">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
            <div className="blob blob-4"></div>

            <style jsx>{`
        .liquid-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          overflow: hidden;
          background: #fdfbfb;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
          animation: float 20s infinite ease-in-out alternate, morph 20s infinite ease-in-out alternate;
        }

        .blob-1 {
          top: -10%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
          animation-delay: 0s;
        }

        .blob-2 {
          bottom: -10%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
          animation-delay: -5s;
        }

        .blob-3 {
          top: 30%;
          left: 40%;
          width: 40vw;
          height: 40vw;
          background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
          animation-delay: -10s;
          opacity: 0.4;
        }
        
        .blob-4 {
          bottom: 10%;
           left: 10%;
          width: 35vw;
          height: 35vw;
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          animation-delay: -15s;
          opacity: 0.5;
        }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(20px, 40px) rotate(20deg); }
        }

        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
        </div>
    );
}
