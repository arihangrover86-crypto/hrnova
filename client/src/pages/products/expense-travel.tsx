import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Demoschedule from '../DemoSchedule';
export default function ExpenseTravel() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-amber-100 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Expense & Travel Management
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Simplify expense reporting and travel management with our intelligent system. 
              Automated receipt capture, policy enforcement, and seamless reimbursement processes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Receipt Capture",
                description: "Smart OCR technology extracts data from receipts automatically",
                icon: "fas fa-camera",
                color: "from-amber-400 to-orange-500"
              },
              {
                title: "Travel Booking",
                description: "Integrated travel booking with policy compliance checks",
                icon: "fas fa-plane",
                color: "from-orange-400 to-red-500"
              },
              {
                title: "Expense Reporting",
                description: "Quick expense report creation with mobile submission",
                icon: "fas fa-receipt",
                color: "from-red-400 to-pink-500"
              },
              {
                title: "Policy Enforcement",
                description: "Automated policy checks and approval routing",
                icon: "fas fa-shield-alt",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Reimbursement",
                description: "Fast reimbursement processing with direct deposit integration",
                icon: "fas fa-money-check-alt",
                color: "from-green-400 to-teal-500"
              },
              {
                title: "Expense Analytics",
                description: "Detailed spending analytics and budget tracking",
                icon: "fas fa-chart-pie",
                color: "from-purple-400 to-pink-500"
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