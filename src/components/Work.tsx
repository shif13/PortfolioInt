import { motion, useScroll, useTransform } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "ALM to qTest Migration",
    category: "React × REST APIs",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 2,
    number: "02",
    title: "FindHire Portal",
    category: "React × Node.js",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
  },
  {
    id: 3,
    number: "03",
    title: "E-Commerce Platform",
    category: "React × Node.js",
    imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
  },
  {
    id: 4,
    number: "04",
    title: "Property Listing App",
    category: "React × APIs",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
  },
  {
    id: 5,
    number: "05",
    title: "Event Booking App",
    category: "React Native",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
  }
];

export function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="work" ref={containerRef} className="relative py-32 md:py-40 px-6 md:px-12 bg-black">
      {/* Floating background element */}
      <motion.div
        style={{ y }}
        className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="flex items-center gap-6 mb-8"
          >
            <motion.div 
              className="h-1 bg-gradient-to-r from-cyan-400 to-violet-400"
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
              Featured Projects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            >
              Recent
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="text-neutral-400 text-lg"
            >
              A showcase of web and mobile applications built with cutting-edge 
              technologies. Each project demonstrates technical excellence and 
              attention to user experience.
            </motion.p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              number={project.number}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-hover px-10 py-4 border-2 border-cyan-400 text-cyan-400 uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
