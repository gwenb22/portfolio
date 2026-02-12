import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="pt-20 pb-20 px-10 container mx-auto">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-[6vw] leading-[0.85] font-bold text-left tracking-tighter mb-12">
                    Communication. Création. Digital.
                </h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl text-gray-300 text-sm md:text-base leading-relaxed">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <p>
                        Derrière chaque projet se cache une histoire à raconter.
                        Étudiante en Métiers du Multimédia et de l'Internet, je mets la création et la stratégie au service des marques, des associations et des projets qui ont quelque chose à dire.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <p>
                        De l'identité visuelle au contenu digital, j'aime construire des univers cohérents, humains et engageants. Ce portfolio est une invitation à découvrir mon regard, mon parcours et ma manière de concevoir la communication.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex md:justify-end items-start"
                >
                    <a href="#contact" className="group inline-flex items-center gap-2 uppercase tracking-widest border-b border-white pb-1 hover:text-design-cyan hover:border-design-cyan transition-colors">
                        Me contacter
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
