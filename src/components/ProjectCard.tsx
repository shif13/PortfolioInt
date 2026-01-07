import { motion } from "motion/react";
import { useState, useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  number: string;
  imageUrl: string;
  index: number;
}

export function ProjectCard({ title, category, number, imageUrl, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.6, 0.05, 0.01, 0.9] }}
      className="group cursor-hover relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative overflow-hidden bg-neutral-900 border-2 border-neutral-800"
        whileHover={{ 
          scale: 1.02,
          borderColor: "rgba(34, 211, 238, 0.5)"
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          />

          {/* Spotlight effect */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.15), transparent 40%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.3 }}
          />

          {/* Icons on hover */}
          <motion.div
            className="absolute top-6 right-6 flex gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -20
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 15 }}
              className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center cursor-pointer"
            >
              <Github size={20} className="text-black" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -15 }}
              className="w-10 h-10 bg-violet-400 rounded-full flex items-center justify-center cursor-pointer"
            >
              <ExternalLink size={20} className="text-black" />
            </motion.div>
          </motion.div>

          {/* Number */}
          <div className="absolute bottom-6 left-6 text-7xl font-bold text-cyan-400/20">
            {number}
          </div>
        </div>

        {/* Info section */}
        <div className="p-6 bg-neutral-900 border-t-2 border-neutral-800">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2 font-mono">
              {category}
            </p>
            <h3 className="text-white group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </h3>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mt-4"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>

      {/* Corner accent */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-violet-400 rotate-45"
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
