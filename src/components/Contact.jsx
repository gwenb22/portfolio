import React from 'react';
import { profile } from '../data/content';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-5 sm:px-8 lg:px-10 container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
                <div className="inline-block bg-motion-orange text-black px-3 py-1 font-bold uppercase text-sm mb-6 -rotate-2">
                    Disponible pour projet
                </div>

                <h2 className="text-[clamp(2.75rem,8vw,8rem)] leading-[0.85] font-bold uppercase mb-8 md:mb-12">
                    Travaillons <br /> <span className="text-outline text-white">Ensemble</span>
                </h2>

                <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto">
                    Vous avez un projet ? Une idée folle ? Ou simplement envie de discuter de design ? N'hésitez pas à me contacter !
                </p>

                <a
                    href="mailto:gwenaellebesson.pro@gmail.com"
                    className="inline-block bg-ecomm-yellow text-[#111] font-oswald font-bold text-xl md:text-2xl px-8 py-4 md:px-12 md:py-6 uppercase tracking-wider md:tracking-widest border-2 border-[#111] transition-all hover:shadow-btn hover:-translate-x-[2px] hover:-translate-y-[2px]"
                >
                    Me contacter
                </a>

                <div className="mt-14 md:mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4 md:gap-12 text-sm font-bold uppercase tracking-widest text-gray-500">
                    <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href={profile.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
