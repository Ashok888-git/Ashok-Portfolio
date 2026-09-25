import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row items-center justify-center gap-10 px-10">
                <ProjectCard
                    src="/FactoryFix.png"
                    title="FactoryFIX"
                    description="AI-powered manufacturing intelligence platform that predicts machine failures, estimates remaining useful life (RUL), and product defect risk, then combines them into a machine health score shown on a web dashboard."
                    github="https://github.com/Ashok888-git/FactoryFIX"
                    live="https://factory-fix.vercel.app/"
                />
            </div>
        </div>
    );
};

export default Projects;
