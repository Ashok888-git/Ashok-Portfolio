"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { slideInFromBottom } from "@/utils/motion";

interface ProjectCardProps {
    src: string;
    title: string;
    description: string;
    github: string;
    live?: string;
}

const ProjectCard = ({ src, title, description, github, live }: ProjectCardProps) => {
    return (
        <InView triggerOnce={false}>
            {({ inView, ref }) => (
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromBottom}
                    whileHover={{ scale: 1.05 }}
                    className="group w-full max-w-[380px] flex flex-col rounded-lg border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md overflow-hidden shadow-lg shadow-[#2A0E61]/50"
                >
                    {/* Project Screenshot */}
                    <div className="relative w-full h-[200px] border-b border-[#7042f88b]">
                        <Image
                            src={src}
                            alt={`${title} project preview`}
                            fill
                            sizes="(max-width: 768px) 100vw, 380px"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col gap-4 p-5 h-full">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold">
                            {title}
                        </span>

                        <p className="text-gray-300 text-[15px] leading-7">
                            {description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-row flex-wrap items-center gap-3 mt-auto pt-1">
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-primary py-2 px-5 rounded-lg text-white text-sm text-center cursor-pointer"
                            >
                                Source Code
                            </a>

                            {live && (
                                <a
                                    href={live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="button-primary py-2 px-5 rounded-lg text-white text-sm text-center cursor-pointer"
                                >
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </InView>
    );
};

export default ProjectCard;
