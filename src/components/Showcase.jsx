import React from 'react';
import Sticker from './Sticker';
import { motion } from 'framer-motion';

const Showcase = () => {
    return (
        <section className="relative w-full overflow-hidden bg-grid-bg text-black py-32 rounded-3xl mx-auto max-w-[95%] mb-20">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem'
                }}
            ></div>

            <div className="relative container mx-auto h-[600px] flex items-center justify-center">

                {/* Sticker: Stratégie */}
                <Sticker
                    className="absolute top-20 left-[15%] md:left-[20%] bg-design-cyan w-48 h-48 rounded-full flex flex-col items-center justify-center text-sm p-4 z-10"
                    rotation={-5}
                    delay={0.2}
                >
                    <div className="text-3xl mb-1">◐</div>
                    <div className="font-black text-lg leading-none">STRATÉGIE</div>
                    <div className="font-black text-lg leading-none mb-2">DESIGN</div>
                    <div className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full text-center">ALLIER BUSINESS & BESOINS</div>
                </Sticker>

                {/* Sticker: Expériences */}
                <Sticker
                    className="absolute bottom-32 left-[10%] bg-ecomm-yellow text-black px-6 py-3 rounded-lg transform -rotate-3 z-20"
                    rotation={-3}
                    delay={0.4}
                >
                    <div className="font-mono text-xs border border-black px-1 inline-block mb-1">www.*</div>
                    <div className="font-black text-xl">EXPÉRIENCES</div>
                    <div className="font-black text-xl flex items-center gap-1">
                        <span className="text-lg">✪</span> DIGITALES
                    </div>
                </Sticker>

                {/* Sticker: UX */}
                <Sticker
                    className="absolute top-28 right-[15%] md:right-[20%] bg-ux-pink text-white px-6 py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10"
                    rotation={4}
                    delay={0.6}
                >
                    <div className="font-black text-2xl leading-none">DESIGN</div>
                    <div className="font-black text-2xl leading-none">EXPÉRIENCE</div>
                    <div className="font-black text-2xl leading-none flex items-center justify-between">
                        UTILISATEUR <span className="text-sm">©</span>
                    </div>
                </Sticker>

                {/* Sticker: Tests U */}
                <Sticker
                    className="absolute bottom-40 right-[15%] bg-[#a3e635] text-black w-32 h-32 rounded-full flex items-center justify-center border-2 border-black z-10"
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
                    className="absolute top-1/2 right-[5%] translate-y-[-50%] bg-design-cyan w-40 p-4 rounded-md -rotate-12 z-0"
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

                {/* NEW STICKER: FREELANCE */}
                <Sticker
                    className="absolute top-1/2 left-[35%] -translate-y-1/2 bg-white text-black px-5 py-3 rounded-none border-2 border-black -rotate-6 z-30"
                    rotation={6}
                    delay={0.9}
                >
                    <div className="font-black text-3xl uppercase">FREELANCE</div>
                    <div className="text-xs font-mono border-t border-black pt-1 mt-1">COMMUNICATION & STRATÉGIE</div>
                </Sticker>

                {/* NEW STICKER: Créativité */}
                <Sticker
                    className="absolute top-[45%] right-[35%] bg-[#ff6b6b] text-white w-28 h-28 rounded-full flex flex-col items-center justify-center border-2 border-black rotate-12 z-20 shadow-lg"
                    rotation={12}
                    delay={1.0}
                >
                    <div className="text-3xl">💡</div>
                    <div className="font-black text-sm mt-1">CRÉATIVITÉ</div>
                </Sticker>

                {/* NEW STICKER: Com 360 */}
                <Sticker
                    className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-[#ae8625] text-white px-4 py-2 rounded-lg shadow-lg rotate-2 z-20 border border-black"
                    rotation={-2}
                    delay={1.1}
                >
                    <div className="font-black text-xl whitespace-nowrap">COMMUNICATION 360°</div>
                </Sticker>

            </div>
        </section>
    );
};

export default Showcase;
