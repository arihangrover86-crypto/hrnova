import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Demoschedule from '../DemoSchedule';
export default function LeaveAttendance() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-rose-100 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Leave & Attendance
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive leave management and attendance tracking system. Streamline time-off requests, 
              track attendance patterns, and ensure compliance with labor policies.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Leave Requests",
                description: "Simple leave request submission with automated approval workflows",
                icon: "fas fa-calendar-alt",
                color: "from-rose-400 to-pink-500"
              },
              {
                title: "Attendance Tracking",
                description: "Real-time attendance monitoring with biometric and mobile check-ins",
                icon: "fas fa-user-check",
                color: "from-pink-400 to-purple-500"
              },
              {
                title: "Leave Balances",
                description: "Automatic calculation and tracking of leave balances and accruals",
                icon: "fas fa-balance-scale",
                color: "from-purple-400 to-indigo-500"
              },
              {
                title: "Policy Engine",
                description: "Configurable leave policies for different employee types and regions",
                icon: "fas fa-cogs",
                color: "from-blue-400 to-cyan-500"
              },
              {
                title: "Team Calendar",
                description: "Visual team calendar showing who's out and when",
                icon: "fas fa-calendar-week",
                color: "from-green-400 to-teal-500"
              },
              {
                title: "Compliance Reports",
                description: "Generate compliance reports for audits and regulatory requirements",
                icon: "fas fa-clipboard-check",
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