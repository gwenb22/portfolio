import React from 'react';
// import { experiences } from '../data/content'; 

const localExperiences = [
    {
        id: "freelance",
        role: "Communication & Design",
        company: "Freelance",
        period: "Sept 2025 - Présent",
        description: "Gestion de projets clients, relationnel, livrables (Logos, Sites Web, Supports de com). Approche orientée solutions.",
        tags: ["Autonomie", "Gestion Client"]
    },
    {
        id: "terra-hominis",
        role: "Chargée de com (Stage/CDD)",
        company: "Terra Hominis",
        period: "Avril - Août 2025",
        description: "Réalisation de posts RS, articles de blog, newsletters. Gestion CRM, segmentation prospects. Organisation d'événements et création de visuels. Maintenance et refonte pages web.",
        tags: ["Com 360", "CRM", "Web"]
    },
    {
        id: "felines",
        role: "Marathon MMI - Grand Prix",
        company: "Félines-Minervois",
        period: "Février 2025",
        description: "Création de la charte graphique et conception de flyers pour la commune.",
        tags: ["Graphisme", "Identité Visuelle", "Print"]
    },
    {
        id: "kimiyo",
        role: "Hackathon - Grand Prix",
        company: "Kimiyo",
        period: "Mars 2024",
        description: "Produire les designs de jeux de société et monter une vidéo de présentation.",
        tags: ["Game Design", "Vidéo", "Team"]
    },
    {
        id: "casa-del-gusto",
        role: "Marathon MMI",
        company: "La Casa del Gusto",
        period: "Janv 2024",
        description: "Refonte de logo et production de la charte graphique.",
        tags: ["Branding", "Identité"]
    }
];

const Experience = () => {
    // Safety check just in case, though logically not needed for hardcoded data
    if (!localExperiences) return null;

    return (
        <section className="py-20 px-10 container mx-auto">
            <div className="flex items-end gap-4 mb-16 border-b border-gray-800 pb-4">
                <h2 className="text-[6vw] leading-none font-bold uppercase">
                    Expériences
                </h2>
                <span className="mb-2 text-design-cyan text-4xl hidden md:block">↓</span>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                {localExperiences.map((exp, index) => (
                    <div key={exp.id || index} className="relative pl-8 md:pl-0">
                        {/* Mobile Timeline Line */}
                        <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-800 md:hidden"></div>
                        <div className="absolute left-[-5px] top-2 w-3 h-3 bg-design-cyan rounded-full md:hidden"></div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 group">
                            {/* Period */}
                            <div className="font-oswald text-xl text-gray-400 uppercase tracking-wide md:text-right pt-1 group-hover:text-white transition-colors">
                                {exp.period}
                            </div>

                            {/* Content */}
                            <div className={`bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 transition-all hover:translate-x-2 ${exp.theme?.hover || 'hover:border-design-cyan'}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-2xl font-bold uppercase">{exp.company}</h3>
                                    <span className={`font-medium text-sm uppercase border px-2 py-0.5 rounded-full inline-block w-max ${exp.theme?.text || 'text-design-cyan'} ${exp.theme?.border || 'border-design-cyan'}`}>
                                        {exp.role}
                                    </span>
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags && exp.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className={`text-xs font-inter font-medium uppercase px-2 py-1 border bg-transparent ${exp.theme?.border || 'border-design-cyan'} ${exp.theme?.text || 'text-design-cyan'}`}
                                        >
                                            &gt; {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
