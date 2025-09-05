import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function AboutUs() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About HRNOVA
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming HR management with innovative solutions. We empower businesses to streamline their human resources operations with cutting-edge technology.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At HRNOVA, we believe that efficient HR management is the foundation of successful businesses. 
                Our mission is to democratize access to professional HR tools and services, making them accessible 
                to organizations of all sizes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver solutions that not only streamline 
                processes but also enhance employee experience and organizational growth.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/30"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Companies Served" },
                  { number: "50K+", label: "Employees Managed" },
                  { number: "99.9%", label: "Uptime" },
                  { number: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}