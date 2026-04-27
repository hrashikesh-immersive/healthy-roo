import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import blogThumbnail1 from "@/assets/blog-thumbnail-1.png";
import blogThumbnail2 from "@/assets/blog-thumbnail-2.png";
import blogDental from "@/assets/blog-dental.png";
import blogMental from "@/assets/blog-mental.png";
import blogNutrition from "@/assets/blog-nutrition.png";
import blogPosture from "@/assets/blog-posture.png";
import blogVision from "@/assets/blog-vision.png";
import blogCommunity from "@/assets/blog-community.png";

export const blogPosts = [
  {
    id: "dental-screening-importance",
    image: blogDental,
    date: "April 24, 2026",
    author: "Dr. James Wilson",
    readTime: "6 min read",
    title: "Why Early Dental Screening is a Game-Changer for Student Success",
    excerpt: "Exploring the direct link between oral health and academic performance, and how on-campus screenings are closing the gap in Australian schools.",
    content: `
      <p>Oral health is often overlooked in the broader context of student wellness, yet it remains one of the leading causes of preventable school absences. At HealthyRoo, we've integrated dental screenings into our core platform because we believe every child deserves a pain-free learning experience.</p>
      
      <h3>The Link Between Teeth and Grades</h3>
      <p>Research indicates that students with chronic dental pain are three times more likely to miss school and four times more likely to have lower GPAs. When a child is struggling with a toothache, their focus shifts from the chalkboard to the discomfort, hindering their cognitive development.</p>
      
      <h3>Bringing the Clinic to the Classroom</h3>
      <p>By conducting these screenings within the school environment, we remove the logistical barriers that often prevent families from seeking care. Our AI-enabled tools help dentists identify early signs of decay and misalignment, providing parents with a clear roadmap for treatment before issues escalate.</p>
    `
  },
  {
    id: "mental-wellness-beyond-physical",
    image: blogMental,
    date: "April 20, 2026",
    author: "Elena Vance",
    readTime: "8 min read",
    title: "Mental Wellness: The Invisible Pillar of Student Health",
    excerpt: "Moving beyond physical metrics to address the growing need for emotional and psychological support systems in K-12 education.",
    content: `
      <p>In a world of increasing digital pressure and social complexity, the mental health of our students has never been more critical. While physical screenings are vital, they only tell half the story of a child's readiness to learn.</p>
      
      <h3>Creating a Safe Space</h3>
      <p>HealthyRoo's approach to mental wellness focuses on early intervention and destigmatization. We work with schools to implement 'Mindful Check-ins'—short, data-driven sessions that allow students to express their emotional state in a safe, non-judgmental way.</p>
      
      <h3>The Role of Educators</h3>
      <p>Teachers are on the front lines of student wellness. Our platform provides them with the tools to notice subtle shifts in behavior or social interaction, allowing for timely support from school counselors and parents.</p>
    `
  },
  {
    id: "nutritional-benchmarks",
    image: blogNutrition,
    date: "April 15, 2026",
    author: "Sarah Thompson",
    readTime: "5 min read",
    title: "Nutritional Benchmarks: Fueling the Next Generation of Leaders",
    excerpt: "How data-driven dietary insights are helping Australian schools transform their cafeterias into hubs of health and energy.",
    content: `
      <p>What a student eats at lunch directly impacts their energy levels during the afternoon session. Yet, many school menus still lack the nutritional balance required for optimal brain function.</p>
      
      <h3>Data-Driven Dining</h3>
      <p>By analyzing the aggregated health data of a school population, HealthyRoo helps cafeteria managers tailor their menus. If a high percentage of students show iron deficiencies, we can recommend menu adjustments that are both delicious and nutrient-dense.</p>
      
      <h3>Educating the Palate</h3>
      <p>It's not just about providing food; it's about building healthy habits. Our 'Taste of Tomorrow' initiative encourages students to explore new, healthy food options through interactive workshops and tasting events.</p>
    `
  },
  {
    id: "posture-and-performance",
    image: blogPosture,
    date: "April 10, 2026",
    author: "Dr. Robert Lowe",
    readTime: "7 min read",
    title: "The Impact of Posture on Academic Focus and Performance",
    excerpt: "Why ergonomics in the classroom matter more than ever in the age of tablets and laptops, and how to improve it.",
    content: `
      <p>Modern classrooms are filled with technology, but the furniture hasn't always kept pace. 'Tech-neck' and poor posture are becoming common complaints among primary school students, leading to fatigue and reduced concentration.</p>
      
      <h3>The Biomechanics of Learning</h3>
      <p>Good posture isn't just about looking straight; it's about optimizing blood flow and oxygen to the brain. Our ergonomic assessments identify students at risk of musculoskeletal issues and provide simple classroom exercises to reset the body.</p>
      
      <h3>Simple Changes, Big Results</h3>
      <p>Adjusting chair heights and encouraging regular 'movement breaks' can significantly reduce physical stress on students. Schools that have implemented our ergonomic guidelines report higher levels of student engagement and fewer complaints of headaches.</p>
    `
  },
  {
    id: "vision-screening-learning-window",
    image: blogVision,
    date: "April 05, 2026",
    author: "Marcus Thorne",
    readTime: "4 min read",
    title: "Vision Screening: Opening the Window to Better Learning",
    excerpt: "Over 80% of classroom learning is visual. We explore why identifying vision issues early is the most effective way to prevent academic struggle.",
    content: `
      <p>Many children who are labeled as 'distracted' or 'slow learners' actually have undiagnosed vision problems. If a student can't see the board clearly, they naturally disengage from the lesson.</p>
      
      <h3>The Hidden Barrier</h3>
      <p>Standard vision screenings often miss subtle issues like tracking difficulties or binocular vision problems. HealthyRoo's advanced screening protocols are designed to catch these nuances, ensuring every student has the visual clarity they need to succeed.</p>
      
      <h3>A Simple Solution</h3>
      <p>In many cases, the solution is as simple as a pair of glasses or a change in seating position. By identifying these needs early, we can prevent years of academic frustration and help students reach their full potential.</p>
    `
  },
  {
    id: "community-driven-healthcare",
    image: blogCommunity,
    date: "April 01, 2026",
    author: "Smit Tanksale",
    readTime: "9 min read",
    title: "Bridging the Gap: Community-Driven Healthcare for the Future",
    excerpt: "How HealthyRoo is strengthening the bond between schools and parents through transparent, real-time health data.",
    content: `
      <p>Healthcare should not be a series of isolated events. It should be a continuous conversation between all stakeholders in a child's life. HealthyRoo is the bridge that makes this conversation possible.</p>
      
      <h3>Transparency and Trust</h3>
      <p>Our platform allows parents to access their child's health reports instantly, with clear explanations of what the data means. This transparency builds trust and empowers parents to take proactive steps in their child's wellness journey.</p>
      
      <h3>The Power of Community</h3>
      <p>When schools and parents work together, the impact on student health is exponential. By fostering a community-driven approach to healthcare, we are creating a world where every child is supported, monitored, and celebrated.</p>
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
