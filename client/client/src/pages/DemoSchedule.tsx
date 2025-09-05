import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function AboutUs() {
  return (
    <div style={{paddingTop:'30px',marginTop:'50px'}}>
<motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-start-free-trial"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="bg-white/80 backdrop-blur-lg hover:bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-medium border border-gray-200 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-schedule-demo"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
          </div>
  )
}
