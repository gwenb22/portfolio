import React from 'react';
import Sticker from './Sticker';

// Mobile/tablet: stickers flow in a wrapped cluster. lg+: free-floating absolute composition.
const Showcase = () => {
    return (
        <section className="relative overflow-hidden bg-grid-bg text-black py-12 lg:py-32 rounded-3xl mx-4 sm:mx-6 lg:mx-auto lg:max-w-[95%] mb-14 lg:mb-20">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            ></div>

            <div className="relative container mx-auto px-4 lg:px-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-6 lg:block lg:h-[600px]">

                {/* Sticker: Stratégie */}
                <Sticker
                    className="relative lg:absolute lg:top-20 lg:left-[20%] bg-design-cyan w-36 h-36 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center text-sm p-4 z-10"
                    rotation={-5}
                    delay={0.2}
                >
                    <div className="text-2xl lg:text-3xl mb-1">◐</div>
                    <div className="font-black text-base lg:text-lg leading-none">STRATÉGIE</div>
                    <div className="font-black text-base lg:text-lg leading-none mb-2">DESIGN</div>
                    <div className="text-[9px] lg:text-[10px] bg-black text-white px-2 py-0.5 rounded-full text-center">ALLIER BUSINESS & BESOINS</div>
                </Sticker>

                {/* Sticker: UX */}
                <Sticker
                    className="relative lg:absolute lg:top-28 lg:right-[20%] bg-ux-pink text-white px-5 py-3 lg:px-6 lg:py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
                    rotation={4}
                    delay={0.6}
                >
                    <div className="font-black text-xl lg:text-2xl leading-none">DESIGN</div>
                    <div className="font-black text-xl lg:text-2xl leading-none">EXPÉRIENCE</div>
                    <div className="font-black text-xl lg:text-2xl leading-none flex items-center justify-between">
                        UTILISATEUR <span className="text-sm">©</span>
                    </div>
                </Sticker>

                {/* NEW STICKER: FREELANCE */}
                <Sticker
                    className="relative lg:absolute lg:top-1/2 lg:left-[35%] lg:-translate-y-1/2 bg-white text-black px-5 py-3 rounded-none border-2 border-black -rotate-6 z-30"
                    rotation={6}
                    delay={0.9}
                >
                    <div className="font-black text-2xl lg:text-3xl uppercase">FREELANCE</div>
                    <div className="text-[10px] lg:text-xs font-mono border-t border-black pt-1 mt-1">COMMUNICATION & STRATÉGIE</div>
                </Sticker>

                {/* NEW STICKER: Créativité */}
                <Sticker
                    className="relative lg:absolute lg:top-[45%] lg:right-[35%] bg-[#ff6b6b] text-white w-24 h-24 lg:w-28 lg:h-28 rounded-full flex flex-col items-center justify-center border-2 border-black rotate-12 z-20 shadow-lg"
                    rotation={12}
                    delay={1.0}
                >
                    <div className="text-2xl lg:text-3xl">💡</div>
                    <div className="font-black text-xs lg:text-sm mt-1">CRÉATIVITÉ</div>
                </Sticker>

                {/* Sticker: Expériences */}
                <Sticker
                    className="relative lg:absolute lg:bottom-32 lg:left-[10%] bg-ecomm-yellow text-black px-5 py-3 lg:px-6 rounded-lg -rotate-3 z-20"
                    rotation={-3}
                    delay={0.4}
                >
                    <div className="font-mono text-xs border border-black px-1 inline-block mb-1">www.*</div>
                    <div className="font-black text-lg lg:text-xl">EXPÉRIENCES</div>
                    <div className="font-black text-lg lg:text-xl flex items-center justify-center gap-1">
                        <span className="text-lg">✪</span> DIGITALES
                    </div>
                </Sticker>

                {/* Sticker: Tests U */}
                <Sticker
                    className="relative lg:absolute lg:bottom-40 lg:right-[15%] bg-[#a3e635] text-black w-28 h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center border-2 border-black z-10"
                    rotation={15}
                    delay={0.7}
                >
                    <div className="w-full h-full relative flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                            <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                            <text fontSize="11" fontWeight="bold">
                                <textPath href="#textPath" startOffset="0%">
                                    • TESTS UTILISATEURS • TESTS UTILISATEURS
                                </textPath>
                            </text>
                        </svg>
                        <div className="absolute text-2xl">⊕</div>
                    </div>
                </Sticker>

                {/* Sticker: Branding */}
                <Sticker
                    className="relative lg:absolute lg:top-1/2 lg:right-[5%] lg:-translate-y-1/2 bg-design-cyan w-36 lg:w-40 p-4 rounded-md -rotate-12 z-0"
                    rotation={-12}
                    delay={0.8}
                >
                    <div className="font-black text-lg leading-tight">BRANDING &</div>
                    <div className="font-black text-lg leading-tight mb-2">IDENTITÉ</div>
                    <div className="flex justify-between items-center border-t border-black pt-1">
                        <span className="text-xl">©'26</span>
                        <span className="text-xl">✶</span>
                    </div>
                </Sticker>

                {/* NEW STICKER: Com 360 */}
                <Sticker
                    className="relative lg:absolute lg:bottom-24 lg:left-1/2 lg:-translate-x-1/2 bg-[#ae8625] text-white px-4 py-2 rounded-lg shadow-lg rotate-2 z-20 border border-black"
                    rotation={-2}
                    delay={1.1}
                >
                    <div className="font-black text-lg lg:text-xl whitespace-nowrap">COMMUNICATION 360°</div>
                </Sticker>

            </div>
        </section>
    );
};

export default Showcase;
