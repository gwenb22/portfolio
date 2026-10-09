import React from 'react';
// import { experiences } from '../data/content'; 

const localExperiences = [
    {
        id: "cave-gabi",
        role: "Chargée de communication (Stage)",
        company: "La Cave de Gabi",
        period: "Févr - Avril 2026",
        description: "Création et animation des comptes sociaux de l'entreprise. Création de contenus : publications réseaux sociaux, newsletters et supports visuels. Maintenance du site internet et développement d'outils web. Relation client : suivi des demandes et adaptation des supports aux besoins.",
        tags: ["Réseaux sociaux", "Newsletters", "Web"]
    },
    {
        id: "freelance",
        role: "Communication, graphisme & web",
        company: "Freelance",
        period: "Sept 2025 - Présent",
        description: "Création de contenus : posts réseaux sociaux, articles de blog, newsletters et visuels. Gestion d'outils digitaux : CRM, segmentation de prospects, maintenance de sites. Gestion de projets en autonomie, relation client et respect des délais.",
        tags: ["Autonomie", "Gestion client", "CRM"]
    },
    {
        id: "terra-hominis",
        role: "Assistante com, marketing & événementiel (Stage puis CDD)",
        company: "Terra Hominis",
        period: "Avril - Août 2025",
        description: "Rédaction de contenus pour les réseaux sociaux, articles de blog et newsletters. Organisation d'événements, création de visuels et de supports de communication. Refonte et maintenance du site internet. Gestion et organisation de données clients via CRM.",
        tags: ["Com 360", "Événementiel", "CRM", "Web"]
    },
    {
        id: "hackathon-2025",
        role: "Pilotage du groupe communication",
        company: "Hackathon - IUT de Béziers",
        period: "Mars 2025",
        description: "Pilotage d'un groupe de 8 étudiants chargé de la communication globale de l'événement. Création et diffusion de contenus digitaux, audiovisuels et graphiques sur 4 jours. Scénarisation et gestion technique de la cérémonie de clôture (2 h) au Palais des congrès de Béziers.",
        tags: ["Gestion de projet", "Audiovisuel", "Événementiel"]
    },
    {
        id: "felines",
        role: "Marathon MMI - Grand Prix",
        company: "Félines-Minervois",
        period: "Février 2025",
        description: "Création de la charte graphique de la commune. Conception de flyers et supports de communication.",
        tags: ["Graphisme", "Identité Visuelle", "Print"]
    },
    {
        id: "kimiyo",
        role: "Hackathon - Grand Prix",
        company: "Kimiyo",
        period: "Mars 2024",
        description: "Conception des designs et visuels de jeux de société. Montage d'une vidéo de présentation du projet.",
        tags: ["Game Design", "Vidéo", "Team"]
    }
];

const Experience = () => {
    // Safety check just in case, though logically not needed for hardcoded data
    if (!localExperiences) return null;

    return (
        <section className="py-12 md:py-20">
            <div className="flex items-end gap-4 mb-10 md:mb-16 border-b border-gray-800 pb-4">
                <h2 className="text-[clamp(2.5rem,6vw,6rem)] leading-none font-bold uppercase">
                    Expériences
                </h2>
                <span className="mb-2 text-design-cyan text-4xl hidden md:block">↓</span>
            </div>

            <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
                {localExperiences.map((exp, index) => (
                    <div key={exp.id || index} className="relative pl-8 md:pl-0">
                        {/* Mobile Timeline Line */}
                        <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-800 md:hidden"></div>
                        <div className="absolute left-[-5px] top-2 w-3 h-3 bg-design-cyan rounded-full md:hidden"></div>

                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 group">
                            {/* Period */}
                            <div className="font-oswald text-lg md:text-xl text-gray-400 uppercase tracking-wide md:text-right pt-1 group-hover:text-white transition-colors">
                                {exp.period}
                            </div>

                            {/* Content */}
                            <div className={`bg-[#1a1a1a] p-5 md:p-6 rounded-lg border border-gray-800 transition-all hover:translate-x-2 ${exp.theme?.hover || 'hover:border-design-cyan'}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-xl md:text-2xl font-bold uppercase">{exp.company}</h3>
                                    <span className={`font-medium text-sm uppercase border px-2 py-0.5 rounded-full inline-block max-w-full ${exp.theme?.text || 'text-design-cyan'} ${exp.theme?.border || 'border-design-cyan'}`}>
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
