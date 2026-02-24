'use client';

export default function LiquidBackground() {
  return (
    <div className="liquid-background">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>

      <style jsx>{`
        .liquid-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -1;
          overflow: hidden;
          background: linear-gradient(160deg, #fdf6f6 0%, #f8f0f2 30%, #f5eef0 60%, #fdf6f6 100%);
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.5;
          animation: floatBlob 25s infinite ease-in-out alternate, morph 20s infinite ease-in-out alternate;
        }

        .blob-1 {
          top: -15%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
          animation-delay: 0s;
        }

        .blob-2 {
          bottom: -15%;
          right: -10%;
          width: 55vw;
          height: 55vw;
          background: linear-gradient(135deg, #c2506a20 0%, #fbc2eb 100%);
          animation-delay: -5s;
        }

        .blob-3 {
          top: 35%;
          left: 45%;
          width: 35vw;
          height: 35vw;
          background: linear-gradient(135deg, #e8d5e0 0%, #fce4ec 100%);
          animation-delay: -10s;
          opacity: 0.35;
        }

        .blob-4 {
          bottom: 15%;
          left: 8%;
          width: 30vw;
          height: 30vw;
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          animation-delay: -15s;
          opacity: 0.4;
        }

        .blob-5 {
          top: 10%;
          right: 15%;
          width: 25vw;
          height: 25vw;
          background: linear-gradient(135deg, #f5d9a0 0%, #fce4ec 100%);
          animation-delay: -8s;
          opacity: 0.3;
        }

        @keyframes floatBlob {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(15px, 25px) rotate(10deg) scale(1.02); }
          66% { transform: translate(-10px, 15px) rotate(-5deg) scale(0.98); }
          100% { transform: translate(20px, 40px) rotate(15deg) scale(1.03); }
        }

        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          25% { border-radius: 40% 60% 50% 50% / 40% 50% 60% 50%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          75% { border-radius: 50% 40% 60% 40% / 60% 40% 50% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
      `}</style>
    </div>
  );
}
