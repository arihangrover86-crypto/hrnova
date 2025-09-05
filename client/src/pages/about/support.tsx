import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function Support() {
  const supportOptions = [
    {
      title: "Help Center",
      description: "Comprehensive documentation, tutorials, and FAQs",
      icon: "fas fa-book",
      color: "from-blue-400 to-cyan-500",
      action: "Browse Articles"
    },
    {
      title: "Live Chat",
      description: "Instant support from our customer success team",
      icon: "fas fa-comments",
      color: "from-green-400 to-emerald-500",
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Direct phone support for urgent issues",
      icon: "fas fa-phone",
      color: "from-purple-400 to-pink-500",
      action: "Call Support"
    },
    {
      title: "Video Training",
      description: "Scheduled training sessions and product demos",
      icon: "fas fa-video",
      color: "from-orange-400 to-red-500",
      action: "Schedule Session"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share best practices",
      icon: "fas fa-users",
      color: "from-indigo-400 to-purple-500",
      action: "Join Community"
    },
    {
      title: "Email Support",
      description: "Submit detailed support requests via email",
      icon: "fas fa-envelope",
      color: "from-teal-400 to-cyan-500",
      action: "Send Email"
    }
  ];

  const supportTiers = [
    {
      name: "Standard Support",
      description: "Included with all plans",
      features: [
        "Email support (24-48 hour response)",
        "Help center access",
        "Community forum",
        "Basic training resources"
      ],
      color: "from-gray-400 to-slate-500"
    },
    {
      name: "Priority Support",
      description: "For growing businesses",
      features: [
        "Priority email support (4-8 hour response)",
        "Live chat support",
        "Phone support (business hours)",
        "Advanced training sessions"
      ],
      color: "from-blue-400 to-indigo-500"
    },
    {
      name: "Premium Support",
      description: "For enterprise customers",
      features: [
        "24/7 priority support",
        "Dedicated account manager",
        "Custom training programs",
        "Implementation assistance"
      ],
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-cyan-100 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Support
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're here to help you succeed. Get the support you need, when you need it, 
              with our comprehensive customer success programs and multiple support channels.
            </motion.p>
          </div>

          {/* Support Channels */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How Can We Help?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 text-center group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${option.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{option.description}</p>
                  <motion.button
                    className={`bg-gradient-to-r ${option.color} hover:opacity-90 text-white px-6 py-2 rounded-lg font-medium text-sm`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {option.action}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Support Tiers */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Support Plans</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {supportTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <i className="fas fa-headset text-white text-2xl"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 text-sm">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  Have a specific question or need personalized assistance? Our support team is here to help.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-cyan-600 mr-3"></i>
                    <span>support@hrnova.com</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-cyan-600 mr-3"></i>
                    <span>1-800-HRNOVA-1</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock text-cyan-600 mr-3"></i>
                    <span>Monday - Friday, 9 AM - 6 PM EST</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <div className="grid grid-cols-2 gap-4">
                  <motion.button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Support
                  </motion.button>
                  <motion.button
                    className="bg-white/80 backdrop-blur-lg hover:bg-white text-gray-800 px-6 py-3 rounded-xl font-medium border border-gray-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Call
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}