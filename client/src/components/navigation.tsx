import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import hrnova from '../../../attached_assets/logohrnovasvg.svg';
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    products: [
      { label: 'Core HR', href: '/products/core-hr' },
      { label: 'Payroll & Compliance', href: '/products/payroll-compliance' },
      { label: 'Performance Management', href: '/products/performance-management' },
      { label: 'Timesheet', href: '/products/timesheet' },
      { label: 'CloudPay Mobile', href: '/products/cloudpay-mobile' },
      { label: 'Leave and Attendance', href: '/products/leave-attendance' },
      { label: 'Expense and Travel', href: '/products/expense-travel' },
      { label: 'Fieldforce Management', href: '/products/fieldforce-management' },
      { label: 'Compliance Management', href: '/products/compliance-management' }
    ],
    services: [
      { label: 'Service Offering', href: '/services/offering' },
      { label: 'Virtual HR Team', href: '/services/virtual-hr-team' },
      { label: 'HR Policy and Audit Design', href: '/services/policy-audit-design' }
    ],
    businessSize: [
      { label: 'Startup (up to 20 employees)', href: '/business-size/startup' },
      { label: 'Growing Startup (20-50 employees)', href: '/business-size/growing-startup' },
      { label: 'Small Business (50-100 employees)', href: '/business-size/small-business' }
    ],
    resources: [
      { label: 'HR Toolkit & Templates', href: '/resources/toolkit' },
      { label: 'Blogs', href: '/resources/blogs' }
    ],
    about: [
      { label: 'About Us', href: '/about/about-us' },
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Media Coverage', href: '/about/media-coverage' },
      { label: 'Case Studies', href: '/about/case-studies' },
      { label: 'Careers', href: '/about/careers' },
      { label: 'Our Support', href: '/about/support' }
    ]
  };

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      className={`bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex-shrink-0">
              {/* <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent lowercase" data-testid="logo">
                hrnova
              </h1> */}
              <img src={hrnova} />
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition-colors flex items-center rounded-lg hover:bg-blue-50"
                  whileHover={{ y: -1 }}
                  data-testid="nav-products"
                >
                  Products
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {menuItems.products.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <motion.div className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer">
                            {item.label}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('services')}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition-colors flex items-center rounded-lg hover:bg-purple-50"
                  whileHover={{ y: -1 }}
                  data-testid="nav-services"
                >
                  Services
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {menuItems.services.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <motion.div className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors cursor-pointer">
                            {item.label}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Business Size Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('businessSize')}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition-colors flex items-center rounded-lg hover:bg-pink-50"
                  whileHover={{ y: -1 }}
                  data-testid="nav-business-size"
                >
                  By Business Size
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === 'businessSize' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {menuItems.businessSize.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <motion.div className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer">
                            {item.label}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition-colors flex items-center rounded-lg hover:bg-green-50"
                  whileHover={{ y: -1 }}
                  data-testid="nav-resources"
                >
                  Resources
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {menuItems.resources.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <motion.div className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors cursor-pointer">
                            {item.label}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <motion.button
                  className="text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition-colors flex items-center rounded-lg hover:bg-orange-50"
                  whileHover={{ y: -1 }}
                  data-testid="nav-about"
                >
                  About
                  <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </motion.button>
                
                <AnimatePresence>
                  {activeDropdown === 'about' && (
                    <motion.div
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {menuItems.about.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <motion.div className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-pointer">
                            {item.label}
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/request-demo">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-testid="nav-request-demo"
              >
                Request Demo
              </motion.button>
            </Link>
            {/* <Link href="/login"> */}
            {/* <Link  href="https://app.hrnova.cloud/auth6/login.aspx?role=0" target="_blank">
           
              <motion.button
                className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-200 hover:border-gray-300"
                whileHover={{ scale: 1.02 }}
                data-testid="nav-user-login"
              >
                Login
              </motion.button>
            </Link> */}
            <a
  href="https://app.hrnova.cloud/auth6/login.aspx?role=1"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-200 hover:border-gray-300"
    whileHover={{ scale: 1.02 }}
    data-testid="nav-user-login"
  >
    Login
  </motion.button>
</a>
            {/* <Link href="/admin-login"> */}
            <a href="https://app.hrnova.cloud/auth6/login.aspx?role=0" target="_blank">
           
              <motion.button
                className="text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                data-testid="nav-admin-login"
              >
                Admin
              </motion.button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-800 p-2"
              whileTap={{ scale: 0.95 }}
              data-testid="mobile-menu-toggle"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile menu - Will be expanded later */}
        {/* Mobile menu */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      className="lg:hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="px-4 pt-4 textcapital pb-6 space-y-4 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50 rounded-b-2xl shadow-md">
        {Object.entries(menuItems).map(([key, items]) => (
          <MobileAccordion
            key={key}
            title={key.replace(/([A-Z])/g, " $1")}
            items={items}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        ))}

        {/* Divider */}
        <div className="border-t border-gray-200 pt-4" />

        {/* Auth Buttons */}
        <div className="flex flex-col space-y-3">
          <Link href="/request-demo" onClick={() => setIsMobileMenuOpen(false)}>
            <motion.button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg text-sm font-medium shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Request Demo
            </motion.button>
          </Link>

          <a
            href="https://app.hrnova.cloud/auth6/login.aspx?role=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="w-full text-gray-600 border border-gray-200 hover:border-gray-300 px-6 py-2 rounded-lg text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </a>

          <a
            href="https://app.hrnova.cloud/auth6/login.aspx?role=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="w-full text-blue-600 border border-blue-200 hover:border-blue-400 px-6 py-2 rounded-lg text-sm font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Admin
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

        {/* <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="text-center py-4">
                  <p className="text-sm text-gray-600">Mobile menu coming soon...</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </motion.nav>
  );
}
function MobileAccordion({
  title,
  items,
  onClose,
}: {
  title: string;
  items: { label: string; href: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 text-left text-gray-700 font-medium"
      >
        {title}
        <i
          className={`fas fa-chevron-down transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        ></i>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="px-4 pb-2 space-y-2"
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
              >
                <span className="block text-sm text-gray-600 hover:text-blue-600 py-1">
                  {item.label}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
