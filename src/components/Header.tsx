import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-lg py-4 shadow-lg shadow-cyan-500/10" : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 cursor-hover"
          >
            <Code2 className="text-cyan-400" size={24} />
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-wider">
            {["#work", "#about", "#contact"].map((link, i) => (
              <motion.button
                key={link}
                onClick={() => scrollToSection(link)}
                className="cursor-hover relative group text-neutral-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ color: "#22d3ee" }}
              >
                <span className="relative z-10">{link.slice(1)}</span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden cursor-hover text-cyan-400"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed top-0 right-0 w-full h-screen bg-black z-40 md:hidden flex items-center justify-center"
      >
        <div className="flex flex-col gap-8 text-center">
          {["#work", "#about", "#contact"].map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-3xl uppercase tracking-wider text-neutral-400 hover:text-cyan-400"
              whileHover={{ scale: 1.1, x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
