import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import ContactForm from "@/components/contact-form";

export default function RequestDemo() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Request a Demo
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              See HRNOVA in action. Schedule a personalized demo with our team and discover how we can transform your HR operations.
            </motion.p>
          </div>

          <motion.div
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                title: "30-Minute Demo",
                description: "Comprehensive walkthrough of all features",
                icon: "fas fa-clock"
              },
              {
                title: "Q&A Session",
                description: "Get answers to your specific questions",
                icon: "fas fa-question-circle"
              },
              {
                title: "Custom Setup",
                description: "See how HRNOVA fits your business needs",
                icon: "fas fa-cog"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white/40 rounded-2xl">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}