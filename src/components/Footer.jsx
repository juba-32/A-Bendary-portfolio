import { motion } from "framer-motion";
import { Github, Linkedin, } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-900 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="flex items-center gap-5 text-2xl font-bold "
            >
              <motion.div
                className="text-primary"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                A
              </motion.div>
              Bendary
            </a>
          </div>
          <p className="text-gray-500 mt-2 text-sm">
            © 2024 Ahmed Bendary. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/juba-32"
            className="p-3 rounded-full hover:bg-primary/20 hover:text-primary transition-all"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-bendary-065632228/"
            className="p-3 rounded-full hover:bg-primary/20 hover:text-primary transition-all"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <div className="text-sm text-gray-500 flex flex-col items-end">
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
