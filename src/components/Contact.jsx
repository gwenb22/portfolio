import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-10 container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
                <div className="inline-block bg-motion-orange text-black px-3 py-1 font-bold uppercase text-sm mb-6 -rotate-2">
                    Disponible pour projet / alternance
                </div>

                <h2 className="text-[8vw] leading-[0.85] font-bold uppercase mb-12">
                    Travaillons <br /> <span className="text-outline text-white">Ensemble</span>
                </h2>

                <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
                    Vous avez un projet ? Une idée folle ? Ou simplement envie de discuter de design ? N'hésitez pas à me contacter !
                </p>

                <a
                    href="mailto:gwenaellebesson.pro@gmail.com"
                    className="inline-block bg-ecomm-yellow text-[#111] font-oswald font-bold text-2xl px-12 py-6 uppercase tracking-widest border-2 border-[#111] transition-all hover:shadow-btn hover:-translate-x-[2px] hover:-translate-y-[2px]"
                >
                    Me contacter
                </a>

                <div className="mt-20 flex justify-center gap-12 text-sm font-bold uppercase tracking-widest text-gray-500">
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
