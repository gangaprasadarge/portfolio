import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import BackgroundGrid from "../utils/BgGrid";

const projects = [
  {
    image: "https://ik.imagekit.io/bd4oarcuc/Screenshot%202024-11-19%20203014.png?updatedAt=1732029878738",
    title: "Data Analyst Project - PBI & SQL Sales Analysis",
    description:
      "A data analysis project using Power BI and SQL to analyze sales data and generate insights for business decision-making.",
    link: "https://github.com/gangaprasadarge/DataAnalystProject_PBI_SQL_SalesAnalysis",
    techStack: ["Power BI", "SQL"],
    live: "https://github.com/gangaprasadarge/DataAnalystProject_PBI_SQL_SalesAnalysis",
  },
  {
    image: "https://ik.imagekit.io/bd4oarcuc/Screenshot%202024-11-19%20202945.png?updatedAt=1732029008702",
    title: "User Behavior Tracking System",
    description:
      "A system designed to track and analyze user behaviors within an app to improve engagement and retention.",
    link: "https://github.com/gangaprasadarge/DataAnalyst_User_Behavior_Tracking_System",
    techStack: ["SQL", "Power BI"],
    live: "https://github.com/gangaprasadarge/DataAnalyst_User_Behavior_Tracking_System",
  },
  {
    image: "https://ik.imagekit.io/bd4oarcuc/Screenshot%202024-11-19%20210104.png?updatedAt=1732030312872",
    title: "Zomato Landing Page",
    description:
      "A responsive landing page for a restaurant platform using HTML, CSS, and JavaScript.",
    link: "https://github.com/gangaprasadarge/zomato-landing-page",
    techStack: ["HTML", "CSS", "JavaScript"],
    live: "https://github.com/gangaprasadarge/zomato-landing-page",
  },
  {
    image: "https://ik.imagekit.io/bd4oarcuc/Screenshot%202024-11-19%20203927.png?updatedAt=1732029878951",
    title: "IPL Data Analysis",
    description:
      "Analysis of Indian Premier League data to uncover trends, player statistics, and team performance.",
    link: "https://github.com/gangaprasadarge/DataAnalystProject_IPL_DataAnalysis",
    techStack: [  "Data Visualization"],
    live: "https://github.com/gangaprasadarge/DataAnalystProject_IPL_DataAnalysis",
  },
];

const Project = () => {
  return (
    <>
      <BackgroundGrid />
      <div className="text-white lg:mx-14 py-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="-mt-8"
        >
          <h1
            className="text-3xl font-medium font-mono mx-6
         text-slate-300 border-white uppercase p-4"
          >
            My Awesome Projects
          </h1>
          <div>
            <p className="text-white/80 leading-7 tracking-wide w-[60%] mx-10 mt-4 font-light">
              Dive into some of the cool projects I've been working on. Click
              the "View Project" button to explore them on GitHub.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, skewX: 50 }}
          animate={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-10 pb-10 font-light text-base"
        >
          <h1 className="text-slate-400 mt-8 border px-3 border-slate-700 py-1 text-sm rounded-full w-fit">
            Featured Projects
          </h1>
        </motion.div>
        <div className="mx-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
