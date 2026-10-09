import React from 'react';
import ProjectCard from './ProjectCard';

import { projects } from '../data/content';

const ProjectList = ({ showTitle = true }) => {
    return (
        <section className={`${showTitle ? 'py-14 md:py-20' : 'pb-14 md:pb-20'} px-5 sm:px-8 lg:px-10 container mx-auto`}>
            {showTitle && (
                <div className="flex justify-between items-end mb-10 md:mb-16 border-b border-gray-800 pb-4">
                    <h2 className="text-[clamp(2.5rem,8vw,8rem)] leading-[1.2] font-bold uppercase">
                        Projets<br />sélectionnés
                    </h2>

                    <div className="hidden md:block max-w-sm text-sm text-gray-400 pb-2">
                        Une collection d'expériences digitales conçues pour allier besoins humains et objectifs business.
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
