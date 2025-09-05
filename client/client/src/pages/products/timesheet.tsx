import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Demoschedule from '../DemoSchedule';
export default function Timesheet() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Smart Timesheet Management
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Streamline time tracking and project management with our intelligent timesheet system. 
              Accurate billing, productivity insights, and seamless project collaboration.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Time Tracking",
                description: "Easy-to-use time tracking with automatic timers and manual entry options",
                icon: "fas fa-clock",
                color: "from-cyan-400 to-blue-500"
              },
              {
                title: "Project Management",
                description: "Organize work by projects, tasks, and clients for better accountability",
                icon: "fas fa-project-diagram",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Approval Workflows",
                description: "Customizable approval processes for timesheet submissions",
                icon: "fas fa-check-circle",
                color: "from-indigo-400 to-purple-500"
              },
              {
                title: "Billing Integration",
                description: "Seamless integration with billing and invoicing systems",
                icon: "fas fa-file-invoice",
                color: "from-green-400 to-cyan-500"
              },
              {
                title: "Mobile Access",
                description: "Track time on the go with our mobile-friendly interface",
                icon: "fas fa-mobile-alt",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Analytics & Reports",
                description: "Detailed reports on productivity, project costs, and team performance",
                icon: "fas fa-chart-bar",
                color: "from-orange-400 to-red-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          <Demoschedule />
        </div>
       
      </section>
    </div>
  );
}