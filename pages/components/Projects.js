"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Final Cut Pro Auto Captions",
    description: (
      <div id="fcpx-auto-captions">
        <p className="py-2 text-gray-800">
          Auto Captions Powered by OpenAI's Whisper
        </p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/fcpx-auto-captions"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
          <a
            href="https://youtu.be/n1qMG87aJcw?si=4St-VxCt84kq5VX5"
            target="_blank"
          >
            <p className="mr-4">YouTube</p>
          </a>
          <a
            href="https://www.bilibili.com/video/BV1Fh4y1V7wE/?p=2&share_source=copy_web&vd_source=60b4186801a9e05d3b15f34ce7992603"
            target="_blank"
          >
            <p>Bilibili</p>
          </a>
        </div>

        <p className="text-gray-600 py-2">
          Tech Stacks <span className="text-[#ff6188]"> • Swift • C++ </span>
        </p>
      </div>
    ),
    image: "/images/projects/1.png",
    tag: ["All", "macOS"],
    gitUrl: "https://github.com/shaishaicookie/fcpx-auto-captions",
    previewUrl: "https://youtu.be/n1qMG87aJcw?si=4St-VxCt84kq5VX5",
  },
  {
    id: 2,
    title: "Srt2Subtitles CLI Tool",
    description: (
      <div>
        <p className="py-2 text-gray-800">srt to fcpxml format converter</p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/srt2subtitles-cli"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
          <a href="https://www.npmjs.com/package/srt2subtitles" target="_blank">
            <p>npm</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks <span className="text-[#ff6188]"> • Node.js</span>
        </p>
      </div>
    ),
    image: "/images/projects/2.gif",
    tag: ["All", "macOS"],
    gitUrl: "https://github.com/shaishaicookie/srt2subtitles-cli",
    previewUrl: "https://www.npmjs.com/package/srt2subtitles",
  },
  {
    id: 3,
    title: "Whisper Auto Captions Website",
    description: (
      <div>
        <p className="py-2 text-gray-800">
          Website for introducing & downloading the app
        </p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/whisper-auto-captions-website"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
          <a href="https://whisperautocaptions.com" target="_blank">
            <p>Live Website</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks <span className="text-[#ff6188]"> • React.js</span>
        </p>
      </div>
    ),
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaishaicookie/whisper-auto-captions-website",
    previewUrl: "https://whisperautocaptions.com",
  },
  {
    id: 4,
    title: "Android Geothermal Calculator",
    description: (
      <div>
        <p className="py-2 text-gray-800">COMP90082 Capstone Project</p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.foureee.an_redback&pli=1"
            target="_blank"
          >
            <p className="mr-4">Google Play</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks <span className="text-[#ff6188]"> • Java • XML</span>
        </p>
      </div>
    ),
    image: "/images/projects/4.png",
    tag: ["All", "Android"],
    gitUrl:
      "https://play.google.com/store/apps/details?id=com.foureee.an_redback&pli=1",
    previewUrl: "",
  },
  {
    id: 5,
    title: "Twitter Rumour Analysis",
    description: (
      <div>
        <p className="py-2 text-gray-800">
          COMP90042 Natural Language Processing Project
        </p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/Twitter-Rumour-Analysis"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>

          <a href="/nlp.pdf" target="_blank">
            <p>Report</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks <span className="text-[#ff6188]"> • PyTorch </span>
        </p>
      </div>
    ),
    image: "/images/projects/5.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/shaishaicookie/Twitter-Rumour-Analysis",
    previewUrl: "/nlp.pdf",
  },
  {
    id: 6,
    title: "Twitter Sentiment Analysis",
    description: (
      <div>
        <p className="py-2 text-gray-800">COMP90049 Machine Learning Project</p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/Twitter-Sentiment-Analysis"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks{" "}
          <span className="text-[#ff6188]"> • scikit-learn • pandas</span>
        </p>
      </div>
    ),
    image: "/images/projects/6.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/shaishaicookie/Twitter-Sentiment-Analysis",
    previewUrl: "",
  },
  {
    id: 7,
    title: "Coronary Heart Disease Risk Analysis",
    description: (
      <div>
        <p className="py-2 text-gray-800">
          STAT 331 Applied Linear Models Project
        </p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/Coronary-Heart-Disease-Risk-Score-Analysis"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
          <a href="/STAT331_Final_Project.pdf" target="_blank">
            <p>Report</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks <span className="text-[#ff6188]"> • R</span>
        </p>
      </div>
    ),
    image: "/images/projects/7.png",
    tag: ["All", "ML"],
    gitUrl:
      "https://github.com/shaishaicookie/Coronary-Heart-Disease-Risk-Score-Analysis",
    previewUrl: "/STAT331_Final_Project.pdf",
  },
  {
    id: 8,
    title: "Douban Web Spider & Reproduction",
    description: (
      <div>
        <p className="py-2 text-gray-800">Douban post data saver</p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/douban-posts"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
          <a
            href="https://sensational-twilight-8f9d91.netlify.app/"
            target="_blank"
          >
            <p>Reproduction Live</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks <span className="text-[#ff6188]"> • Selenium </span>
        </p>
      </div>
    ),
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaishaicookie/douban-posts",
    previewUrl: "https://sensational-twilight-8f9d91.netlify.app/",
  },
  {
    id: 9,
    title: "Douban Android Automation",
    description: (
      <div>
        <p className="py-2 text-gray-800">
          Android Automation for mobile-only feature
        </p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/Douban-Web-Scraping"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
          <a href="/mobile-automation-demo-log.mp4" target="_blank">
            <p>DEMO</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks{" "}
          <span className="text-[#ff6188]"> • Appium • Python </span>
        </p>
      </div>
    ),
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaishaicookie/Douban-Web-Scraping",
    previewUrl: "/mobile-automation-demo-log.mp4",
  },
  {
    id: 10,
    title: "UnKeying Website for Motion Designer",
    description: (
      <div>
        <p className="py-2 text-gray-800">
          Removed Image background with AI Model
        </p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a href="https://github.com/shaishaicookie/rmbg" target="_blank">
            <p>GitHub</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks{" "}
          <span className="text-[#ff6188]"> • React.js • Flask </span>
        </p>
      </div>
    ),
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaishaicookie/rmbg",
    previewUrl: "",
  },
  {
    id: 11,
    title: "Android Chat App",
    description: (
      <div>
        <p className="py-2 text-gray-800">
          COMP90018 Mobile Computing Systems Project
        </p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://youtu.be/dapPLJQt7HE?si=DJdU4OLdLQncIItR"
            target="_blank"
          >
            <p className="mr-4">YouTube</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks{" "}
          <span className="text-[#ff6188]"> • Java • XML • Firebase</span>
        </p>
      </div>
    ),
    image: "/images/projects/11.png",
    tag: ["All", "Android"],
    gitUrl: "",
    previewUrl: "https://youtu.be/dapPLJQt7HE?si=DJdU4OLdLQncIItR",
  },
  {
    id: 12,
    title: "My Personal Site",
    description: (
      <div>
        <p className="py-2 text-gray-800">shaishaicookie.github.io</p>
        <div className="flex justify-center text-center text-[#ff6188] underline py-2">
          <a
            href="https://github.com/shaishaicookie/shaishaicookie.github.io"
            target="_blank"
          >
            <p className="mr-4">GitHub</p>
          </a>
          <a href="https://shaishaicookie.github.io/" target="_blank">
            <p className="mr-4">Live Site</p>
          </a>
        </div>
        <p className="text-gray-600 py-2">
          Tech Stacks{" "}
          <span className="text-[#ff6188]"> • Next.js • Tailwind CSS</span>
        </p>
      </div>
    ),
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shaishaicookie/shaishaicookie.github.io",
    previewUrl: "https://shaishaicookie.github.io/",
  },
];

export function Projects() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div
      className="py-4 px-10 md:px-16 lg:px-20 xl:px-32 2xl:px-72 mb-8"
      id="projects"
    >
      <h3 className="text-3xl py-1 mb-3">Projects</h3>
      <div className="text-white flex flex-row justify-center items-center gap-1.5 md:gap-4 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="macOS"
          isSelected={tag === "macOS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Android"
          isSelected={tag === "Android"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
