import { motion } from "framer-motion";
import Navigation from "@/components/navigation";

export default function AdminLogin() {
  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 opacity-60"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-slate-100 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        
        <div className="relative z-10 max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/30"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent mb-2">
                Admin Portal
              </h1>
              <p className="text-gray-600">Secure administrator access</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-colors"
                  placeholder="Enter admin email"
                  data-testid="input-admin-email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-colors"
                  placeholder="Enter password"
                  data-testid="input-admin-password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Two-Factor Authentication
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 transition-colors"
                  placeholder="Enter 6-digit code"
                  data-testid="input-2fa-code"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-slate-600 focus:ring-slate-500" />
                  <span className="ml-2 text-sm text-gray-600">Remember this device</span>
                </label>
                <a href="#" className="text-sm text-slate-600 hover:text-slate-700">
                  Reset 2FA?
                </a>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-700 hover:to-gray-800 text-white py-3 rounded-xl font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid="button-admin-sign-in"
              >
                Secure Sign In
              </motion.button>
            </form>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-center">
                <i className="fas fa-shield-alt text-amber-600 mr-2"></i>
                <span className="text-sm text-amber-800 font-medium">Secure Admin Access</span>
              </div>
              <p className="text-xs text-amber-700 mt-1">
                This portal requires administrator privileges and two-factor authentication for security.
              </p>
            </div>

            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Need help accessing the admin portal?{' '}
                <a href="/about/support" className="text-slate-600 hover:text-slate-700 font-medium">
                  Contact Support
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}