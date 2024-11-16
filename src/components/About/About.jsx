import React from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import { ScrollParallax } from 'react-just-parallax';

const About = () => {
  return (
    <>
      <div className="text-white lg:mx-14 h-screen">
        <motion.div
          initial={{ opacity: 0, skewX: 50 }}
          animate={{ opacity: 1, skewX: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:mx-10 mx-4 pb-6 lg:pb-10 font-light text-base"
        >
          <h1 className="text-slate-400 border px-1 lg:px-3 border-slate-700 py-1 text-sm rounded-full w-fit">
            ABOUT
          </h1>
        </motion.div>

        <div className="lg:mx-10 mx-5 mt-3 flex flex-col md:flex-row gap-5 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="md:flex-1 lg:w-8/12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="-mt-8"
            >
              <h1
                className="text-3xl font-medium text-slate-300 border-white/30 upp  ercase p-4 border-b"
              >
                More about me...
              </h1>
            </motion.div>
            <div className="text-white/80 leading-7 tracking-wide mt-4 font-light">
              <p className="py-2">
                I'm a data analyst with a talent for transforming complex data into insights
                that drive meaningful decisions. Experienced with Power BI, Tableau, Excel, SQL, and Python, I
                excel in creating visualizations and reports that simplify data for actionable results.
                My technical skills, paired with a strong grasp of business objectives, enable me to
                deliver insights that support strategic decision-making.
              </p>
              <p className="py-2">
                Currently, I'm pursuing a Bachelor of Technology in Computer Science and Engineering at
                Lovely Professional University. My studies and hands-on projects, like MIS reports and user behavior
                tracking systems, have given me a solid foundation in data analytics and business intelligence.
              </p>
              <p className="py-2">
                In addition to my passion for data analytics, I am also an experienced 3D designer, working with tools like
                Unity and Blender. I use Unity for developing interactive 3D experiences and games, while Blender
                allows me to create highly detailed 3D models and animations. I enjoy exploring both the artistic and technical
                sides of 3D design and am always eager to learn new techniques to enhance my creative work.
              </p>
              <p className="py-2">
                Outside of work, I'm a fan of movies and gaming, both of which keep me inspired and fuel my
                passion for storytelling and problem-solving. I’m eager to bring my expertise in data analytics, 3D design, and
                Python programming to a collaborative team where I can help foster a data-driven culture and make an impact.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:flex-1 sticky top-0 h-96 md:h-auto mt-10 lg:w-4/12"
          >
            <ScrollParallax>
            <img
  src="/me.jpeg"
  className="rounded-lg rotate-1 hover:-rotate-1 transition-all duration-500 cursor-grab object-cover
    grayscale hover:grayscale-0 opacity-85 h-full w-full md:h-auto md:w-auto"
  alt="Profile"
/>

              <div>
                <Cards />
              </div>
            </ScrollParallax>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
