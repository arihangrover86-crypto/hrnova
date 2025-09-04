import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function CloudPayMobile() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-emerald-100 to-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CloudPay Mobile
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Secure mobile payroll access for employees and managers. Check pay stubs, tax documents, 
              and payroll information anytime, anywhere with our mobile-first solution.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mobile Pay Stubs",
                description: "Instant access to current and historical pay stubs on any device",
                icon: "fas fa-mobile-alt",
                color: "from-emerald-400 to-teal-500"
              },
              {
                title: "Tax Documents",
                description: "Download W-2s, 1099s, and other tax documents securely",
                icon: "fas fa-file-invoice-dollar",
                color: "from-teal-400 to-cyan-500"
              },
              {
                title: "Direct Deposit",
                description: "Manage bank accounts and direct deposit settings",
                icon: "fas fa-university",
                color: "from-cyan-400 to-blue-500"
              },
              {
                title: "Time Off Requests",
                description: "Submit and track vacation and leave requests on the go",
                icon: "fas fa-calendar-check",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Expense Tracking",
                description: "Submit expenses and reimbursement requests with photo capture",
                icon: "fas fa-receipt",
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "Push Notifications",
                description: "Stay informed with real-time updates on payroll and benefits",
                icon: "fas fa-bell",
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
        </div>
      </section>
    </div>
  );
}