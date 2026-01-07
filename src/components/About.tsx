import { motion, useScroll, useTransform } from "motion/react";
import { Code2, Zap, Rocket, Award } from "lucide-react";
import { useRef } from "react";

const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "TypeScript",
  "React Native",
  "Next.js",
  "Figma",
  "Tailwind CSS",
  "Redux/Zustand",
  "REST APIs",
  "GraphQL",
  "Git & GitHub",
  "Responsive Design"
];

const qualities = [
  { icon: Code2, title: "Clean Code", color: "from-cyan-400 to-blue-500" },
  { icon: Zap, title: "Fast Performance", color: "from-yellow-400 to-orange-500" },
  { icon: Rocket, title: "Modern Stack", color: "from-violet-400 to-purple-500" },
  { icon: Award, title: "Best Practices", color: "from-green-400 to-emerald-500" }
];

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden"
    >
      {/* Floating background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.p>

          <h2 className="mb-8">
            Frontend
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Engineer
            </span>
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-neutral-300 text-lg"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a frontend engineer with a passion for creating exceptional 
              digital experiences. With expertise in React, JavaScript, and modern 
              web technologies, I transform ideas into performant, scalable applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My approach combines technical excellence with user-centric design. 
              Whether it's building responsive web apps with React or crafting native 
              mobile experiences with React Native, I ensure every line of code serves 
              a purpose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I believe in writing clean, maintainable code and staying updated with 
              the latest frontend trends. My work speaks through intuitive interfaces, 
              smooth animations, and seamless user journeys.
            </motion.p>
          </motion.div>

          {/* Right - Qualities grid */}
          <div className="grid grid-cols-2 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="cursor-hover p-8 bg-neutral-900 border-2 border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${quality.color} flex items-center justify-center`}>
                    <quality.icon size={24} className="text-white" />
                  </div>
                </motion.div>
                <h3 className="text-lg text-neutral-300 group-hover:text-cyan-400 transition-colors">
                  {quality.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16 border-t-2 border-neutral-800"
        >
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Tech Stack
            </span>
          </motion.h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  background: "linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(139, 92, 246, 0.2))"
                }}
                className="cursor-hover px-6 py-3 bg-neutral-900 text-neutral-300 border-2 border-neutral-800 hover:border-cyan-400 uppercase tracking-wider text-sm transition-all duration-300 font-mono"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >
          {[
            { number: "50+", label: "Projects" },
            { number: "15+", label: "Clients" },
            { number: "5", label: "Years Exp" },
            { number: "100%", label: "Dedicated" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.1 }}
              className="cursor-hover text-center p-6 bg-neutral-900/50 backdrop-blur-sm border-2 border-neutral-800 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-bold">
                {stat.number}
              </div>
              <div className="text-sm text-neutral-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
