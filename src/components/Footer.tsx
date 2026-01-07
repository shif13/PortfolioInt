import { motion } from "motion/react";
import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-12 bg-black border-t border-neutral-900">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-neutral-500 text-sm flex items-center gap-2"
          >
            <span>© 2026 — Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-cyan-400 fill-cyan-400" />
            </motion.div>
            <span>and</span>
            <Code2 size={16} className="text-violet-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-8 text-sm text-neutral-500"
          >
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ color: "#22d3ee" }}
              transition={{ duration: 0.2 }}
              className="uppercase tracking-wider cursor-hover"
            >
              Back to Top ↑
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
