
import React, { useEffect, useState } from 'react';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-15),
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: 10 + Math.random() * 10,
          size: 10 + Math.random() * 20,
        },
      ]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-200/40 animate-bounce"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animation: `float-up ${heart.duration}s linear infinite`,
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
