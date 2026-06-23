import React from 'react';
import profileImage from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-20 px-10 container mx-auto bg-white text-black rounded-3xl my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-[6vw] leading-none font-bold uppercase mb-8">
                        À Propos
                    </h2>
                    <div className="text-xl leading-relaxed space-y-6">
                        <p>
                            Passionnée par le numérique en général, j'ai toujours aimé créer et comprendre comment les choses fonctionnent.
                        </p>
                        <p>
                            Aujourd'hui professionnelle freelance en communication, ayant fini ma formation en Métiers du Multimédia et de l'Internet, je touche à tout : développement web, design graphique, stratégie digitale...
                        </p>
                        <p>
                            Mon objectif : concevoir des expériences utilisateurs fluides et esthétiques, sans jamais perdre de vue le message.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link to="/about" className="inline-block border-b-2 border-black font-bold uppercase tracking-wider hover:text-design-cyan hover:border-design-cyan transition-colors">
                            En savoir plus →
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    {/* Visual element / Image placeholder */}
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Gwenaëlle Besson"
                                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center relative">
                                <div className="absolute text-[150px] opacity-10 font-oswald select-none">GB</div>
                                <div className="z-10 text-center p-8">
                                    <span className="text-4xl">👋</span>
                                    <h3 className="font-bold text-2xl mt-4">Gwenaëlle Besson</h3>
                                    <p className="text-sm text-gray-500 uppercase mt-2">Freelance Communication</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Decorative stickers */}
                    <motion.div
                        className="absolute -bottom-6 -right-6 bg-ecomm-yellow border-2 border-black px-4 py-2 font-bold uppercase rotate-6 shadow-md"
                        animate={{ rotate: [6, 4, 6] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        Créative
                    </motion.div>
                    <motion.div
                        className="absolute -top-6 -left-6 bg-ux-pink text-white border-2 border-black px-4 py-2 font-bold uppercase -rotate-6 shadow-md"
                        animate={{ rotate: [-6, -8, -6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        Curieuse
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
