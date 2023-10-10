"use client";
import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { FaLocationDot, FaCalendarDays, FaC } from "react-icons/fa6";
const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2 max-w-xs lg:max-w-md leading-10">
        <li className="mb-4">
          <p className="mb-1">Python</p>
          <span className="h-2.5 bg-black block rounded-full">
            <span className="h-2.5 bg-[#ff6188] w-[95%] float-left rounded-full"></span>
          </span>
        </li>
        <li className="mb-4">
          <p className="mb-1">JavaScript</p>
          <span className="h-2.5 bg-black block rounded-full">
            <span className="h-2.5 bg-[#ff6188] w-[80%] float-left rounded-full"></span>
          </span>
        </li>
        <li className="mb-4">
          <p className="mb-1">Swift</p>
          <span className="h-2.5 bg-black block rounded-full">
            <span className="h-2.5 bg-[#ff6188] w-[70%] float-left rounded-full"></span>
          </span>
        </li>
        <li className="mb-4">
          <p className="mb-1">Java</p>
          <span className="h-2.5 bg-black block rounded-full">
            <span className="h-2.5 bg-[#ff6188] w-[50%] float-left rounded-full"></span>
          </span>
        </li>
        <li className="mb-4">
          <p className="mb-1">C++</p>
          <span className="h-2.5 bg-black block rounded-full">
            <span className="h-2.5 bg-[#ff6188] w-[30%] float-left rounded-full"></span>
          </span>
        </li>
        <li className="mb-4">
          <p className="mb-1">C#</p>
          <span className="h-2.5 bg-black block rounded-full">
            <span className="h-2.5 bg-[#ff6188] w-[30%] float-left rounded-full"></span>
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2 leading-10">
        <li>React.js</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Flask</li>
        <li>PyTorch</li>
        <li>.NET</li>
        <li>Selenium</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 leading-10">
        <li>University of Melbourne, 23'</li>
        <li>University of Waterloo, 21'</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 leading-10">
        <li className="mb-2">
          <div>Software Engineer Intern @Darkspede</div>
          <div className="flex items-center">
            <FaCalendarDays className="mr-1" />
            <p className="mr-3">11/22 - 02/23</p>
            <FaLocationDot className="mr-1" />
            <p>Melbourne, Australia</p>
          </div>
          <div className="text-[#ff6188]">Full-stack Development</div>
          <div>Tech stacks: React.js, C#, .NET, MongoDB</div>
        </li>
        <li>
          <div>Research Intern @Shanghai AI Lab</div>
          <div className="flex items-center">
            <FaCalendarDays className="mr-1" />
            <div className="mr-3">03/22 - 06/22</div>
            <FaLocationDot className="mr-1" />
            <div>Shanghai, China</div>
          </div>
          <div>
            <span className="text-[#ff6188]">Multi-modal generation</span>: 3D
            Dance Generation
          </div>
          <div>Tech stacks: Python, PyTorch, Shell</div>
        </li>
      </ul>
    ),
  },
];

export function AboutMe() {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div
      id="about-me"
      className="py-4 px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-72 mb-8"
    >
      <h3 className="text-3xl py-1 mb-3">About Me</h3>
      <div className="leading-10 text-gray-600 text-large">
        <p>
          Hi there👋, I am Sherry and my Chinese name is 王彦懿(Yanyi Wang). I'm
          a full-stack developer based in Waterloo, Canada. I'm passionate about
          developing AI-powered productivity tools (macOS Apps, CLI tools, AE
          plugins & scripts) related to video editing and motion graphics design
          workflow.
        </p>
        <div className="flex flex-row justify-start mt-8 text-sm lg:text-lg">
          <div className="lg:mr-6">
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
          </div>
          <div className="lg:mr-6">
            {" "}
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
          </div>
          <div className="lg:mr-6">
            {" "}
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="lg:mr-6">
            {" "}
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
        </div>
        <div className="mt-6 lg:mt-8 text-sm lg:text-lg">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
