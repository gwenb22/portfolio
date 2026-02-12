import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/content';
import Gallery from '../components/Gallery';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    // Determine next project index for footer
    const currentIndex = projects.findIndex(p => p.id === id);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <div className="bg-[#f5f5f5] text-black min-h-screen">
            {/* Top Nav (Simplified for detail) */}
            <div className="flex justify-between items-center py-6 px-10 border-b border-black/10">
                <Link to="/" className="font-bold uppercase tracking-tight hover:text-gray-600">
                    ← Retour à l'accueil
                </Link>
                <div className="font-oswald uppercase font-bold">{project.title}</div>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto pt-20 pb-12 px-10">
                <h1 className="text-[10vw] leading-[0.8] font-oswald uppercase font-black mb-8 w-full break-words">
                    {project.title} <br />
                    <span className="text-[6vw] text-gray-400">{project.subtitle}</span>
                </h1>
                <div className={`${project.color} w-full h-[60vh] rounded-lg overflow-hidden relative mb-12 border-2 border-black flex items-center justify-center`}>
                    {/* Placeholder for real images */}
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="max-h-[70%] max-w-[80%] object-contain drop-shadow-2xl"
                        />
                    ) : (
                        <div className="text-black/20 font-oswald text-6xl uppercase p-4 text-center">
                            {project.title} Visuel
                        </div>
                    )}
                    {/* Tag */}
                    <div className="absolute bottom-6 right-6 bg-white px-3 py-1 text-xs font-bold uppercase border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        {project.heroTag} / {project.year}
                    </div>
                </div>
            </section>

            {/* Info Bar - Role & Skills */}
            <section className="border-t border-b border-black/10 py-8 bg-white">
                <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-xs uppercase text-gray-500 mb-1">Rôle</h4>
                        <p className="font-bold uppercase text-sm md:text-base">{project.role}</p>
                    </div>
                    <div>
                        <h4 className="text-xs uppercase text-gray-500 mb-1">Catégorie</h4>
                        <p className="font-bold uppercase text-sm md:text-base">{project.category}</p>
                    </div>
                    <div className="col-span-2">
                        <h4 className="text-xs uppercase text-gray-500 mb-1">Compétences Clés</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.mobilizedSkills && project.mobilizedSkills.map(skill => (
                                <span key={skill} className="bg-gray-100 px-2 py-0.5 rounded text-xs font-bold uppercase border border-gray-200">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Context & Objectives */}
            <section className="py-24 container mx-auto px-10 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-5xl font-oswald uppercase font-bold mb-8">
                            Le <span className="text-design-cyan italic">Contexte</span>
                        </h2>
                        <p className="text-xl leading-relaxed text-gray-800">
                            {project.context}
                        </p>
                    </div>
                    <div className="bg-white p-8 border-l-4 border-black">
                        <h3 className="font-bold uppercase text-xl mb-6">Objectifs</h3>
                        <ul className="space-y-4">
                            {project.objectives && project.objectives.map((obj, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <span className="text-design-cyan font-bold">0{i + 1}</span>
                                    <p className="font-medium text-gray-700">{obj}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Missions (Role) - Dark Section */}
            <section className="bg-[#111] text-white py-24">
                <div className="container mx-auto px-10">
                    <h2 className="text-6xl font-oswald uppercase font-bold mb-16 text-center">
                        Missions & <br /> <span className="text-outline text-white">Réalisations</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {project.missions && project.missions.map((mission, i) => (
                            <div key={i} className="bg-[#222] p-8 border border-gray-800 rounded-lg hover:border-design-cyan transition-colors group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">✦</div>
                                <h4 className="text-xl font-bold uppercase mb-2">{mission}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="py-24 container mx-auto px-10">
                    <h2 className="text-6xl font-oswald uppercase font-bold mb-16 text-left">
                        <span className="bg-design-cyan px-2 text-black">Galerie</span>
                    </h2>
                    <Gallery images={project.gallery} projectColor={project.color} />
                </section>
            )}

            {/* Results / Solution */}
            <section className="py-24 container mx-auto px-10 text-center max-w-4xl">
                <h2 className="text-6xl font-oswald uppercase font-bold mb-12">
                    <span className="bg-ecomm-yellow px-2 text-black">Résultats</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {project.results && project.results.map((res, i) => (
                        <div key={i} className="border-t-4 border-black pt-4">
                            <p className="font-bold text-lg leading-tight">{res}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer / Next Project */}
            <Link to={`/project/${nextProject.id}`} className="block bg-black text-white py-32 text-center hover:bg-[#222] transition-colors group relative overflow-hidden">
                <div className="relative z-10">
                    <div className="text-xs text-gray-500 uppercase mb-4 tracking-widest">Projet suivant</div>
                    <h2 className="text-[6vw] font-oswald uppercase font-bold leading-none translate-y-0 group-hover:-translate-y-2 transition-transform">
                        {nextProject.title} <span className="text-design-cyan">→</span>
                    </h2>
                </div>
            </Link>
        </div>
    );
};

export default ProjectDetail;
