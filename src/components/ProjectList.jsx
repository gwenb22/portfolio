import React from 'react';
import ProjectCard from './ProjectCard';

import { projects } from '../data/content';

const ProjectList = ({ showTitle = true }) => {
    return (
        <section className="py-20 px-10 container mx-auto">
            {showTitle && (
                <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-4">
                    <h2 className="text-[8vw] leading-none font-bold uppercase">
                        Projets<br />sélectionnés
                    </h2>

                    <div className="hidden md:block max-w-sm text-sm text-gray-400 pb-2">
                        Une collection d'expériences digitales conçues pour allier besoins humains et objectifs business.
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
