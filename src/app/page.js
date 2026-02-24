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
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.mobileContainer}>
      <LiquidBackground />
      <OpeningOverlay />
      <HeartParticles />
      <MusicPlayer />

      <FloatingDecorative icon="🌸" top="20%" left="10%" speed={0.2} />
      <FloatingDecorative icon="✨" top="55%" left="85%" speed={0.1} />
      <FloatingDecorative icon="💗" top="80%" left="12%" speed={0.15} />

      {/* ════════════════════════════════════════════════
          CHAPTER 1 — THE BEGINNING
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.heroSection}>
        <div className={styles.heroContent}>
          <span className={styles.mainTitleEmoji}>❤️</span>
          <p className={styles.dateBadge}>15 September 2025</p>
          <p className={styles.eventTag}>Induction Program</p>
          <h1 className={styles.mainTitle}>The Day I Noticed You</h1>
          <p className={styles.heroSubtext}>
            That day was supposed to be normal.<br />
            Just another induction program.<br />
            Crowded hall. Noise everywhere.<br />
            New faces. New beginnings.<br /><br />
            And then… in the middle of everyone,<br />
            you were sitting there.<br />
            <em>On a red chair.</em>
          </p>
          <div className={styles.scrollIndicator}>
            <span>Scroll to read more</span>
            <div className={styles.arrow}></div>
          </div>
        </div>
      </ParallaxSection>

      {/* ── Interlude ── */}
      <div className={styles.interlude}>
        <p>"I don't know why… but my eyes stopped on you."</p>
      </div>

      {/* ════════════════════════════════════════════════
          CHAPTER 2 — THE FIRST GLANCE
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.storySection}>
        <FloatingDecorative icon="💭" top="8%" left="82%" speed={0.08} />
        <h2 className={styles.sectionTitle}>
          💭 From One Look To Something More
          <span className={styles.sectionSubtitle}>How a single moment slowly became everything</span>
        </h2>
        <div className={styles.storyContent}>
          <p className={styles.storyParagraph}>
            There were hundreds of people around,
            but somehow, you were the only one I could see.
          </p>
          <p className={styles.storyParagraph}>
            It wasn't dramatic. It wasn't loud.<br />
            It was just… <em>something</em>. A quiet feeling.
          </p>
          <p className={styles.storyParagraph}>
            And I didn't even know that moment
            would become so important to me.
          </p>
          <div className={styles.storyHighlight}>
            "The girl on the red chair."
          </div>
          <p className={styles.storyParagraph}>
            At first, you were just a memory.<br />
            But then we started talking.
            And slowly, you stopped being just a memory.
          </p>
          <p className={styles.storyParagraph}>
            You became someone I looked forward to seeing.<br />
            Someone I wanted to talk to.<br />
            Someone I wanted to spend time with.
          </p>
          <p className={styles.storyParagraph}>
            And that's when I realized…<br />
            <strong>I really like being around you.</strong>
          </p>
        </div>
      </ParallaxSection>

      {/* ── Interlude ── */}
      <div className={styles.interlude}>
        <p>"With you, I just feel comfortable. Safe. Happy."</p>
      </div>

      {/* ════════════════════════════════════════════════
          CHAPTER 3 — THE LETTER
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.letterSection}>
        <h2 className={styles.sectionTitle}>
          Words I've Been Holding Inside 💌
          <span className={styles.sectionSubtitle}>Tap the envelope to read</span>
        </h2>
        <LetterCard />
      </ParallaxSection>

      {/* ════════════════════════════════════════════════
          CHAPTER 4 — THE WAY YOU MAKE ME FEEL
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.feelingsSection}>
        <FloatingDecorative icon="🌸" top="5%" left="75%" speed={0.06} />
        <h2 className={styles.sectionTitle}>
          🌸 The Way You Make Me Feel
          <span className={styles.sectionSubtitle}>It's not just one thing… it's everything</span>
        </h2>
        <div className={styles.feelingsContent}>
          <p className={styles.feelingsParagraph}>
            I love hanging out with you.<br />
            Not because we always do something big,<br />
            but because even <em>small things</em> feel special with you.
          </p>
          <p className={styles.feelingsParagraph}>
            Sitting and talking. Laughing over random things.<br />
            Sharing simple moments.
          </p>
          <div className={styles.feelingsEmotionGrid}>
            <div className={styles.emotionBubble}>
              <span>🤍</span>
              <p>Comfortable</p>
            </div>
            <div className={styles.emotionBubble}>
              <span>🛡️</span>
              <p>Safe</p>
            </div>
            <div className={styles.emotionBubble}>
              <span>😊</span>
              <p>Happy</p>
            </div>
          </div>
          <p className={styles.feelingsParagraph}>
            And your cuteness…<br />
            The way you smile. The way you react.<br />
            The way you sometimes don't even realize<br />
            how adorable you are.
          </p>
          <p className={styles.feelingsParagraph}>
            It's natural. It's effortless.
          </p>
          <div className={styles.heartQuote}>
            And every time I see it,<br />
            my heart quietly smiles. 💗
          </div>
        </div>
      </ParallaxSection>

      {/* ════════════════════════════════════════════════
          CHAPTER 5 — YOUR BEAUTY
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.adorationSection}>
        <FloatingDecorative icon="🌷" top="10%" left="70%" speed={0.05} />
        <h2 className={styles.sectionTitle}>
          ✨ What Makes You Beautiful
          <span className={styles.sectionSubtitle}>You're honestly very pretty… but it's so much more than that</span>
        </h2>
        <div className={styles.adorationGrid}>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>💗</span>
            <h3>Your Smile</h3>
            <p>"The way you smile without even realizing how beautiful it looks — it's the purest thing I've ever seen."</p>
          </div>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>🌸</span>
            <h3>Your Calm Beauty</h3>
            <p>"You have this calm beauty that doesn't need attention — but still gets mine every time."</p>
          </div>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>🌷</span>
            <h3>The Way You Speak</h3>
            <p>"It's the way you carry yourself, the way you think, the way you care. It's all of it."</p>
          </div>
          <div className={styles.adorationCard}>
            <span className={styles.cardIcon}>✨</span>
            <h3>Your Presence</h3>
            <p>"You don't try to impress anyone. You're just you. And that's what draws me in every single time."</p>
          </div>
        </div>
      </ParallaxSection>

      {/* ── Interlude ── */}
      <div className={styles.interlude}>
        <p>"I didn't fall for one big moment.<br />I fell for a thousand small ones."</p>
      </div>

      {/* ════════════════════════════════════════════════
          CHAPTER 6 — THE LITTLE THINGS
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.momentsSection}>
        <h2 className={styles.sectionTitle}>
          🌷 The Little Things I Fell For
          <span className={styles.sectionSubtitle}>Each one made my feelings grow a little more</span>
        </h2>
        <ul className={styles.momentsList}>
          {[
            "The way your eyes light up when you laugh",
            "The way you sit quietly but observe everything",
            "The way you make normal conversations interesting",
            "The way time feels fast when I'm with you",
            "The comfortable silences between us",
            "The random things that only we find funny",
          ].map((moment, i) => (
            <li key={i} className={styles.momentItem}>
              <span className={styles.momentDot}></span>
              <span className={styles.momentText}>{moment}</span>
            </li>
          ))}
        </ul>
        <p className={styles.momentsFooter}>
          And each time we met…<br />
          my feelings grew a little more.
        </p>
      </ParallaxSection>

      {/* ════════════════════════════════════════════════
          CHAPTER 7 — THE RED CHAIR MEMORY
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.memorySection}>
        <h2 className={styles.sectionTitle}>
          ❤️ That Red Chair… Still Special
        </h2>
        <div className={styles.memoryCardWrapper}>
          <div className={styles.verticalLine}></div>
          <div className={styles.memoryCard}>
            <p className={styles.memoryDate}>15 September 2025</p>
            <h3>The First Page Of Our Story</h3>
            <p className={styles.memoryText}>
              It's funny how something so small can change everything.
              A red chair. A crowded hall. A random glance.
            </p>
            <p className={styles.memoryText}>
              For you, it might have been nothing.
            </p>
            <p className={styles.memoryText}>
              For me… that was the start of something beautiful.
              That was the first page of a story I didn't know I was writing.
            </p>
            <p className={styles.memoryFooter}>
              "And now when I look back, I'm thankful for that exact seat, that exact moment, that exact day. Because it brought me to you." ❤️
            </p>
          </div>
        </div>
      </ParallaxSection>

      {/* ════════════════════════════════════════════════
          CHAPTER 8 — BEAUTIFUL MOMENTS GALLERY
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.gallerySection}>
        <h2 className={styles.sectionTitle}>Our Beautiful Moments</h2>
        <div className={styles.galleryGrid}>
          {[
            "You're prettier than you'll ever know ❤️",
            "With you, even silence feels like a conversation.",
            "Every ordinary moment becomes a memory with you."
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

      {/* ════════════════════════════════════════════════
          CHAPTER 9 — THE TRUTH
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.truthSection}>
        <FloatingDecorative icon="🌙" top="12%" left="80%" speed={0.12} />
        <div className={styles.truthContent}>
          <h2 className={styles.sectionTitle}>
            🌙 The Truth I Can't Hide Anymore
          </h2>
          <p className={styles.truthText}>
            Somewhere between that first glance<br />
            and all our hangouts…
          </p>
          <p className={styles.truthText}>
            You became important to me.<br />
            More than I expected.
          </p>
          <p className={styles.truthText}>
            I think about you more than I planned to.<br />
            I smile at random memories of us.<br />
            I look forward to the next time we meet.
          </p>
          <div className={styles.truthReveal}>
            <p>And I realized something very clearly:</p>
          </div>
          <div className={styles.bigReveal}>
            <p>I don't just like spending time with you.</p>
            <h3 className="shimmer-text">I like <em>you</em>.</h3>
          </div>
          <p className={styles.truthText}>
            Not just your smile.<br />
            Not just your cuteness.<br />
            Not just your beauty.
          </p>
          <div className={styles.heartQuote}>
            I like you. The real you. 💗
          </div>
        </div>
      </ParallaxSection>

      {/* ── Interlude ── */}
      <div className={styles.interlude}>
        <p>"I don't want to act like this is just friendship in my heart.<br />Because it's more than that for me."</p>
      </div>

      {/* ════════════════════════════════════════════════
          CHAPTER 10 — MY PROMISES
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.promisesSection}>
        <h2 className={styles.sectionTitle}>
          � If You Say Yes…
          <span className={styles.sectionSubtitle}>I'm not promising a perfect life. But I promise this…</span>
        </h2>
        <div className={styles.promisesGrid}>
          {[
            { icon: "�", text: "I will respect you — always" },
            { icon: "💎", text: "I will value your feelings" },
            { icon: "🌟", text: "I will support your dreams" },
            { icon: "❤️", text: "I will try my best to make you feel loved" },
            { icon: "✨", text: "I will never take your presence for granted" },
            { icon: "😊", text: "I will turn ordinary days into happy memories" },
          ].map((promise, i) => (
            <div key={i} className={styles.promiseCard}>
              <span className={styles.promiseIcon}>{promise.icon}</span>
              <span className={styles.promiseText}>{promise.text}</span>
            </div>
          ))}
        </div>
        <p className={styles.promisesFooter}>
          I want to grow with you. Laugh with you.<br />
          Create memories with you.<br />
          Turn ordinary days into something<br />
          we'll look back at and smile.
        </p>
      </ParallaxSection>

      {/* ════════════════════════════════════════════════
          CHAPTER 11 — THE QUESTION
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.askSection}>
        <div className={styles.askGlow}></div>
        <div className={styles.askContent}>
          <h2 className={styles.sectionTitle}>
            So Today, I Want To Ask You…
          </h2>
          <p className={styles.askQuote}>
            Not in front of everyone.<br />
            Not in a dramatic way.<br />
            Just quietly… honestly… from my heart.
          </p>
          <p className={styles.askQuote}>
            From the day I saw you on that red chair…<br />
            to every hangout, every smile, every conversation…<br />
            My feelings have only grown.
          </p>
          <p className={styles.askQuote}>
            I don't want to hide them anymore.
          </p>
          <hr className={styles.sectionDivider} />
          <p className={styles.askQuote}>
            You became someone special.<br />
            Someone important.<br />
            Someone I genuinely care about.
          </p>
          <p className={styles.askQuote}>
            And today, I just want to ask you<br />
            something simple…
          </p>
          <h2 className={`${styles.bigQuestion} shimmer-text`}>
            Will you let me be yours?
          </h2>
          <p className={styles.subQuestions}>
            Not just for today. Not just for fun.<br /><br />
            But to build something real.<br />
            To grow together. To support each other.<br />
            To laugh more. To create memories<br />
            that one day we'll look back at and smile.
          </p>
        </div>
      </ParallaxSection>

      {/* ════════════════════════════════════════════════
          FINAL — THE PROMISE
          ════════════════════════════════════════════════ */}
      <ParallaxSection className={styles.finalSection}>
        <div className={styles.finalGlow}></div>
        <div className={styles.finalContent}>
          <p className={styles.finalPreamble}>
            I don't promise perfection.<br /><br />
            But I promise effort.<br />
            I promise loyalty.<br />
            I promise respect.<br />
            I promise that I'll always value you.
          </p>
          <hr className={styles.sectionDivider} />
          <h2 className={styles.finalMessage}>
            If you let me be yours…<br /><br />
            I'll make sure the girl on the red chair<br />
            always feels special,<br />
            always feels appreciated,<br />
            and never feels alone.
          </h2>
          <div className={styles.finalClosing}>
            <p>Because since that day…</p>
            <p className={styles.closingHighlight}>It's been you.</p>
            <p>And I hope…</p>
            <p className={styles.closingFinal}>it can be <em>us</em>. ❤️</p>
          </div>
          <p className={styles.finalDate}>15 • 09 • 2025 ❤️</p>
        </div>
      </ParallaxSection>
    </main>
  );
}
