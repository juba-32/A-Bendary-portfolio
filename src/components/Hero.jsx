import { motion } from "framer-motion";
import bendaryImage from "../../dist/assets/images/bendary.avif";

import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiNpm,
  SiTailwindcss,
} from "react-icons/si";

import { SiMui } from "react-icons/si";

const floatingIcons = [
  { Icon: SiReact, top: "8%", left: "55%", delay: 0 },
  { Icon: SiNextdotjs, top: "15%", left: "85%", delay: 0.5 },
  { Icon: SiHtml5, top: "70%", left: "82%", delay: 1 },
  { Icon: SiJavascript, top: "82%", left: "60%", delay: 1.5 },
  { Icon: SiTypescript, top: "10%", left: "10%", delay: 2 },
  { Icon: SiGit, top: "65%", left: "5%", delay: 2.5 },
  { Icon: SiNpm, top: "40%", left: "88%", delay: 3 },
  { Icon: SiMui, top: "78%", left: "20%", delay: 3.5 },
  { Icon: SiTailwindcss, top: "30%", left: "2%", delay: 4 },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 pt-24    md:pt-20"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, top, left, delay }, index) => (
          <motion.div
            key={index}
            className="
              absolute
              w-14
              h-14
              md:w-16
              md:h-16
              rounded-2xl
              backdrop-blur-xl
              bg-white/70
              dark:bg-zinc-900/70
              border
              border-zinc-200
              dark:border-zinc-800
              shadow-xl
              flex
              items-center
              justify-center
            "
            style={{ top, left }}
            animate={{
              y: [0, -20, 0],
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay,
            }}
          >
            <Icon size={28} className="text-zinc-700 dark:text-zinc-200" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-primary/10
              text-primary
              font-semibold
              mb-6
            "
          >
            Frontend Developer
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Ahmed <span className="text-primary">Bendary</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mb-10">
            Building fast, scalable, and modern web applications with React,
            Next.js, TypeScript, and Tailwind CSS while focusing on performance,
            accessibility, and user experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="
                bg-primary
                text-white
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-8
                py-4
                rounded-full
                font-semibold
                border
                border-zinc-300
                dark:border-zinc-700
                hover:border-primary
                dark:hover:border-primary
                transition
              "
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

            <div
              className="
                relative
                w-72
                h-72
                md:w-[430px]
                md:h-[430px]
                rounded-full
                overflow-hidden
                border-4
                border-white
                dark:border-zinc-800
                shadow-2xl
              "
            >
              <img
                src={bendaryImage}
                alt="Ahmed Bendary"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
