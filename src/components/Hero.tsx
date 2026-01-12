import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowDown, Terminal } from "lucide-react";

const techStack = ["React", "JavaScript", "Node.js", "React Native", "Tailwind"];
export function Hero() {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <section 
      ref={ref} 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-black to-neutral-900"
      onMouseMove={handleMouseMove}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          {/* Animated terminal icon */}
          <motion.div
            className="mb-12 inline-block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-20 h-20 border-2 border-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm bg-cyan-400/10">
              <Terminal size={32} className="text-cyan-400" />
            </div>
          </motion.div>

          <motion.p 
            className="text-neutral-400 text-sm uppercase tracking-[0.3em] mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Product Engineer × Problem Solver
          </motion.p>
          
          <h1 className="mb-8">
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Fatima Kingsy
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Shibani
            </motion.span>
          </h1>

          <motion.p 
            className="text-neutral-400 max-w-2xl mx-auto text-lg mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Product Engineer specializing in React, JavaScript, and Node.js. 
I build scalable, user-focused applications from frontend to backend, 
turning complex requirements into elegant solutions.
          </motion.p>

          {/* Tech stack tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.3 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(34, 211, 238, 0.2)"
                }}
                className="cursor-hover px-4 py-2 border border-cyan-400/30 text-cyan-400 text-sm uppercase tracking-wider backdrop-blur-sm"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
            className="cursor-hover px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white uppercase tracking-wider hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-hover"
          >
            <ArrowDown size={24} className="text-cyan-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-1/4 right-10 text-cyan-400/20 font-mono text-sm hidden lg:block"
        animate={{
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {"<Component />"}
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-10 text-violet-400/20 font-mono text-sm hidden lg:block"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {"const build = () => {}"}
      </motion.div>
    </section>
  );
}
