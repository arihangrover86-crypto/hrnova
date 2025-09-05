import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import LottieAnimation from "@/components/lottie-animation";

export default function CoreHR() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        {/* Light gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-40"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-purple-100 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Core HR Management
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Streamline your human resources operations with our comprehensive Core HR solution. 
              Manage employee data, organizational structure, and HR processes with ease and efficiency.
            </motion.p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Employee Database",
                description: "Centralized employee information management with secure data storage",
                icon: "fas fa-users",
                color: "from-blue-400 to-cyan-500"
              },
              {
                title: "Organizational Chart",
                description: "Visual hierarchy management and reporting structure",
                icon: "fas fa-sitemap",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Document Management",
                description: "Digital document storage and retrieval system",
                icon: "fas fa-file-alt",
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Role Management",
                description: "Define roles, permissions, and access controls",
                icon: "fas fa-shield-alt",
                color: "from-orange-400 to-red-500"
              },
              {
                title: "Reporting & Analytics",
                description: "Comprehensive HR reports and data insights",
                icon: "fas fa-chart-bar",
                color: "from-indigo-400 to-purple-500"
              },
              {
                title: "Integration Ready",
                description: "Seamless integration with existing systems",
                icon: "fas fa-plug",
                color: "from-teal-400 to-blue-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${feature.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-start-free-trial"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="bg-white/80 backdrop-blur-lg hover:bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-medium border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}