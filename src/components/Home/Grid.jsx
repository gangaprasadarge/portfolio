import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-12 text-zinc-50">
      <h1 className="text-center text-2xl font-bold -mt-10 py-20">
        Contact Me
      </h1>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 relative row-span-2 md:col-span-6 select-none bg-black overflow-hidden">
    <img
      src="/texture.png"
      alt=""
      className="absolute top-20 w-full h-full opacity-40 blur-3xl scale-125 skew-x-12 -rotate-12"
    />
    <div className="z-[3] backdrop-blur-2xl">
      <img
        src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=Arge"
        alt="avatar"
        className="mb-4 w-14 h-14 rounded-full"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hey there! 👋 I'm Arge Gangaprasad,
        <span className="text-zinc-400">
          <br />a data analyst who loves turning insights into impactful stories.
        </span>
      </h1>
      <a
        href="mailto:argegangaprasad@gmail.com"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Drop me a line <FiArrowRight />
      </a>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    <SocialBlock
      link="https://www.linkedin.com/in/arge-gangaprasad/"
      icon={<BsLinkedin />}
      bg="text-blue-500"
      ariaLabel="LinkedIn"
    />
    <SocialBlock
      link="https://github.com/gangaprasadarge"
      icon={<SiGithub />}
      bg="text-white"
      ariaLabel="GitHub"
    />
    <SocialBlock
      link="mailto:argegangaprasad@gmail.com"
      icon={<MdOutlineAlternateEmail />}
      bg="text-orange-500"
      ariaLabel="Email"
    />
    <SocialBlock
      link="https://x.com/ArgeGangaprasad"
      icon={<FaXTwitter />}
      bg="text-white"
      ariaLabel="Twitter"
    />
  </>
);

const SocialBlock = ({ link, icon, bg, ariaLabel }) => (
  <Block
    whileHover={{ rotate: "2.5deg", scale: 1.1 }}
    className="relative overflow-hidden group cursor-pointer md:col-span-3"
  >
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`grid h-full place-content-center text-3xl ${bg}`}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">Hyderabad, India</p>
  </Block>
);

const EmailListBlock = () => (
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
      />
      <button
        type="submit"
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Developed by Arge Gangaprasad
        <a
          target="_blank"
          href="https://github.com/gangaprasadarge"
          className="text-red-300 hover:underline ml-2"
        >
          @gangaprasadarge
        </a>
      </p>
    </footer>
  );
};
