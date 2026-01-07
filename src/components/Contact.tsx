import { motion } from "motion/react";
import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { useState } from "react";

const socials = [
  { name: "Email", icon: Mail, handle: "fatimakingsyshibani@gmail.com", link: "mailto:hello@engineer.dev" },
  { name: "LinkedIn", icon: Linkedin, handle: "@fatimakingsyshibani", link: "https://linkedin.com" },
  { name: "GitHub", icon: Github, handle: "@shif13", link: "https://github.com" },
  { name: "Twitter", icon: Twitter, handle: "@engineer", link: "https://twitter.com" }
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState("");

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Together
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="mb-8"
          >
            Start a
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Conversation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
Whether you need a product engineer for your team or want to discuss 
a project idea, I'm open to new opportunities and collaborations.          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label className="block text-sm uppercase tracking-wider text-neutral-500 mb-2 font-mono">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  className="cursor-hover w-full px-6 py-4 bg-neutral-900 border-2 border-neutral-800 focus:border-cyan-400 outline-none transition-all duration-300 text-white"
                  whileFocus={{ scale: 1.02 }}
                  animate={{
                    borderColor: focused === "name" ? "#22d3ee" : "#262626"
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-sm uppercase tracking-wider text-neutral-500 mb-2 font-mono">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  className="cursor-hover w-full px-6 py-4 bg-neutral-900 border-2 border-neutral-800 focus:border-cyan-400 outline-none transition-all duration-300 text-white"
                  whileFocus={{ scale: 1.02 }}
                  animate={{
                    borderColor: focused === "email" ? "#22d3ee" : "#262626"
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-sm uppercase tracking-wider text-neutral-500 mb-2 font-mono">
                  Message
                </label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  rows={6}
                  className="cursor-hover w-full px-6 py-4 bg-neutral-900 border-2 border-neutral-800 focus:border-cyan-400 outline-none transition-all duration-300 resize-none text-white"
                  whileFocus={{ scale: 1.02 }}
                  animate={{
                    borderColor: focused === "message" ? "#22d3ee" : "#262626"
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-hover w-full px-8 py-5 bg-gradient-to-r from-cyan-500 to-violet-500 text-white uppercase tracking-wider hover:from-cyan-400 hover:to-violet-400 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-cyan-500/20"
              >
                <span>Send Message</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Send size={20} />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 mb-8">
              Connect With Me
            </h3>

            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="cursor-hover flex items-center gap-6 p-6 bg-neutral-900 border-2 border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-violet-400 rounded-lg flex items-center justify-center">
                    <social.icon size={24} className="text-white" />
                  </div>
                </motion.div>

                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1 font-mono">
                    {social.name}
                  </div>
                  <div className="text-lg text-neutral-300 group-hover:text-cyan-400 transition-colors">
                    {social.handle}
                  </div>
                </div>

                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                </motion.div>
              </motion.a>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border-2 border-cyan-400/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  className="w-3 h-3 bg-cyan-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm uppercase tracking-wider text-cyan-400 font-mono">
                  Open for Work
                </span>
              </div>
              <p className="text-neutral-400">
                Currently available for freelance projects and full-time opportunities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
