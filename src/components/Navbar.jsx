import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="text-yellow-500" size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="/A.Bendary-Front-End Developer.pdf"
              className="bg-primary hover:bg-primary-dark text-white px-6 flex py-2 gap-3 rounded-full font-medium transition-colors"
            >
              Resume
              <Download />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0",
        )}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-gray-600 dark:text-gray-300 hover:text-primary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
              href="/A.Bendary-Front-End Developer.pdf"
              className="bg-primary hover:bg-primary-dark text-white px-6 flex justify-center py-2 gap-3 rounded-full font-medium transition-colors"
            >
              Resume
              <Download />
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
