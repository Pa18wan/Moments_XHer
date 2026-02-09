'use client';
import { useEffect, useState } from 'react';

const FloatingDecorative = ({ icon, top, left, speed = 0.5 }) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * speed);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            className="floating-decorative"
            style={{
                top: top,
                left: left,
                transform: `translateY(${-offset}px)`,
                position: 'absolute',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        >
            <div className="glass-bubble">
                {icon}
            </div>
            <style jsx>{`
                .glass-bubble {
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                    animation: drift 6s ease-in-out infinite alternate;
                }
                @keyframes drift {
                    from { transform: translateY(0) rotate(0deg); }
                    to { transform: translateY(-10px) rotate(5deg); }
                }
            `}</style>
        </div>
    );
};

export default FloatingDecorative;
