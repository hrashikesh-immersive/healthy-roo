import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogThumbnail1 from "@/assets/blog-thumbnail-1.png";
import blogThumbnail2 from "@/assets/blog-thumbnail-2.png";

const postsData = [
  {
    image: blogThumbnail1,
    date: "Feb 18, 2026",
    title: "Emerging women leader is helping curb non-communicable...",
  },
  {
    image: blogThumbnail2,
    date: "Feb 18, 2026",
    title: "Emerging women leader is helping curb non-communicable...",
  },
  {
    image: blogThumbnail1, // Repeated from the first image identically in screenshot
    date: "Feb 18, 2026",
    title: "Emerging women leader is helping curb non-communicable...",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } as any,
  },
};

const MotionLink = motion(Link);

const BlogSection = () => {
  return (
    <section id="blog" className="relative overflow-hidden bg-white">
      {/* Top half background split */}
      <div className="absolute top-0 left-0 w-full h-[420px] lg:h-[520px] bg-[#F4F7F6] z-0" />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20 lg:py-28 max-w-[1240px]">
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#EE1D26] font-black text-lg mb-4 block tracking-wide uppercase">
            Recent News
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-black text-[#111] leading-[1.05] tracking-tight max-w-[900px]">
            Check out everything interesting<br className="hidden sm:block" />
            and useful from our blog
          </h2>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {postsData.map((post, i) => (
            <MotionLink 
              key={i} 
              to="#" 
              variants={cardVariants}
              className="group block"
            >
              {/* Card Image */}
              <div className="w-full h-auto aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl border-4 border-white transition-all group-hover:scale-[1.02]">
                <img 
                  src={post.image} 
                  alt="Blog thumbnail" 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Card Content */}
              <div className="px-2">
                <p className="text-[#888] text-base mb-4 font-bold tracking-wide">
                  {post.date}
                </p>
                <h3 className="text-[22px] lg:text-[24px] font-black text-[#111] leading-[1.2] mb-6 group-hover:text-[#EE1D26] transition-colors pr-2">
                  {post.title}
                </h3>
                <span className="text-[#EE1D26] text-lg font-black flex items-center gap-2 transition-transform group-hover:translate-x-2">
                  Read More <ArrowRight className="w-5 h-5 stroke-[3]" />
                </span>
              </div>
            </MotionLink>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
