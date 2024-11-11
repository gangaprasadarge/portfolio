import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ScrollParallax } from "react-just-parallax";
import UserGreeting from "../../firebase/UserGreet";

const Hero = () => {
  return (
    <>
      <div className="relative lg:w-[88%] lg:mx-auto lg:mt-1 items-center justify-center">
        {/* Background Image (Visible on Large Screens) */}
        <motion.img
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
          className="w-full object-cover hidden lg:block object-right"
          alt="Tailwind CSS background"
        />

        {/* Background Image (Visible on Small Screens) */}
        <motion.img
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
          className="w-full object-cover mt-10 lg:mt-28 lg:hidden object-right"
          alt="Tailwind CSS background"
        />

        {/* Content Overlay */}
        <motion.div
          className="absolute inset-0 p-28 lg:p-1 flex flex-col justify-center text-white px-4 lg:px-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* User Greeting Component */}

          {/* Text Content */}
          <div className="p-10 lg:p-8 rounded-lg">
            <ScrollParallax speed={3}>
              <div className="flex gap-2 justify-between w-full items-start ">
                <motion.h1
                  className="text-3xl md:text-6xl mb-2 font-bold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Arge Gangaprasad
                </motion.h1>
              </div>
              <motion.p
                className="text-base md:text-lg pb-1 lg:pb-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Hello World, I'm Arge Gangaprasad
              </motion.p>
              <motion.p
                className="text-sm md:text-base pb-1 lg:pb-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Data analyst with a focus on actionable insights.
              </motion.p>
              <motion.p
                className="text-sm md:text-base pb-1 lg:pb-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                I specialize in data visualization and reporting, primarily using SQL, Power BI, and Tableau.
              </motion.p>
            </ScrollParallax>
          </div>

          {/* Call to Action Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-8 mt-4 lg:mt-8">
            <motion.button
              className="border border-slate-900 hover:border-white/50 transition-all duration-200 hover:scale-95
              px-4 py-1 rounded-lg text-base font-light mb-4 lg:mb-0 lg:mr-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              Contact Me
            </motion.button>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <a
                href="https://github.com/gangaprasadarge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:scale-95"
              >
                <FaGithub className="text-2xl hover:text-gray-400 transition-colors duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/arge-gangaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:scale-95"
              >
                <FaLinkedin className="text-2xl hover:text-gray-400 transition-colors duration-300" />
              </a>
              <a
                href="https://twitter.com/ArgeGangaprasad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:scale-95"
              >
                <FaTwitter className="text-2xl hover:text-gray-400 transition-colors duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="">
        <UserGreeting />
      </div>
    </>
  );
};

export default Hero;
