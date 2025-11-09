import React, { useEffect, useRef, useState } from 'react';

export default function Pixelverse() {
  const areaRef = useRef(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;

    const handleClick = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Math.random().toString(36).slice(2);
      setItems((prev) => [
        ...prev,
        { id, x, y, type: 'coin' },
        { id: id + 't', x, y: y - 20, type: 'text' },
      ]);
      setTimeout(() => {
        setItems((prev) => prev.filter((it) => it.id !== id && it.id !== id + 't'));
      }, 1800);
    };

    el.addEventListener('click', handleClick);
    return () => el.removeEventListener('click', handleClick);
  }, []);

  return (
    <section id="pixelverse" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-['Press_Start_2P',cursive] text-lg sm:text-xl md:text-2xl text-white drop-shadow-[3px_3px_0_#000] mb-6">
          Pixelverse
        </h2>
        <div
          ref={areaRef}
          className="relative border-4 border-black bg-[#111] shadow-[6px_6px_0_#000] h-56 sm:h-64 md:h-72 overflow-hidden cursor-crosshair select-none"
          style={{ imageRendering: 'pixelated' }}
        >
          {items.map((it) => (
            <div
              key={it.id}
              className="absolute will-change-transform"
              style={{ left: it.x, top: it.y }}
            >
              {it.type === 'coin' ? (
                <span
                  style={{
                    animation: 'coinDrop 1.6s ease-in forwards',
                    filter: 'drop-shadow(2px 2px 0 #000)'
                  }}
                >
                  🪙
                </span>
              ) : (
                <span
                  className="text-xs text-[#FFD700]"
                  style={{
                    animation: 'textPop 1.6s ease-out forwards',
                    filter: 'drop-shadow(2px 2px 0 #000)'
                  }}
                >
                  Santa Approved 🎅
                </span>
              )}
            </div>
          ))}
          <style>{`
            @keyframes coinDrop { 0%{ transform: translate(-6px, -20px) rotate(-10deg); opacity: .0; } 15%{opacity:1} 100%{ transform: translate(0, 140px) rotate(360deg); opacity: 0; } }
            @keyframes textPop { 0%{ transform: translateY(0) scale(.9); opacity: 0; } 20%{ opacity: 1; } 100%{ transform: translateY(-60px) scale(1); opacity: 0; } }
          `}</style>
        </div>
      </div>
    </section>
  );
}
