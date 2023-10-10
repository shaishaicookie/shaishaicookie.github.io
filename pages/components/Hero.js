"use client";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-20 px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-72">
      <img
        src="../sherry-wang.jpeg"
        className="w-60 h-60 relative mx-auto rounded-full p-8 mt-10"
      />
      <div className="text-center">
        <h1 className="leading-relaxed 4rem text-black mb-4 text-3xl md:text-5xl leading-10 md:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#ff6188]">
            Hello, I&apos;m Sherry
          </span>
          <br></br>
          <TypeAnimation
            sequence={["Software Developer", 1500, "Motion Designer", 1500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-md text-gray-800 leading-8 pb-2">
          I build for interests.
        </p>
        <p className="text-md text-gray-600 leading-10 max-w-lg mx-auto">
          I'm passionate about developing AI-powered productivity tools{" "}
          <br></br> (macOS Apps, CLI tools, AE plugins & scripts) <br></br>{" "}
          related to video editing and motion graphics design workflow.{" "}
        </p>
      </div>
      <div className="text-4xl flex justify-center gap-8 text-[#ff6188] py-10">
        <a href="https://github.com/shaishaicookie" target="_blank">
          <AiFillGithub className="hover:text-black" />
        </a>
        <a href="mailto:sherry.wang@uwaterloo.ca">
          <FaEnvelope className="hover:text-black" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZbyL0jXO6qYfjioJ6JxCFQ"
          target="_blank"
        >
          <AiFillYoutube className="hover:text-black" />
        </a>
        <a href="https://www.linkedin.com/in/y2683wan" target="_blank">
          <AiFillLinkedin className="hover:text-black" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
