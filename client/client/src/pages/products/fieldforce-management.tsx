import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Demoschedule from '../DemoSchedule';
export default function FieldforceManagement() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-100 to-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Fieldforce Management
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Manage your remote and field workforce effectively with real-time tracking, task management, 
              and performance monitoring for distributed teams.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "GPS Tracking",
                description: "Real-time location tracking for field employees with geofencing",
                icon: "fas fa-map-marker-alt",
                color: "from-teal-400 to-cyan-500"
              },
              {
                title: "Task Assignment",
                description: "Assign and track field tasks with priority management",
                icon: "fas fa-tasks",
                color: "from-cyan-400 to-blue-500"
              },
              {
                title: "Mobile Check-in",
                description: "Easy check-in/check-out with photo verification",
                icon: "fas fa-mobile-alt",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Route Optimization",
                description: "Intelligent route planning for maximum efficiency",
                icon: "fas fa-route",
                color: "from-green-400 to-teal-500"
              },
              {
                title: "Expense Tracking",
                description: "Track field expenses and mileage automatically",
                icon: "fas fa-gas-pump",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "Reporting Dashboard",
                description: "Comprehensive analytics and field activity reports",
                icon: "fas fa-chart-area",
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