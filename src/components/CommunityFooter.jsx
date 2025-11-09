import React from 'react';

const linkBtn =
  'inline-block px-4 py-2 border-4 border-white bg-white text-black font-bold shadow-[4px_4px_0_#000] hover:shadow-[0_0_16px_#FFFFFF] active:translate-x-[4px] active:translate-y-[4px]';

export default function CommunityFooter() {
  return (
    <footer id="community" className="pt-16 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4">
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 grid place-content-center bg-[#111] border-4 border-black shadow-[6px_6px_0_#000]">
                <span className="text-2xl" style={{ filter: 'drop-shadow(2px 2px 0 #000)' }}>🎅</span>
              </div>
              <div>
                <p className="font-['Press_Start_2P',cursive] text-sm sm:text-base drop-shadow-[3px_3px_0_#000]">
                  Join the Santa Squad on X
                </p>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className={linkBtn}
                >
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-8 text-center">
          <p className="text-xs sm:text-sm text-white/80">
            © 2025 SantaCash. Built with 🎅, pixels, and degen energy.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 flex-wrap">
            <a href="https://pump.fun" target="_blank" rel="noreferrer" className={linkBtn}>PumpFun</a>
            <a href="https://solscan.io" target="_blank" rel="noreferrer" className={linkBtn}>Solscan</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className={linkBtn}>Follow on X</a>
          </div>
        </section>
      </div>
    </footer>
  );
}
