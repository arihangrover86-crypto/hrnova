import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function Careers() {
  const openings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Build beautiful, responsive web applications using React, TypeScript, and modern frontend technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Drive product strategy and roadmap for our core HR management platform."
    },
    {
      title: "HR Technology Consultant",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Help customers optimize their HR processes and achieve success with our platform."
    },
    {
      title: "Backend Engineer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and build scalable backend systems using Node.js, PostgreSQL, and cloud technologies."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "4+ years",
      description: "Create intuitive user experiences and beautiful interfaces for our HR platform."
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote / Chicago",
      type: "Full-time",
      experience: "1+ years",
      description: "Generate qualified leads and build relationships with potential customers."
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Market-leading salaries with equity options",
      icon: "fas fa-dollar-sign",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: "fas fa-heart",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Flexible Work",
      description: "Remote-first culture with flexible schedules",
      icon: "fas fa-laptop-house",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Learning & Growth",
      description: "Professional development budget and learning opportunities",
      icon: "fas fa-graduation-cap",
      color: "from-purple-400 to-indigo-500"
    },
    {
      title: "Time Off",
      description: "Unlimited PTO and company-wide rest weeks",
      icon: "fas fa-calendar-alt",
      color: "from-orange-400 to-yellow-500"
    },
    {
      title: "Great Team",
      description: "Work with passionate, talented, and diverse colleagues",
      icon: "fas fa-users",
      color: "from-teal-400 to-green-500"
    }
  ];

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
              Join Our Team
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Build the future of HR technology with us. We're looking for passionate individuals who want to 
              make a meaningful impact on how businesses manage their most valuable asset: their people.
            </motion.p>
          </div>

          {/* Why Work With Us */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${benefit.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-800 mr-4">{job.title}</h3>
                        <span className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span><i className="fas fa-map-marker-alt mr-1"></i>{job.location}</span>
                        <span><i className="fas fa-clock mr-1"></i>{job.type}</span>
                        <span><i className="fas fa-chart-line mr-1"></i>{job.experience}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{job.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <motion.button
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Don't See Your Role?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation. 
              Send us your resume and tell us how you'd like to contribute to our mission.
            </p>
            <motion.button
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Us Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}