import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';

const pixelBtn =
  'inline-block px-5 py-3 mt-3 sm:mt-4 text-xs sm:text-sm tracking-wider font-bold border-4 border-[#E40000] text-white bg-[#E40000] shadow-[4px_4px_0_0_#000] active:shadow-[0_0_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 hover:brightness-110 hover:shadow-[0_0_16px_#E40000]';

function SnowCanvas() {
  const canvasRef = useRef(null);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = 0;
    let height = 0;
    const flakes = Array.from({ length: 120 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.5,
      sp: Math.random() * 0.6 + 0.2,
      drift: Math.random() * 0.6 - 0.3,
    }));

    const resize = () => {
      const pr = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);
      setDpr(pr);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * pr);
      canvas.height = Math.floor(height * pr);
      ctx.setTransform(pr, 0, 0, pr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      flakes.forEach(f => {
        f.y += f.sp;
        f.x += f.drift * 0.5;
        if (f.y * height > height) f.y = -0.02;
        if (f.x * width < -10) f.x = 1.01;
        if (f.x * width > width + 10) f.x = -0.01;
        ctx.beginPath();
        ctx.arc(f.x * width, f.y * height, f.r, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [dpr]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
    />
  );
}

function PixelSanta() {
  // Simple inline SVG pixel Santa that wiggles on hover
  return (
    <div className="group w-28 sm:w-32 md:w-40 select-none">
      <svg
        viewBox="0 0 64 64"
        shapeRendering="crispEdges"
        className="w-full drop-shadow-[4px_4px_0_#000] transition-transform duration-300 group-hover:translate-y-[-6px]"
      >
        <rect width="64" height="64" fill="#0A0A0A" />
        {/* Hat */}
        <rect x="20" y="6" width="24" height="8" fill="#E40000" />
        <rect x="18" y="14" width="28" height="4" fill="#FFFFFF" />
        {/* Face */}
        <rect x="22" y="18" width="20" height="12" fill="#FFD7A3" />
        {/* Eyes */}
        <rect x="26" y="22" width="3" height="3" fill="#000000" />
        <rect x="35" y="22" width="3" height="3" fill="#000000" />
        {/* Beard */}
        <rect x="18" y="30" width="28" height="14" fill="#FFFFFF" />
        {/* Body */}
        <rect x="20" y="44" width="24" height="10" fill="#E40000" />
        <rect x="30" y="44" width="4" height="10" fill="#000000" />
        {/* Belt Buckle */}
        <rect x="28" y="48" width="8" height="4" fill="#FFD700" />
      </svg>
    </div>
  );
}

function FallingCoins() {
  const coins = Array.from({ length: 10 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {coins.map((_, i) => (
        <div
          key={i}
          className="absolute top-[-10%] text-[10px] sm:text-xs md:text-base"
          style={{
            left: `${(i * 10) % 100}%`,
            animation: `coinFall ${6 + (i % 5)}s linear ${(i % 10) * 0.6}s infinite`,
          }}
        >
          <span className="drop-shadow-[2px_2px_0_#000]">🪙</span>
        </div>
      ))}
      <style>{`
        @keyframes coinFall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] sm:h-[95vh] w-full overflow-hidden bg-[#0A0A0A]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OIGfFUmCnZ3VD8gH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to boost contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Snow layer */}
      <SnowCanvas />
      <FallingCoins />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div>
            <h1
              className="font-['Press_Start_2P',cursive] text-2xl sm:text-3xl md:text-4xl leading-relaxed text-white drop-shadow-[4px_4px_0_#000]"
            >
              Ho-Ho-Hold Your $SCASH
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-xl">
              The pixel Christmas memecoin where Santa goes privacy mode on Solana.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noreferrer"
                className={pixelBtn}
              >
                Buy on PumpFun
              </a>
              <a
                href="https://solscan.io"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-3 mt-3 sm:mt-4 text-xs sm:text-sm tracking-wider font-bold border-4 border-white text-black bg-white shadow-[4px_4px_0_0_#000] active:shadow-[0_0_0_0_#000] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150 hover:shadow-[0_0_16px_#FFFFFF]"
              >
                View on Solscan
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col items-center">
              <PixelSanta />
              <p className="mt-3 text-xs sm:text-sm text-[#FFD700] drop-shadow-[2px_2px_0_#000]">
                Santa goes full privacy mode 🎅⚡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
