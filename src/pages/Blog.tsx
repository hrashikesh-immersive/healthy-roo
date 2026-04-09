import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import blogThumbnail1 from "@/assets/blog-thumbnail-1.png";
import blogThumbnail2 from "@/assets/blog-thumbnail-2.png";

export const blogPosts = [
  {
    id: "emerging-women-leaders",
    image: blogThumbnail1,
    date: "Feb 18, 2026",
    author: "Dr. Sarah Chen",
    readTime: "5 min read",
    title: "Emerging women leader is helping curb non-communicable diseases in schools",
    excerpt: "Exploring how female leadership in healthcare is driving innovative screening programs across Australian educational institutions.",
    content: `
      <p>Research consistently shows that female leadership in healthcare leads to more empathetic, patient-centered care. At HealthyRoo, we are witnessing a transformative shift as women lead the charge in combating non-communicable diseases (NCDs) through proactive school health programs.</p>
      
      <h3>The Rise of NCDs in Schools</h3>
      <p>Non-communicable diseases, such as childhood obesity, early-onset diabetes, and respiratory issues, are becoming increasingly prevalent. Our recent data across Western Sydney schools indicates that early detection is the only sustainable way to manage these conditions before they impact academic performance.</p>
      
      <p>By integrating AI-powered screening tools, our teams can identify risk factors with surgical precision. But behind the technology are the leaders who design the interventions.</p>
      
      <h3>Leading with Impact</h3>
      <p>Our program directors have focused on "The Holistic Circle"—an engagement model that connects the school nurse, the parent, and the student in a continuous feedback loop. This model, championed by our head of strategy Elena Vance, has seen a 30% increase in parental follow-through on health recommendations.</p>
    `
  },
  {
    id: "ai-in-predictive-health",
    image: blogThumbnail2,
    date: "Feb 12, 2026",
    author: "Marcus Thorne",
    readTime: "7 min read",
    title: "The Role of AI in Predictive Student Health Analytics",
    excerpt: "How machine learning is helping us predict health trends before they become clinical issues for students and families.",
    content: `
      <p>In the digital age, data is the most valuable asset in preventive medicine. HealthyRoo's School Platform is at the forefront of this revolution, using AI to turn raw screening numbers into actionable insights.</p>
      
      <h3>Beyond the Spreadsheet</h3>
      <p>Traditional health cards are static. They tell you what happened, not what <i>might</i> happen. Our predictive engine analyzes trends in BMI, vision acuity, and dental health across school populations to identify clusters of concern.</p>
      
      <p>For instance, identifying a trend of declining vision in a specific grade level allowed one of our partner schools to adjust classroom lighting and screen-time policies, resulting in improved focus and reduced eye strain reports.</p>
    `
  },
  {
    id: "holistic-wellness-ecosystem",
    image: blogThumbnail1,
    date: "Feb 05, 2026",
    author: "Smit Tanksale",
    readTime: "4 min read",
    title: "Building a Holistic Wellness Ecosystem in Australian Schools",
    excerpt: "A deep dive into why HealthyRoo focuses on the intersection of human narrative and architectural precision.",
    content: `
      <p>Wellness is not just the absence of illness; it is a state of complete physical, mental, and social well-being. To achieve this in a school setting, we must build ecosystems, not just programs.</p>
      
      <h3>The 4-Pillar Model</h3>
      <p>Our collaborative model focuses on Assessment, Safety, Education, and Community. By addressing these four pillars simultaneously, we create an environment where health is not an afterthought, but a foundational element of the school day.</p>
    `
  }
];

const BlogPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (id && !post) {
    return <div className="min-h-screen flex items-center justify-center">Post not found</div>;
  }

  // If ID is present, show single post
  if (post) {
    return (
      <div className="min-h-screen bg-white pt-[72px] md:pt-[88px]">
        <Navbar />
        
        <article className="pb-24">
          {/* Post Header */}
          <header className="bg-neutral-50 py-16 md:py-24 border-b border-neutral-100 mb-16">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 group">
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-[500] text-foreground leading-[1.1] mb-8">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" /> {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {post.readTime}
                </div>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            {/* Main Image */}
            <div className="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-16 border-4 border-white">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg max-w-none text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share / Footer */}
            <div className="mt-20 pt-10 border-t border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-sm uppercase st text-muted-foreground">Share:</span>
                <button className="p-2 rounded-full bg-neutral-100 hover:bg-primary/10 hover:text-primary transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    );
  }

  // Default: Blog Listing
  return (
    <div className="min-h-screen bg-white pt-[72px] md:pt-[88px]">
      <Navbar />
      
      <section className="py-20 bg-[#F4F7F6]">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
          <span className="text-primary font-[500] text-sm uppercase tracking-widest mb-4 block">Knowledge Hub</span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-[500] text-foreground er uppercase leading-none">
            HealthyRoo <span className="text-primary italic">Blog</span>
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl font-medium">
            Insights, updates, and expert perspectives on the future of school health and student wellbeing.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden mb-8 shadow-xl border-4 border-white group-hover:scale-[1.02] transition-all duration-500">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="px-2">
                    <p className="text-primary font-bold text-sm mb-3 uppercase">{post.date}</p>
                    <h2 className="text-2xl font-[500] text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-base line-clamp-2 mb-6 font-medium">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Read Full Article <ArrowLeft className="w-4 h-4 rotate-180" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
