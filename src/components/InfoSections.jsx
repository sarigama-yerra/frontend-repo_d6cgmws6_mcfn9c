import React, { useState } from 'react';

const SectionTitle = ({ children }) => (
  <h2 className="font-['Press_Start_2P',cursive] text-lg sm:text-xl md:text-2xl text-white drop-shadow-[3px_3px_0_#000] mb-6">
    {children}
  </h2>
);

const Card = ({ children, className = '' }) => (
  <div
    className={`relative p-4 sm:p-6 bg-[#111] border-4 border-black/80 shadow-[6px_6px_0_#000] ${className}`}
    style={{ imageRendering: 'pixelated' }}
  >
    <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 4px #2a2a2a' }} />
    {children}
  </div>
);

function PixelIcon({ type }) {
  // Minimal pixel icons using emoji for reliability and fun vibe
  const map = {
    privacy: '🛡️',
    solana: '⚡',
    fair: '🎁',
    chimney: '🏠',
    fire: '🔥',
    wallet: '👛',
    sol: '🪙',
    pump: '🚀',
    swap: '🔁',
  };
  return (
    <span className="text-xl sm:text-2xl md:text-3xl drop-shadow-[2px_2px_0_#000]">{map[type] || '⭐'}</span>
  );
}

export default function InfoSections() {
  const [burned, setBurned] = useState(false);

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      {/* About */}
      <section id="about" className="py-12 sm:py-16">
        <SectionTitle>About</SectionTitle>
        <Card>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            SantaCash blends Zcash-style privacy and PumpFun chaos in one joyful meme.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <PixelIcon type="privacy" />
              <p className="mt-2 text-xs sm:text-sm">Privacy</p>
            </div>
            <div>
              <PixelIcon type="solana" />
              <p className="mt-2 text-xs sm:text-sm">Solana</p>
            </div>
            <div>
              <PixelIcon type="fair" />
              <p className="mt-2 text-xs sm:text-sm">Fair Launch</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-12 sm:py-16">
        <SectionTitle>Tokenomics</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-[#1a1a1a]">
            <p className="text-xs text-white/70">Total Supply</p>
            <p className="mt-2 font-['Press_Start_2P',cursive] text-[#FFD700]">69,000,000</p>
          </Card>
          <Card className="bg-[#1a1a1a]">
            <p className="text-xs text-white/70">Tax</p>
            <p className="mt-2 font-['Press_Start_2P',cursive] text-[#FFD700]">0%</p>
          </Card>
          <Card className="bg-[#1a1a1a]">
            <p className="text-xs text-white/70">Liquidity</p>
            <p className="mt-2 font-['Press_Start_2P',cursive] text-[#FFD700]">Locked</p>
          </Card>
          <Card className="bg-[#1a1a1a]">
            <p className="text-xs text-white/70">Distribution</p>
            <p className="mt-2 text-sm leading-7">
              70% Liquidity<br />20% Community<br />10% SantaVault
            </p>
          </Card>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <Card className="text-center cursor-pointer hover:brightness-110 transition" onClick={() => setBurned(true)}>
            <div className="flex flex-col items-center">
              <PixelIcon type="chimney" />
              <p className="mt-2 text-xs sm:text-sm">Click chimney → burn</p>
            </div>
          </Card>
          <div className="min-h-[6rem] flex items-center">
            <div className="text-2xl" aria-live="polite">
              {burned ? '🔥 Tokens sent to the chimney!' : '🏠 Chimney is idle'}
            </div>
          </div>
        </div>
        {burned && (
          <div className="mt-4 relative h-24">
            <div className="absolute inset-0 flex items-end gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="text-2xl"
                  style={{
                    animation: `rise ${1.2 + (i % 5) * 0.2}s ease-out ${(i % 6) * 0.1}s`,
                  }}
                >
                  🔥
                </span>
              ))}
            </div>
            <style>{`
              @keyframes rise {
                0% { transform: translateY(10px) scale(0.9); opacity: 0; }
                20% { opacity: 1; }
                100% { transform: translateY(-60px) scale(1.1); opacity: 0; }
              }
            `}</style>
          </div>
        )}
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-12 sm:py-16">
        <SectionTitle>Roadmap</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            'North Pole Launch',
            'Elf Army NFT',
            'Sleigh to the Moon',
            'Secret Santa DAO',
          ].map((stage, idx) => (
            <Card key={idx} className="text-center">
              <div className="text-2xl">🎯</div>
              <p className="mt-3 text-sm">Stage {idx + 1}</p>
              <p className="mt-1 font-['Press_Start_2P',cursive] text-xs text-[#FFD700]">
                {stage}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* How to buy */}
      <section id="how-to-buy" className="py-12 sm:py-16">
        <SectionTitle>How to Buy</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { t: 'Get Phantom Wallet', i: 'wallet' },
            { t: 'Fund with SOL', i: 'sol' },
            { t: 'Go to PumpFun', i: 'pump' },
            { t: 'Swap for $SCASH', i: 'swap' },
          ].map((s, idx) => (
            <Card key={idx} className="text-center">
              <PixelIcon type={s.i} />
              <p className="mt-3 text-xs sm:text-sm font-['Press_Start_2P',cursive]">{s.t}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
