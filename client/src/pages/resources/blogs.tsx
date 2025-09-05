import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function Blogs() {
  const blogPosts = [
    {
      title: "The Future of Remote Work: HR Strategies for 2024",
      excerpt: "Explore emerging trends in remote work management and how HR teams can adapt their strategies for the evolving workplace.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Remote Work"
    },
    {
      title: "Employee Engagement in the Digital Age",
      excerpt: "Discover innovative approaches to boost employee engagement using digital tools and modern HR practices.",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Engagement"
    },
    {
      title: "Compliance Automation: Reducing HR Risk",
      excerpt: "Learn how automated compliance tools can help HR teams reduce risk and ensure regulatory adherence.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Compliance"
    },
    {
      title: "Building Inclusive Workplace Culture",
      excerpt: "Practical strategies for creating and maintaining an inclusive workplace that supports diversity and belonging.",
      author: "David Park",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "Culture"
    },
    {
      title: "Performance Management Best Practices",
      excerpt: "Modern approaches to performance management that drive employee growth and organizational success.",
      author: "Lisa Thompson",
      date: "February 22, 2024",
      readTime: "10 min read",
      category: "Performance"
    },
    {
      title: "HR Analytics: Data-Driven Decision Making",
      excerpt: "Harness the power of HR analytics to make informed decisions and drive strategic business outcomes.",
      author: "Robert Kim",
      date: "February 18, 2024",
      readTime: "8 min read",
      category: "Analytics"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-100 to-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HR Insights & Blogs
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay informed with the latest HR trends, best practices, and insights from industry experts. 
              Practical advice to help you transform your HR operations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
                
                <motion.button
                  className="mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  Read More <i className="fas fa-arrow-right ml-2"></i>
                </motion.button>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Posts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}