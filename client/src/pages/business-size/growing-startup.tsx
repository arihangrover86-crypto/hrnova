import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import DemoSchedule from '../DemoSchedule';
export default function GrowingStartup() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-100 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Growing Startup Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Scale your HR operations efficiently with solutions designed for growing startups (20-50 employees). 
              Build robust HR foundations as you expand your team and operations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Scalable Infrastructure",
                description: "HR systems that grow with your expanding team",
                icon: "fas fa-expand-arrows-alt",
                color: "from-emerald-400 to-green-500"
              },
              {
                title: "Performance Management",
                description: "Structured performance reviews and goal setting processes",
                icon: "fas fa-target",
                color: "from-green-400 to-teal-500"
              },
              {
                title: "Advanced Reporting",
                description: "Detailed analytics and insights for data-driven decisions",
                icon: "fas fa-chart-bar",
                color: "from-teal-400 to-cyan-500"
              },
              {
                title: "Multi-location Support",
                description: "Manage distributed teams across multiple locations",
                icon: "fas fa-globe",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Compliance Management",
                description: "Stay compliant with growing regulatory requirements",
                icon: "fas fa-shield-alt",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Integration Ready",
                description: "Connect with popular business tools and platforms",
                icon: "fas fa-link",
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
          <DemoSchedule />
        </div>
      </section>
    </div>
  );
}