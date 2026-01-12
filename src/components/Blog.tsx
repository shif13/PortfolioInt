import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring large-scale React applications with modern tools and patterns.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Mastering Node.js Performance",
    excerpt: "Deep dive into Node.js optimization techniques and how to build high-performance backend services.",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "Node.js",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
    featured: true
  },
  {
    id: 3,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies shaping the future of web development.",
    date: "Nov 10, 2024",
    readTime: "6 min read",
    category: "Web Dev",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "API Design Best Practices",
    excerpt: "How to design RESTful APIs that are intuitive, scalable, and maintainable.",
    date: "Oct 22, 2024",
    readTime: "7 min read",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    featured: false
  }
];

export function Blog() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="blog" className="relative py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/3 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="max-w-[90rem] mx-auto relative z-10">
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
            Latest Thoughts
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            From the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Blog
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Insights on web development, best practices, and the technologies 
            I'm passionate about.
          </motion.p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-hover group relative bg-neutral-900 border-2 border-neutral-800 overflow-hidden"
            >
              <motion.div
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-cyan-400/90 text-black text-xs uppercase tracking-wider font-mono">
                    {post.category}
                  </span>
                </div>
              </motion.div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-neutral-500 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-neutral-400 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-cyan-400 font-mono text-sm uppercase tracking-wider"
                  animate={{ x: hoveredId === post.id ? 10 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Read More</span>
                  <ArrowRight size={18} />
                </motion.div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-400"
                initial={{ width: 0 }}
                animate={{ width: hoveredId === post.id ? "100%" : 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.article>
          ))}
        </div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="cursor-hover group bg-neutral-900 border-2 border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-neutral-800 text-cyan-400 text-xs uppercase tracking-wider font-mono">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-neutral-500 text-xs">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-neutral-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-neutral-500 text-xs">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>

                  <motion.div
                    animate={{ x: hoveredId === post.id ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={18} className="text-cyan-400" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-hover px-10 py-4 border-2 border-cyan-400 text-cyan-400 uppercase tracking-wider hover:bg-cyan-400 hover:text-black transition-all duration-300"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}