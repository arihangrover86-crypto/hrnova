import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function PolicyAuditDesign() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              HR Policy & Audit Design
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional HR policy development and comprehensive audit services. Ensure your organization 
              meets all compliance requirements with expertly crafted policies and thorough audit processes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Policy Development",
                description: "Custom HR policy creation tailored to your industry and requirements",
                icon: "fas fa-file-contract",
                color: "from-indigo-400 to-blue-500"
              },
              {
                title: "Compliance Audit",
                description: "Comprehensive HR compliance audits and gap analysis",
                icon: "fas fa-clipboard-check",
                color: "from-blue-400 to-cyan-500"
              },
              {
                title: "Policy Review",
                description: "Regular review and updates of existing HR policies",
                icon: "fas fa-sync-alt",
                color: "from-cyan-400 to-teal-500"
              },
              {
                title: "Legal Compliance",
                description: "Ensure policies meet current labor laws and regulations",
                icon: "fas fa-balance-scale",
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Risk Assessment",
                description: "Identify and mitigate HR-related risks and vulnerabilities",
                icon: "fas fa-shield-alt",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Implementation Support",
                description: "Guidance on policy implementation and employee communication",
                icon: "fas fa-hands-helping",
                color: "from-orange-400 to-red-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}