import { motion } from "motion/react";
import { Download, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      setIsComplete(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);

      // In a real scenario, trigger actual download
      const link = document.createElement('a');
      link.href = 'public\Fatima Kingsy Shibani.docx';
      link.download = 'Your_Name_Resume.pdf';
      link.click();
    }, 2000);
  };

  return (
    <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-black to-neutral-950 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 border-2 border-neutral-800 p-12 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Icon Side */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-violet-400 rounded-lg flex items-center justify-center">
                <FileText size={48} className="text-white" />
              </div>
            </motion.div>

            {/* Content Side */}
            <div className="flex-1 text-center md:text-left">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl mb-2 text-white"
              >
                Download My Resume
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-neutral-400"
              >
                Get a comprehensive overview of my experience, skills, and achievements
              </motion.p>
            </div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading || isComplete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-hover relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 text-white uppercase tracking-wider font-semibold overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />

              <span className="relative z-10 flex items-center gap-3">
                {isComplete ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Downloaded!</span>
                  </>
                ) : isDownloading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Download size={20} />
                    </motion.div>
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    <span>Download CV</span>
                  </>
                )}
              </span>

              {/* Progress Bar */}
              {isDownloading && (
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                />
              )}
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t-2 border-neutral-800"
          >
            {[
              { label: "Years Experience", value: "2.5+" },
              { label: "Projects Completed", value: "10+" },
              { label: "Technologies", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-neutral-500 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-6 text-neutral-500 text-sm"
        >
          <p>PDF format • Updated January 2026 • 2 pages</p>
        </motion.div>
      </div>
    </section>
  );
}