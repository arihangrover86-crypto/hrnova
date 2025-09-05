import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function ServiceOffering() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-violet-100 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Service Offerings
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive HR services tailored to your business needs. From implementation 
              to ongoing support, we've got you covered every step of the way.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Implementation Services",
                description: "Complete system setup and configuration with data migration support",
                icon: "fas fa-rocket",
                color: "from-violet-400 to-purple-500"
              },
              {
                title: "Training & Support",
                description: "Comprehensive training programs and ongoing technical support",
                icon: "fas fa-graduation-cap",
                color: "from-purple-400 to-fuchsia-500"
              },
              {
                title: "Custom Integrations",
                description: "Seamless integration with your existing business systems",
                icon: "fas fa-puzzle-piece",
                color: "from-blue-400 to-indigo-500"
              },
              {
                title: "Data Analytics",
                description: "Advanced HR analytics and business intelligence reporting",
                icon: "fas fa-chart-line",
                color: "from-green-400 to-teal-500"
              },
              {
                title: "Managed Services",
                description: "Fully managed HR operations with dedicated account management",
                icon: "fas fa-users-cog",
                color: "from-orange-400 to-red-500"
              },
              {
                title: "Consulting Services",
                description: "Strategic HR consulting and best practice implementation",
                icon: "fas fa-lightbulb",
                color: "from-yellow-400 to-orange-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our service team to discuss your specific requirements and create a customized service plan for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.button>
              <motion.button
                className="bg-white/80 backdrop-blur-lg hover:bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-medium border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Service Catalog
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}