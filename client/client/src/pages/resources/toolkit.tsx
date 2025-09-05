import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import DemoSchedule from '../DemoSchedule';
export default function HRToolkit() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HR Toolkit & Templates
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Download free HR templates, guides, and tools to streamline your HR processes. Everything you need to manage your workforce effectively.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Policy Templates",
                description: "Ready-to-use HR policy templates for all business needs",
                icon: "fas fa-file-contract",
                color: "from-emerald-400 to-teal-500",
                downloadCount: "2.5K downloads"
              },
              {
                title: "Interview Guides",
                description: "Structured interview templates and evaluation forms",
                icon: "fas fa-clipboard-list",
                color: "from-teal-400 to-cyan-500",
                downloadCount: "1.8K downloads"
              },
              {
                title: "Performance Reviews",
                description: "Employee performance evaluation templates",
                icon: "fas fa-star",
                color: "from-cyan-400 to-blue-500",
                downloadCount: "3.2K downloads"
              },
              {
                title: "Job Descriptions",
                description: "Professional job description templates",
                icon: "fas fa-briefcase",
                color: "from-blue-400 to-indigo-500",
                downloadCount: "4.1K downloads"
              },
              {
                title: "Onboarding Checklists",
                description: "Complete new employee onboarding guides",
                icon: "fas fa-check-square",
                color: "from-indigo-400 to-purple-500",
                downloadCount: "2.9K downloads"
              },
              {
                title: "Leave Policies",
                description: "Comprehensive leave and attendance policies",
                icon: "fas fa-calendar-alt",
                color: "from-purple-400 to-pink-500",
                downloadCount: "1.6K downloads"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${tool.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{tool.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{tool.downloadCount}</span>
                  <motion.button
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`download-${tool.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    Download
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <DemoSchedule />
        </div>
      </section>
    </div>
  );
}