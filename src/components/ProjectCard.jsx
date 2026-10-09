import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
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
                className={`relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[4/5] lg:aspect-[4/3] ${displayImage ? color : 'bg-card-bg'} border border-border-dark p-5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all hover:-translate-y-2 hover:shadow-card hover:border-${domainColor}`}
            >
                {/* Header Tags */}
                <div className="relative z-10 flex justify-between items-start gap-3">
                    <span className={`bg-${domainColor} text-black border border-black px-2 py-1 font-bold text-xs uppercase -rotate-2`}>
                        {category}
                    </span>
                    <div className="shrink-0 w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-black" strokeWidth={2.5} aria-hidden="true" />
                    </div>
                </div>

                {/* Center Image/Content: kept in the flow so it never covers the title */}
                <div className="relative flex-1 min-h-0 my-4 flex items-center justify-center pointer-events-none">
                    {displayImage ? (
                        <div className="w-4/5 h-full flex flex-col">
                            <img
                                src={displayImage}
                                alt={title}
                                className="w-full h-full object-contain drop-shadow-xl"
                            />
                        </div>
                    ) : (
                        <div className={`w-4/5 h-full border border-black/10 flex items-center justify-center font-oswald text-4xl text-white/20 ${alignRight ? 'bg-white/10' : 'bg-black/5'}`}>
                            IMG
                        </div>
                    )}
                </div>

                {/* Footer Info */}
                <div className="relative pr-24 sm:pr-28">
                    <h3 className={`font-oswald text-3xl sm:text-4xl xl:text-5xl uppercase leading-[0.95] mb-2 break-words ${displayImage ? 'text-black' : 'text-white'}`}>{title}</h3>
                    <p className={`font-inter text-sm font-medium ${displayImage ? 'text-black/70' : 'text-text-secondary'}`}>{year}</p>
                </div>

                {/* Decorative Sticker (the footer keeps right padding so it never covers the title) */}
                <Sticker
                    className={`absolute bottom-5 right-5 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-20 h-20 sm:w-24 sm:h-24 bg-${domainColor} rounded-full flex items-center justify-center text-[10px] text-center p-2 leading-tight z-10 text-black border-2 border-black`}
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
