'use client';
import { useEffect } from 'react';
import HeartParticles from '@/components/HeartParticles';
import MusicPlayer from '@/components/MusicPlayer';
import ParallaxSection from '@/components/ParallaxSection';
import LetterCard from '@/components/LetterCard';
import FloatingDecorative from '@/components/FloatingDecorative';
import OpeningOverlay from '@/components/OpeningOverlay';
import LiquidBackground from '@/components/LiquidBackground';
import styles from './page.module.css';

export default function Home() {
  useEffect(() => {
    // Reveal animations on scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.mobileContainer}>
      <LiquidBackground />
      <OpeningOverlay />
      <HeartParticles />
      <MusicPlayer />

      <FloatingDecorative icon="🌸" top="20%" left="10%" speed={0.2} />
      <FloatingDecorative icon="✨" top="60%" left="80%" speed={0.1} />
      <FloatingDecorative icon="💗" top="85%" left="15%" speed={0.15} />

      {/* Hero Section */}
      <ParallaxSection className={styles.heroSection}>
        <div className={`${styles.heroContent} text-center`}>
          <p className={styles.dateBadge}>15 September 2025</p>
          <p className={styles.eventTag}>Induction Program</p>
          <h1 className={styles.mainTitle}>The Day I Noticed You</h1>
          <p className={styles.heroSubtext}>
            “In the middle of the crowd…<br />
            on that red chair…<br />
            you didn’t know it,<br />
            but you became my favorite moment.”
          </p>
          <div className={styles.scrollIndicator}>
            <span>Scroll for more</span>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </ParallaxSection>

      {/* Letter Section */}
      <ParallaxSection className={styles.letterSection}>
        <h2 className={styles.sectionTitle}>If Only You Knew 💌</h2>
        <LetterCard />
      </ParallaxSection>

      {/* Adoration Section */}
      <ParallaxSection className={styles.adorationSection}>
        <FloatingDecorative icon="🌷" top="10%" left="70%" speed={0.05} />
        <h2 className={styles.sectionTitle}>Things I Adore About You</h2>
        <div className={styles.adorationGrid}>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>💗</span>
            <h3>Your Cuteness</h3>
            <p>“The way you talk, the way you smile… it’s effortless and adorable.”</p>
          </div>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>🌸</span>
            <h3>Your Beauty</h3>
            <p>“You don’t even try, but you look beautiful in the simplest moments.”</p>
          </div>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>✨</span>
            <h3>Our Hangouts</h3>
            <p>“Spending time with you doesn’t feel like time passing… it feels like time pausing.”</p>
          </div>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>😊</span>
            <h3>Your Presence</h3>
            <p>“You make normal days feel special without even knowing.”</p>
          </div>
        </div>
      </ParallaxSection>

      {/* Memory Card Section */}
      <ParallaxSection className={styles.memorySection}>
        <div className={styles.memoryCardWrapper}>
          <div className={styles.verticalLine}></div>
          <div className={styles.memoryCard}>
            <p className={styles.memoryDate}>15 September 2025</p>
            <h3>The Red Chair Moment</h3>
            <p className={styles.marathiText}>
              In the induction program, amidst the crowd, you were sitting on a red chair.
              Among everyone, I could only see you.
              Because of your cuteness and smile, that moment is still fresh. ❤️
            </p>
            <p className={styles.memoryFooter}>
              “And since that day… I’ve just liked you a little more every time we talk.”
            </p>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Beautiful Moments</h2>
        <div className={styles.galleryGrid}>
          {[
            "You’re prettier than you realize ❤️",
            "With you, even silence feels comfortable.",
            "You make ordinary moments unforgettable."
          ].map((msg, i) => (
            <div key={i} className={styles.momentPlaceholder} onClick={(e) => {
              e.currentTarget.classList.toggle(styles.momentPlaceholderActive);
            }}>
              <div className={styles.overlay}>
                <p>{msg}</p>
                <span className={styles.heartSmall}>❤️</span>
              </div>
              <div className={styles.placeholderContent}>
                <div className="camera-icon">📸</div>
              </div>
            </div>
          ))}
        </div>
      </ParallaxSection>

      {/* Poem Section */}
      <ParallaxSection className={styles.poemSection}>
        <FloatingDecorative icon="✨" top="15%" left="80%" speed={0.15} />
        <div className={styles.poemContainer}>
          <p className={styles.poemText}>
            “In the quiet of the crowd,<br />
            Where voices blurred to white,<br />
            A single moment spoke out loud,<br />
            And filled my world with light.<br /><br />
            Not just a face, not just a smile,<br />
            But something soft and true,<br />
            I’d walk a thousand endless miles,<br />
            Just to sit next to you.”
          </p>
        </div>
      </ParallaxSection>

      {/* Final Section */}
      <ParallaxSection className={styles.finalSection}>
        <div className={`${styles.finalContent} text-center`}>
          <p className={styles.softQuote}>
            “I don’t know where this goes…<br />
            but I know I enjoy every moment with you.”
          </p>
          <div className={styles.finalGlow}></div>
          <h2 className={styles.finalMessage}>
            You’re beautiful.<br />
            Not just by face…<br />
            but by heart.
          </h2>
          <p className={styles.finalDate}>15 • 09 • 2025 ❤️</p>
        </div>
      </ParallaxSection>
    </main>
  );
}
