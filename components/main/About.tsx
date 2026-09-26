"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
    >
      <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-auto h-auto">

        {/* Profile Image */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.5)}
              className="flex flex-col items-center rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500"
            >
              <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden">
                <Image
                  src="/Ashok.jpg"
                  alt="Profile"
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, 320px"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </motion.div>
          )}
        </InView>

        {/* About Heading */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-[40px] pt-8 pb-3 font-medium text-center text-gray-200"
            >
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}Me
              </span>
            </motion.h1>
          )}
        </InView>

        {/* Description */}
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromBottom}
              className="Welcome-box px-[15px] py-[8px] w-[90%] md:w-3/4 border border-[#7042f88b] opacity-90 mb-5"
            >
              <p className="Welcome-text text-[16px] text-justify leading-8 text-gray-300">
                I am a passionate Computer Science undergraduate with strong
                foundations in Java, Python, Data Structures & Algorithms, and
                modern web technologies including React, Node.js, Express.js,
                HTML, CSS, and MySQL. My journey includes actively contributing as a Core Member of
                the Viswam Innovation and Entrepreneurship Hub, where I
                organized technical workshops and collaborated on innovative
                initiatives. With a growing interest in Artificial Intelligence and Machine
                Learning, I am committed to developing impactful solutions while
                continuously expanding my technical expertise.
              </p>
            </motion.div>
          )}
        </InView>
      </div>

      {/* Bottom Quote */}
      <div className="absolute bottom-[-4rem] md:bottom-[10px] z-[20] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Shaping Tomorrow with Code and Creativity
        </div>
      </div>

      {/* Background Video */}
      <div className="hidden md:flex absolute top-0 w-full items-start justify-center z-[1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full"
          src="/encryption.webm"
        />
      </div>
    </section>
  );
};

export default About;