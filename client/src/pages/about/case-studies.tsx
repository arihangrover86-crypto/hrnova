import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function CaseStudies() {
  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "Technology",
      size: "150 employees",
      challenge: "Manual HR processes causing delays and errors in payroll and employee management",
      solution: "Implemented HRNOVA's complete HR suite with automated payroll and self-service portal",
      results: [
        "90% reduction in payroll processing time",
        "50% decrease in HR administrative tasks",
        "95% employee satisfaction with new system"
      ],
      image: "bg-gradient-to-r from-blue-400 to-cyan-500"
    },
    {
      company: "GreenLife Organics",
      industry: "Agriculture",
      size: "75 employees",
      challenge: "Complex leave management and compliance tracking across multiple farm locations",
      solution: "Deployed HRNOVA's leave management and compliance modules with mobile access",
      results: [
        "100% compliance with labor regulations",
        "75% faster leave approval process",
        "40% reduction in compliance-related issues"
      ],
      image: "bg-gradient-to-r from-green-400 to-teal-500"
    },
    {
      company: "Creative Studios Inc",
      industry: "Marketing",
      size: "45 employees",
      challenge: "Difficulty tracking project time and managing freelancer payments",
      solution: "Integrated HRNOVA's timesheet and expense management with existing project tools",
      results: [
        "85% improvement in time tracking accuracy",
        "60% faster freelancer payment processing",
        "30% increase in project profitability"
      ],
      image: "bg-gradient-to-r from-purple-400 to-pink-500"
    },
    {
      company: "MedCare Clinics",
      industry: "Healthcare",
      size: "200 employees",
      challenge: "Managing complex schedules and certifications for medical staff",
      solution: "Customized HRNOVA platform with certification tracking and advanced scheduling",
      results: [
        "99% compliance with medical certifications",
        "80% reduction in scheduling conflicts",
        "45% improvement in staff utilization"
      ],
      image: "bg-gradient-to-r from-red-400 to-orange-500"
    },
    {
      company: "BuildRight Construction",
      industry: "Construction",
      size: "120 employees",
      challenge: "Field workforce management and safety compliance tracking",
      solution: "Implemented HRNOVA's fieldforce management with GPS tracking and safety modules",
      results: [
        "70% improvement in field crew productivity",
        "95% safety compliance rate",
        "50% reduction in administrative overhead"
      ],
      image: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      company: "DataDriven Analytics",
      industry: "Consulting",
      size: "80 employees",
      challenge: "Performance management and skills development tracking for remote teams",
      solution: "Deployed HRNOVA's performance management with virtual collaboration tools",
      results: [
        "40% increase in employee engagement",
        "65% improvement in goal achievement",
        "30% faster skills development tracking"
      ],
      image: "bg-gradient-to-r from-indigo-400 to-purple-500"
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-indigo-100 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Success Stories
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real companies, real results. Discover how businesses across various industries have transformed 
              their HR operations with HRNOVA's innovative solutions.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/30 group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${study.image} rounded-2xl flex items-center justify-center mr-4`}>
                    <i className="fas fa-building text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{study.company}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{study.industry}</span>
                      <span>•</span>
                      <span>{study.size}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.button
                  className="mt-6 text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  Read Full Case Study <i className="fas fa-arrow-right ml-2"></i>
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their HR operations with HRNOVA. 
              Let's discuss how we can help your organization achieve similar results.
            </p>
            <motion.button
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}