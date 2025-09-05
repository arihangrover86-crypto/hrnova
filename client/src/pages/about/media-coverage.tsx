import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function MediaCoverage() {
  const mediaItems = [
    {
      title: "HRNOVA Named Top HR Tech Startup of 2024",
      publication: "TechCrunch",
      date: "January 15, 2024",
      type: "Article",
      excerpt: "HRNOVA's innovative approach to HR management has earned recognition as one of the year's most promising startups."
    },
    {
      title: "The Future of HR: Interview with HRNOVA CEO",
      publication: "Forbes",
      date: "December 20, 2023",
      type: "Interview",
      excerpt: "CEO discusses the evolution of HR technology and HRNOVA's role in shaping the future of work."
    },
    {
      title: "How HRNOVA is Revolutionizing Small Business HR",
      publication: "Business Insider",
      date: "November 30, 2023",
      type: "Feature",
      excerpt: "In-depth look at how HRNOVA's solutions are transforming HR operations for small and medium businesses."
    },
    {
      title: "HRNOVA Secures $10M Series A Funding",
      publication: "VentureBeat",
      date: "October 12, 2023",
      type: "Press Release",
      excerpt: "Funding round led by major venture capital firms to accelerate product development and market expansion."
    },
    {
      title: "Award-Winning HR Platform: HRNOVA's Success Story",
      publication: "HR Executive",
      date: "September 5, 2023",
      type: "Case Study",
      excerpt: "Analysis of HRNOVA's rapid growth and impact on the HR technology landscape."
    },
    {
      title: "HRNOVA Podcast: Building Better Workplaces",
      publication: "HR Tech Weekly",
      date: "August 18, 2023",
      type: "Podcast",
      excerpt: "Podcast discussion on modern HR challenges and how technology can create better employee experiences."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-zinc-50 to-gray-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-slate-100 to-zinc-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Media Coverage
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              See what industry leaders and media outlets are saying about HRNOVA. 
              Stay updated with our latest news, achievements, and industry recognition.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mediaItems.map((item, index) => (
              <motion.article
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-slate-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">{item.publication}</span>
                  <motion.button
                    className="text-slate-600 hover:text-slate-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 5 }}
                  >
                    Read Article <i className="fas fa-external-link-alt ml-2"></i>
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Press & Media Inquiries
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              For press inquiries, interview requests, or media kits, please contact our communications team. 
              We're always happy to share insights about HR technology and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-600 hover:to-gray-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Press Team
              </motion.button>
              <motion.button
                className="bg-white/80 backdrop-blur-lg hover:bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-medium border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Media Kit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}