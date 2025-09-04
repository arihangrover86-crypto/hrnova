import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function ComplianceManagement() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-slate-100 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Compliance Management
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ensure regulatory compliance across all HR processes with automated monitoring, 
              documentation, and reporting for various labor laws and industry standards.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Regulatory Tracking",
                description: "Stay updated with changing labor laws and regulations",
                icon: "fas fa-gavel",
                color: "from-slate-400 to-gray-500"
              },
              {
                title: "Audit Management",
                description: "Streamlined audit processes with document management",
                icon: "fas fa-search",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Policy Enforcement",
                description: "Automated policy compliance monitoring and alerts",
                icon: "fas fa-shield-alt",
                color: "from-green-400 to-teal-500"
              },
              {
                title: "Document Control",
                description: "Centralized compliance document repository",
                icon: "fas fa-folder-open",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Risk Assessment",
                description: "Identify and mitigate compliance risks proactively",
                icon: "fas fa-exclamation-triangle",
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "Compliance Reports",
                description: "Generate comprehensive compliance and audit reports",
                icon: "fas fa-file-alt",
                color: "from-red-400 to-pink-500"
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
        </div>
      </section>
    </div>
  );
}