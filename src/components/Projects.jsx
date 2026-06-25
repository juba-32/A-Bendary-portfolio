import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "../assets/images/nelly.webp";
import project2 from "../assets/images/walmart.webp";
import project3 from "../assets/images/sarah-portfolio.webp";
import project4 from "../assets/images/youtupe-clone.webp";

const Projects = () => {
  const projects = [
    {
      title: "Full Stack E-commerce App",
      description:
        "A high-performance e-commerce platform with real-time inventory, secure checkout, and a sleek user dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Redux", "18n", "JWT", "MUI"],
      image: project1,
      github: "https://github.com/juba-32/store",
      demo: "https://nelly-mu.vercel.app/",
    },
    {
      title: "Mobile E-commerce",
      description:
        "AI-powered tool for generating marketing copy, social media posts, and blog outlines with ease.",
      tags: ["React.js", "Redux Toolkit", "TypeScript", "Axios"],
      image: project2,
      github: "https://github.com/juba-32/mobile-ecommerce/tree/main",
      demo: "https://commerceo-frontend.vercel.app/",
    },
    {
      title: "Sarah Portfolio",
      description:
        "A professional portfolio for a Social Media Manager showcasing services, achievements, and client-focused solutions with modern UI/UX and responsive design.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "next-intl",
      ],
      image: project3,
      github: "https://github.com/juba-32/sarah-portfolio",
      demo: "https://sara-portfolio-32.vercel.app/",
    },
    {
      title: "Youtube Clone",
      description:
        "Clean web interface for downloading high-quality videos from various social media platforms.",
      tags: ["React", "React Router", "MUI", "Axios"],
      image: project4,
      github: "https://github.com/juba-32/youtube-clone",
      demo: "https://youtube-clone-liard-eight.vercel.app/",
    },
    // {
    //   title: "Admin Dashboard",
    //   description:
    //     "A high-conversion landing page for a boutique law firm featuring smooth scroll animations.",
    //   tags: ["React.js", "Node.js", "MongoDB", "MUI", "JWT"],
    //   image: project5,
    //   github: "https://github.com/juba-32/nelly-admin-dashboard",
    //   demo: "https://nelly-admin-dashboard.vercel.app/",
    // },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that demonstrate my skills and passion for
            building high-quality digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all h-full flex flex-col"
            >
              <div className="h-auto  flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 "></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-content group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/juba-32?tab=repositories"
            className="inline-flex items-center gap-2 font-bold text-primary group"
          >
            View all on GitHub
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
