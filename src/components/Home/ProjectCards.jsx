import React from "react";
import { motion } from "framer-motion";
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, title, description, repoLink, liveLink }) => {
  return (
    <motion.div
      className="overflow-hidden p-3 cursor-pointer border
       transition-colors duration-300 ease-in-out border-transparent
       hover:bg-gradient-to-b from-slate-400/20 to-slate-40
        hover:border-white/10 rounded-xl"
      whileTap={{
        scale: 0.9,
        rotateZ: -1,
        boxShadow: "0 0 0 0",
      }}
    >
      <div className="px-3">
        <div className="lg:p-[5px] p-1 my-3 bg-slate-400/40 w-fit rounded-full">
          <img
            className="w-8 h-8 rounded-full object-cover border"
            src={image}
            alt={title}
          />
        </div>
        <div>
          <h3 className="lg:text-xl text-lg my-3 font-light text-slate-100 py-1 px-2">
            {title}
          </h3>
        </div>
        <div className="px-2 pb-3 max-w-[30rem]">
          <p className="text-gray-500 font-normal text-base">{description}</p>
        </div>
        <div className="border-t border-white/10">
          <div className="flex justify-around mt-2">
            <a
              href={repoLink}
              className="text-stone-400/50 font-normal text-sm px-2 py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Details
            </a>
            {liveLink && (
              <a
                href={liveLink}
                className="text-stone-400/50 font-normal text-sm px-2 py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCards = () => {
  const projects = [
    {
      image: "https://ik.imagekit.io/bd4oarcuc/Screenshot%202024-11-19%20203014.png?updatedAt=1732029878738",
      title: "Sales Analysis Dashboard",
      description:
        "An interactive Power BI dashboard for visualizing sales data with detailed insights and KPIs.",
      repoLink: "https://github.com/gangaprasadarge/DataAnalystProject_PBI_SQL_SalesAnalysis",
      liveLink: "https://app.powerbi.com/links/9adWUPoFe7?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare"
    },
    {
      image: "https://ik.imagekit.io/bd4oarcuc/Screenshot%202024-11-19%20202945.png?updatedAt=1732029008702",
      title: "User Behavior Tracking System",
      description:
        "A comprehensive system for tracking user behavior and interaction across the app, using SQL and Power BI.",
      repoLink: "https://github.com/gangaprasadarge/DataAnalyst_User_Behavior_Tracking_System",
      liveLink: "https://app.powerbi.com/links/9adWUPoFe7?ctid=e14e73eb-5251-4388-8d67-8f9f2e2d5a46&pbi_source=linkShare&bookmarkGuid=184add9d-268d-41e9-ad58-52e7bf3fe4de"
    },
    
   
  ];

  return (
    <div className="flex flex-col items-center gap-3 lg:gap-8 max-w-screen-lg mx-auto px-4">
      <div className="flex lg:flex-nowrap flex-wrap justify-center gap-3 lg:gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            repoLink={project.repoLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <div className="flex justify-center items-center text-center">
        <Link to="/projects" className="flex items-center text-white">
          <MdOutlineExpandMore className="w-6 h-6 animate-bounce" />
          <span className="ml-1">View More</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCards;
