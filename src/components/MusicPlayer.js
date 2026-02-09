'use client';
import { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Ensure audio is NOT muted by default
    audio.muted = false;
    audio.volume = 0;

    const attemptPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        fadeIn();
      } catch (err) {
        console.log('Unmuted autoplay blocked, waiting for interaction');
        // We don't mute here anymore
      }
    };

    const fadeIn = () => {
      let vol = 0;
      const interval = setInterval(() => {
        if (vol < 0.5) {
          vol += 0.05;
          audio.volume = vol;
        } else {
          clearInterval(interval);
        }
      }, 200);
    };

    const handleInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          fadeIn();
        }).catch(() => { });
      }
      // Remove listeners
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('scroll', handleInteraction);

    attemptPlay();

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="music-pill">
      <audio
        id="bg-music"
        ref={audioRef}
        src="/background_music.mp3"
        loop
        autoPlay
        preload="auto"
      />
      <div className="pill-content">
        <span className="heart-icon">❤️</span>
        <span className="pill-text">Playing for you</span>
        <div className="controls">
          <button onClick={togglePlay}>
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button onClick={toggleMute}>
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
      </div>

      <style jsx>{`
        .music-pill {
          position: fixed;
          bottom: 2rem;
          left: 1.5rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 0.6rem 1rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          z-index: 100;
          border: 1px solid var(--blush-pink);
          transition: transform 0.3s ease;
        }
        .music-pill:hover {
          transform: scale(1.05);
        }
        .pill-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .pill-text {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-dark);
        }
        .controls {
          display: flex;
          gap: 0.3rem;
          border-left: 1px solid var(--blush-pink);
          padding-left: 0.5rem;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          padding: 0.2rem;
          transition: opacity 0.2s;
        }
        button:hover {
          opacity: 0.7;
        }
        .heart-icon {
          animation: beat 1.5s infinite;
        }
        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
