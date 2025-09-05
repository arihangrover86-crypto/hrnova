import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function OurStory() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-100 to-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Story
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From a small startup to a leading HR technology company. Discover the journey behind HRNOVA 
              and how we're revolutionizing human resources management for businesses worldwide.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <motion.div
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/30"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mr-6">
                    <i className="fas fa-lightbulb text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">The Beginning</h3>
                    <p className="text-gray-600">2018 - Founded with a Vision</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  HRNOVA was founded in 2018 by a team of HR professionals and technology experts who recognized 
                  the need for more intuitive, efficient HR management solutions. We started with a simple mission: 
                  to make HR processes seamless and employee-centric.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/30"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mr-6">
                    <i className="fas fa-rocket text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Growth & Innovation</h3>
                    <p className="text-gray-600">2019-2021 - Scaling Solutions</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Over three years, we expanded our platform capabilities, serving hundreds of companies and 
                  thousands of employees. We introduced advanced analytics, mobile solutions, and AI-powered 
                  insights that transformed how businesses manage their workforce.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/30"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mr-6">
                    <i className="fas fa-globe text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Global Expansion</h3>
                    <p className="text-gray-600">2022-Present - Worldwide Impact</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Today, HRNOVA serves organizations across multiple countries, helping businesses of all sizes 
                  streamline their HR operations. We continue to innovate with cloud-native solutions, advanced 
                  automation, and industry-leading customer support.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Innovation", icon: "fas fa-cog", description: "Continuous improvement and cutting-edge technology" },
                  { title: "Integrity", icon: "fas fa-heart", description: "Honest, transparent, and ethical practices" },
                  { title: "Excellence", icon: "fas fa-star", description: "Delivering exceptional value and service" }
                ].map((value, index) => (
                  <div key={index} className="bg-white/40 rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <i className={`${value.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
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