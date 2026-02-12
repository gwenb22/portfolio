import React, { useEffect } from 'react';
import profileImage from '../assets/profile.jpg';
// const profileImage = null; // Placeholder until file is added
import Experience from '../components/Experience';
import Sticker from '../components/Sticker';
import { profile } from '../data/content';
import { Link } from 'react-router-dom';
import cvFile from '../assets/cv.pdf';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-12 pb-20 bg-[#111111] text-white">
            <div className="container mx-auto px-10">
                {/* Nav Back */}
                <div className="mb-10">
                    <Link to="/" className="font-bold uppercase tracking-tight hover:text-gray-400 mb-8 inline-block">
                        ← Retour à l'accueil
                    </Link>
                </div>

                {/* Split Layout: Photo (Left) vs Content (Right) */}
                {/* Reduced photo column width to 30% approx */}
                <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-12 mb-32 items-start max-w-6xl mx-auto">

                    {/* Left: Photo */}
                    <div className="relative w-full aspect-[3/4] border-4 border-white/10 overflow-hidden bg-[#1a1a1a]">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Gwenaëlle Besson"
                                className="w-full h-full object-cover object-top grayscale-0 hover:scale-105 transition-transform duration-700"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/10 font-oswald text-8xl uppercase tracking-tighter">
                                Photo
                            </div>
                        )}
                    </div>

                    {/* Right: Bio & Stickers */}
                    <div className="flex flex-col h-full pl-0 lg:pl-10">
                        <h1 className="text-6xl md:text-8xl font-oswald font-bold uppercase mb-8 leading-[0.85]">
                            À Propos
                        </h1>

                        <div className="text-xl leading-relaxed text-gray-300 mb-12 max-w-2xl font-medium">
                            {profile.bio.map((p, i) => (
                                <p key={i} className="mb-6">{p}</p>
                            ))}
                        </div>

                        {/* Stickers Cloud - Organized Grid */}
                        <div className="relative w-full mt-auto grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">

                            <Sticker
                                className="relative bg-design-cyan w-40 h-40 flex items-center justify-center text-center p-4 shadow-xl"
                                rotation={-2}
                                delay={0.1}
                            >
                                <div className="font-black text-xs leading-tight">
                                    <span className="text-2xl block mb-1">⤮</span>
                                    STRATÉGIE<br />DIGITALE
                                </div>
                            </Sticker>

                            <Sticker
                                className="relative bg-ux-pink text-white px-6 py-4 shadow-xl"
                                rotation={2}
                                delay={0.2}
                            >
                                <div className="font-black text-lg leading-none">
                                    UX DESIGN <br /> & RECHERCHE
                                </div>
                            </Sticker>

                            <Sticker
                                className="relative bg-ecomm-yellow text-black w-48 p-4 shadow-xl"
                                rotation={-1}
                                delay={0.3}
                            >
                                <div className="font-bold text-sm border border-black px-1 inline-block mb-1 bg-white">SKILLS.JS</div>
                                <div className="font-black text-xl leading-none">FRONT-END<br />DEVELOPMENT</div>
                            </Sticker>

                            <Sticker
                                className="relative bg-[#a3e635] text-black w-36 h-36 rounded-full flex items-center justify-center border-2 border-black shadow-xl"
                                rotation={-5}
                                delay={0.5}
                            >
                                <div className="font-black text-xs text-center">
                                    TESTS<br />UTILISATEURS
                                    <br /><span className="text-xl">⊕</span>
                                </div>
                            </Sticker>
                        </div>
                    </div>
                </div>

                {/* Expériences */}
                <div className="border-t-4 border-white/10 pt-20 mb-32 max-w-6xl mx-auto">
                    <Experience />
                </div>

                {/* Download CV Banner - Compact */}
                <div className="max-w-6xl mx-auto">
                    <a
                        href={cvFile}
                        download="CV_Gwenaelle_Besson.pdf"
                        className="relative w-full max-w-xl mx-auto block bg-ecomm-yellow text-black py-4 px-6 border-4 border-transparent hover:border-white transition-all transform hover:-translate-y-1 group cursor-pointer mb-20 origin-center -rotate-1 md:-rotate-0"
                    >
                        <div className="flex justify-between items-center gap-6">
                            <h2 className="text-2xl md:text-3xl font-oswald font-bold uppercase tracking-tighter">
                                Télécharger mon CV
                            </h2>
                            <div className="text-3xl group-hover:translate-y-2 transition-transform">
                                ↓
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
