'use client';
import { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({ children, className = '', id = '' }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`${className} ${isVisible ? 'visible' : ''} fade-in`}
        >
            {children}
            <style jsx>{`
        section {
          width: 100%;
          min-height: 100vh;
          position: relative;
        }
      `}</style>
        </section>
    );
};

export default ParallaxSection;
