import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import DemoSchedule from '../DemoSchedule';
export default function SmallBusiness() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Small Business Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enterprise-grade HR solutions for small businesses (50-100 employees). 
              Sophisticated tools and processes to manage your established workforce efficiently.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Features",
                description: "Access to advanced HR features and enterprise-level capabilities",
                icon: "fas fa-building",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Advanced Analytics",
                description: "Comprehensive reporting and business intelligence tools",
                icon: "fas fa-chart-line",
                color: "from-indigo-400 to-purple-500"
              },
              {
                title: "Workflow Automation",
                description: "Sophisticated automated workflows and approval processes",
                icon: "fas fa-cogs",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Multi-Department",
                description: "Department-specific HR management and reporting",
                icon: "fas fa-sitemap",
                color: "from-green-400 to-teal-500"
              },
              {
                title: "API Integrations",
                description: "Extensive API integrations with enterprise software",
                icon: "fas fa-plug",
                color: "from-orange-400 to-red-500"
              },
              {
                title: "Dedicated Support",
                description: "Priority support with dedicated account management",
                icon: "fas fa-headset",
                color: "from-teal-400 to-cyan-500"
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