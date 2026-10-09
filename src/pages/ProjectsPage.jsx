import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-6 md:pt-12 pb-10 md:pb-20">
            <div className="container mx-auto px-5 sm:px-8 lg:px-10 mb-10 md:mb-16">
                <Link to="/" className="font-bold uppercase tracking-tight hover:text-gray-400 mb-6 md:mb-8 inline-block">
                    ← Retour à l'accueil
                </Link>
                <h1 className="text-[clamp(2.5rem,8vw,8rem)] leading-[1.2] font-bold uppercase break-words">
                    Mes <br /> <span className="text-outline text-white">Réalisations</span>
                </h1>
            </div>

            {/* ProjectList provides its own container and gutters */}
            <ProjectList showTitle={false} />
        </div>
    );
};

export default ProjectsPage;
