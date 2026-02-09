'use client';
import { useEffect, useState } from 'react';

const HeartParticles = () => {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now() + Math.random(),
                left: Math.random() * 100 + '%',
                size: Math.random() * 20 + 10 + 'px',
                duration: Math.random() * 10 + 12 + 's',
            };
            setHearts((prev) => [...prev.slice(-50), newHeart]);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <div
                    key={heart.id}
                    className="floating-heart"
                    style={{
                        left: heart.left,
                        fontSize: heart.size,
                        animationDuration: heart.duration,
                    }}
                >
                    ❤️
                </div>
            ))}
        </div>
    );
};

export default HeartParticles;
