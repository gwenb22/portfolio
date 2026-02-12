import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectList from '../components/ProjectList';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-12 pb-20">
            <div className="container mx-auto px-10">
                <div className="mb-10">
                    <Link to="/" className="font-bold uppercase tracking-tight hover:text-gray-400 mb-8 inline-block">
                        ← Retour à l'accueil
                    </Link>
                    <h1 className="text-[8vw] leading-[0.85] font-bold uppercase">
                        Mes <br /> <span className="text-outline text-white">Réalisations</span>
                    </h1>
                </div>

                <div className="-mx-6 md:-mx-0">
                    <ProjectList showTitle={false} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
