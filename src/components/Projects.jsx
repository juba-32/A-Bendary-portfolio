import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "../assets/images/nelly.webp";
import project5 from "../assets/images/Nelly-dashboard.webp";
import project3 from "../assets/images/sarah-portfolio.webp";
import project4 from "../assets/images/youtupe-clone.webp";
import project2 from "../assets/images/walmart.webp";
import project6 from "../assets/images/lawfirm.webp";

const Projects = () => {
  const projects = [
    {
      title: "Full Stack E-commerce",
      description:
        "A full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. It provides a modern shopping experience with authentication, advanced filtering, multilingual support, dark mode, and responsive design.",

      technologies: [
        "React",
        "Redux Toolkit",
        "Material UI",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Axios",
        "i18next",
      ],

      features: [
        "JWT Authentication",
        "Shopping Cart",
        "Wishlist",
        "Product Search",
        "Advanced Filtering",
        "Dark / Light Mode",
        "Multi-language",
        "Responsive Design",
        "REST API",
        "Performance Optimized",
      ],

      image: project1,
      github: "https://github.com/juba-32/store",
      demo: "https://nelly-mu.vercel.app/",
    },
{
      title: "Admin Dashboard",
      description:
        "A complete admin dashboard for managing an e-commerce platform with analytics, authentication, products, customers, orders, offers, and responsive layouts.",

      technologies: [
        "React",
        "Redux Toolkit",
        "Material UI",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Chart.js",
        "Axios",
        "i18next",
      ],

      features: [
        "Dashboard Analytics",
        "Products Management",
        "Customers Management",
        "Orders Management",
        "Offers Management",
        "JWT Authentication",
        "Charts & Statistics",
        "Dark / Light Mode",
        "Multi-language",
        "Responsive Design",
      ],

      image: project5,
      github: "https://github.com/juba-32/nelly-admin-dashboard",
      demo: "https://nelly-admin-dashboard.vercel.app/",
    },

    {
      title: "Mobile E-commerce",
      description:
        "A responsive mobile-first e-commerce application with reusable components, global state management, API integration, and optimized performance across all devices.",

      technologies: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Material UI",
        "Axios",
      ],

      features: [
        "Responsive Design",
        "Reusable Components",
        "Redux State Management",
        "REST API",
        "Product Categories",
        "Shopping Cart",
        "Optimized Performance",
      ],

      image: project2,
      github: "https://github.com/juba-32/mobile-ecommerce/tree/main",
      demo: "https://commerceo-frontend.vercel.app/",
    },

    {
      title: "Sarah Portfolio",
      description:
        "A modern portfolio website for a Social Media Manager featuring elegant animations, multilingual support, dark mode, responsive layouts, EmailJS contact form, and WhatsApp integration.",

      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "EmailJS",
        "React Icons",
        "i18next",
      ],

      features: [
        "Responsive Design",
        "Dark / Light Mode",
        "Smooth Animations",
        "EmailJS Contact Form",
        "WhatsApp Integration",
        "Multi-language",
        "Modern UI/UX",
      ],

      image: project3,
      github: "https://github.com/juba-32/sarah-portfolio",
      demo: "https://sara-portfolio-32.vercel.app/",
    },

    
{
      title: "Al-Adala Legal Services",
      description:
        "A professional and responsive web application built for a law firm specializing in criminal defense and legal representation in Dubai and Abu Dhabi.",

      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "React Icons",
        "@emailjs/browser",
      ],

      features: [
        "Confidential Consultation Form",
        "EmailJS Form Integration",
        "Direct WhatsApp Chat Integration",
        "Strictly Confidential Handling",
        "Responsive Mobile-First Design",
        "Professional Attorney Profiles",
        "Interactive Legal Services Grid",
        "FAQ & Assurance Sections",
        "SEO Optimized",
        "High Performance Architecture",
      ],

      image: project6,
      github: "https://github.com/juba-32/law-firm-main",
      demo: "https://law-firm-main.vercel.app/",
  },
    
    {
      title: "YouTube Clone",
      description:
        "A YouTube-inspired web application that allows users to browse trending videos, search content, explore channels, and watch videos through API integration.",

      technologies: ["React", "Material UI", "React Router", "Axios"],

      features: [
        "Video Search",
        "Trending Videos",
        "Channel Pages",
        "Video Details",
        "API Integration",
        "Responsive Design",
        "Lazy Loading",
      ],

      image: project4,
      github: "https://github.com/juba-32/youtube-clone",
      demo: "https://youtube-clone-liard-eight.vercel.app/",
    },
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

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl  shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-8 mb-8">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-3">Technologies</h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-3">Key Features</h4>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 "
                        >
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary hover:text-primary transition-all"
                    >
                      <Github size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition-all"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
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
