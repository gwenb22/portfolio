import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Sticker from './Sticker';

const ProjectCard = ({ id, title, category, color, image, cardImage, year, alignRight }) => {
    // Extract domain color from the color prop (e.g., 'bg-ux-pink' -> 'ux-pink')
    const domainColor = color?.replace('bg-', '') || 'design-cyan';

    // Use cardImage if available, otherwise fallback to image
    const displayImage = cardImage || image;

    return (
        <Link to={`/project/${id}`} className="block group">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative w-full aspect-[4/3] ${displayImage ? color : 'bg-card-bg'} border border-border-dark p-8 flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-card hover:border-${domainColor}`}
            >
                {/* Header Tags */}
                <div className="flex justify-between items-start">
                    <span className={`bg-${domainColor} text-black border border-black px-2 py-1 font-bold text-xs uppercase -rotate-2`}>
                        {category}
                    </span>
                    <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
                        <span className="text-xl">↗</span>
                    </div>
                </div>

                {/* Center Image/Content Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {displayImage ? (
                        <div className="w-3/5 h-3/5 flex flex-col">
                            <img
                                src={displayImage}
                                alt={title}
                                className="w-full h-full object-contain drop-shadow-xl border-b border-border-dark pb-4"
                            />
                        </div>
                    ) : (
                        <div className={`w-3/5 h-3/5 border border-black/10 flex items-center justify-center font-oswald text-4xl text-white/20 ${alignRight ? 'bg-white/10' : 'bg-black/5'}`}>
                            IMG
                        </div>
                    )}
                </div>

                {/* Footer Info */}
                <div className="mt-auto">
                    <h3 className={`font-oswald text-5xl uppercase leading-[0.85] mb-2 ${displayImage ? 'text-black' : 'text-white'}`}>{title}</h3>
                    <p className={`font-inter text-sm font-medium ${displayImage ? 'text-black/70' : 'text-text-secondary'}`}>{year}</p>
                </div>

                {/* Decorative Sticker */}
                <Sticker
                    className={`absolute bottom-10 right-10 w-24 h-24 bg-${domainColor} rounded-full flex items-center justify-center text-[10px] text-center p-2 leading-tight z-10 text-black border-2 border-black`}
                    rotation={10}
                    delay={0.2}
                >
                    VOIR LE PROJET
                </Sticker>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;
