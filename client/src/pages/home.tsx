import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import PricingCard from "@/components/pricing-card";
import ContactForm from "@/components/contact-form";
import FloatingStats from "@/components/floating-stats";
import LottieAnimation from "@/components/lottie-animation";

export default function Home() {
  const [counters, setCounters] = useState({
    refund: 0,
    users: 0,
    records: 0,
    satisfaction: 0
  });

  const [heroCounters, setHeroCounters] = useState({
    employees: 0,
    efficiency: 0,
    timeSaved: 0,
    companies: 0
  });

  const [showDetailedCard, setShowDetailedCard] = useState(true);

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (target: number, setter: (val: number) => void, duration: number = 2000) => {
      let current = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, 16);
      return timer;
    };

    // Hero counters animation
    const heroTimer = setTimeout(() => {
      animateCounter(50000, (val) => setHeroCounters(prev => ({ ...prev, employees: val })), 3000);
      setTimeout(() => animateCounter(85, (val) => setHeroCounters(prev => ({ ...prev, efficiency: val })), 2500), 500);
      setTimeout(() => animateCounter(70, (val) => setHeroCounters(prev => ({ ...prev, timeSaved: val })), 2000), 1000);
      setTimeout(() => animateCounter(2500, (val) => setHeroCounters(prev => ({ ...prev, companies: val })), 2500), 1500);
    }, 1000);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(816.73, (val) => setCounters(prev => ({ ...prev, refund: val })));
          animateCounter(7.5, (val) => setCounters(prev => ({ ...prev, users: val })));
          animateCounter(250, (val) => setCounters(prev => ({ ...prev, records: val })));
          animateCounter(95, (val) => setCounters(prev => ({ ...prev, satisfaction: val })));
          observer.disconnect();
        }
      });
    });

    const statsElement = document.getElementById('statistics');
    if (statsElement) observer.observe(statsElement);

    // Toggle between detailed and compact card views
    const cardToggleTimer = setInterval(() => {
      setShowDetailedCard(prev => !prev);
    }, 4000); // Switch every 4 seconds

    return () => {
      clearTimeout(heroTimer);
      clearInterval(cardToggleTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navigation />
      
      {/* Hero Section - Creative Design */}
      <section className="relative pt-8 pb-16 lg:pb-24 overflow-hidden min-h-screen">
        {/* Animated gradient background - Much lighter */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 opacity-30 animate-pulse"></div>
        
        {/* Floating gradient orbs - Much lighter */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-pink-100 to-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge at top */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full shadow-lg border border-white/30 text-gray-800 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping"></div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold">₹{(heroCounters.employees * 0.8).toLocaleString()}.65 Cr</span>
              <span className="ml-1">Payroll processed this year</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Main Headline */}
              <div>
                <motion.h1
                  className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Get Maximum 
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                    HR Efficiency
                  </span>
                </motion.h1>
              </div>
              
              {/* CTA Cards */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ y: -8, rotateX: 5 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="self-service-card"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/95 transition-all">
                    <div className="flex items-start space-x-4 mb-6">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <i className="fas fa-laptop text-white text-2xl"></i>
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-1">Self HR Setup</h3>
                        <p className="text-gray-600 text-sm">100% accuracy</p>
                      </div>
                    </div>
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Setup Now
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ y: -8, rotateX: 5 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="expert-service-card"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/20 hover:bg-white/95 transition-all">
                    <div className="flex items-start space-x-4 mb-6">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                        whileHover={{ rotate: -360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <i className="fas fa-user-tie text-white text-2xl"></i>
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl mb-1">Hire an expert</h3>
                        <p className="text-gray-600 text-sm">Setup in 24 hours</p>
                      </div>
                    </div>
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Right side with professional image and dashboard */}
            <motion.div 
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative">
                {/* Professional woman with gradient overlay */}
                <motion.div
                  className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl"
                  initial={{ scale: 0.9, rotateY: 15 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  whileHover={{ scale: 1.02, rotateY: -5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600"
                    alt="Professional woman using HR software"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20"></div>
                </motion.div>
                
                {/* Dynamic Dashboard Interface - Switches between compact and detailed */}
                <motion.div
                  className="absolute top-4 -left-8"
                  initial={{ opacity: 0, x: -40, y: 30, rotateX: 15 }}
                  animate={{ opacity: 1, x: 0, y: 0, rotateX: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02, rotateX: -2 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {showDetailedCard ? (
                    /* Detailed View */
                    <motion.div
                      className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/30 w-80"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      key="detailed"
                    >
                      {/* Gradient border effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-200 to-blue-200 rounded-3xl blur opacity-30"></div>
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-gray-900 text-lg">Total Savings</h4>
                          <div className="flex items-center space-x-2">
                            <motion.div 
                              className="w-3 h-3 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            ></motion.div>
                            <span className="text-xs text-gray-600 font-medium">Live Processing</span>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
                          animate={{ 
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          ₹1,04,905
                        </motion.div>
                        
                        <div className="space-y-4">
                          {[
                            { label: "Employee Benefits", amount: "₹1,50,000", color: "from-green-300 to-emerald-400" },
                            { label: "Tax Savings", amount: "₹50,000", color: "from-blue-300 to-cyan-400" },
                            { label: "Bonus Calculations", amount: "₹25,000", color: "from-purple-300 to-pink-400" },
                            { label: "Annual Increment", amount: "₹18,405", color: "from-orange-300 to-red-400" }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              className="flex justify-between items-center text-sm group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-gray-700 font-medium">{item.label}</span>
                              <div className="flex items-center space-x-2">
                                <span className={`font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                                  {item.amount}
                                </span>
                                <motion.div 
                                  className={`w-2 h-2 bg-gradient-to-r ${item.color} rounded-full`}
                                  animate={{ scale: [1, 1.3, 1] }}
                                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Compact View */
                    <motion.div
                      className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30 w-48"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      key="compact"
                    >
                      {/* Gradient border effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200 to-purple-200 rounded-2xl blur opacity-30"></div>
                      
                      <div className="relative text-center">
                        <div className="flex items-center justify-center mb-2">
                          <motion.div 
                            className="w-3 h-3 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full mr-2"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          ></motion.div>
                          <span className="text-xs text-gray-600 font-medium">HR Analytics</span>
                        </div>
                        
                        <motion.div 
                          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-1"
                          animate={{ 
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ₹1.04L
                        </motion.div>
                        
                        <div className="text-xs text-gray-600">Total Savings</div>
                        
                        <div className="mt-3 flex justify-center space-x-1">
                          {[1, 2, 3, 4].map((_, index) => (
                            <motion.div
                              key={index}
                              className="w-1 h-4 bg-gradient-to-t from-blue-200 to-purple-300 rounded-full"
                              animate={{ 
                                height: [16, Math.random() * 16 + 8, 16]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: index * 0.2 
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>

                {/* Floating stats cards */}
                <motion.div
                  className="absolute -bottom-6 -right-8 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl p-4 shadow-xl text-gray-800 border border-white/30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 }}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">95%</div>
                    <div className="text-xs text-gray-600 font-medium">Accuracy Rate</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              className="animate-counter"
              whileInView={{ scale: 1.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">₹{counters.refund} Cr</div>
              <div className="text-muted-foreground">Payroll Processed</div>
            </motion.div>
            <motion.div
              className="animate-counter"
              whileInView={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{counters.users}M+</div>
              <div className="text-muted-foreground">Users Trust Us</div>
            </motion.div>
            <motion.div
              className="animate-counter"
              whileInView={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{counters.records}M+</div>
              <div className="text-muted-foreground">Records Managed</div>
            </motion.div>
            <motion.div
              className="animate-counter"
              whileInView={{ scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">{counters.satisfaction}%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <i className="fas fa-cogs mr-2"></i>
              Enterprise Solutions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Complete HR Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our suite of HR management tools designed to help your business grow efficiently and empower your workforce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="HRMS System"
              description="Comprehensive human resource management system for modern organizations."
              features={[
                "Employee profiles & records",
                "Leave & attendance management", 
                "Performance reviews",
                "Organization charts & hierarchy"
              ]}
              icon="fas fa-users"
              iconColor="text-blue-600"
              iconBg="bg-blue-100"
              link="/products/core-hr"
              delay={0}
            />
            
            <ServiceCard
              title="Payroll Management"
              description="Streamline your payroll process with our automated system."
              features={[
                "Automated tax calculations",
                "Salary processing & direct deposits",
                "Compliance & reporting", 
                "Expense management integration"
              ]}
              icon="fas fa-money-bill-wave"
              iconColor="text-green-600"
              iconBg="bg-green-100"
              link="/products/payroll-compliance"
              delay={0.1}
            />

            <ServiceCard
              title="Employee Tracking"
              description="Monitor productivity and engagement across your organization."
              features={[
                "Time tracking & activity monitoring",
                "Productivity analytics",
                "Project progress tracking",
                "Team performance dashboards"
              ]}
              icon="fas fa-chart-bar"
              iconColor="text-purple-600"
              iconBg="bg-purple-100"
              link="/products/fieldforce-management"
              delay={0.2}
            />

            <ServiceCard
              title="Recruitment Platform"
              description="Streamline your hiring process with our AI-powered recruitment solution."
              features={[
                "Applicant tracking",
                "Automated resume screening",
                "Interview scheduling",
                "Candidate pipeline management"
              ]}
              icon="fas fa-user-plus"
              iconColor="text-orange-600"
              iconBg="bg-orange-100"
              link="/services/virtual-hr-team"
              delay={0.3}
            />

            <ServiceCard
              title="HR Analytics Suite"
              description="Powerful analytics tools to gain insights from your workforce data."
              features={[
                "Workforce analytics",
                "Predictive insights",
                "Performance metrics",
                "Custom reporting dashboards"
              ]}
              icon="fas fa-chart-line"
              iconColor="text-red-600"
              iconBg="bg-red-100"
              link="/resources/toolkit"
              delay={0.4}
            />

            <ServiceCard
              title="Performance Management"
              description="Enhance employee development with continuous feedback and goal alignment."
              features={[
                "Goal setting & tracking",
                "Continuous feedback",
                "360-degree reviews",
                "Performance appraisal cycles"
              ]}
              icon="fas fa-trophy"
              iconColor="text-teal-600"
              iconBg="bg-teal-100"
              link="/products/performance-management"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <i className="fas fa-star mr-2"></i>
              Key Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Choose HRNOVA</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our solutions are designed to help your business thrive with efficient HR operations and create a more productive, engaged workforce.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-clock",
                bg: "bg-primary",
                title: "Save Time",
                description: "Automate routine HR tasks and free up your team for strategic initiatives. Reduce manual paperwork by up to 85%.",
                metric: "Boost productivity by up to 35%"
              },
              {
                icon: "fas fa-chart-line", 
                bg: "bg-green-500",
                title: "Data-Driven Decisions",
                description: "Access real-time analytics and reports to make informed decisions about your workforce and business operations.",
                metric: "Better insights"
              },
              {
                icon: "fas fa-shield-alt",
                bg: "bg-red-500", 
                title: "Enhanced Security",
                description: "Keep your employee data secure with enterprise-grade security measures and role-based access controls.",
                metric: "100% secure"
              },
              {
                icon: "fas fa-plug",
                bg: "bg-purple-500",
                title: "Seamless Integration", 
                description: "Integrate with your existing software stack including accounting, ERP, and other business tools.",
                metric: "Easy setup"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-20 h-20 ${benefit.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <i className={`${benefit.icon} text-white text-3xl`}></i>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                <div className="text-primary font-semibold">{benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <i className="fas fa-quote-left mr-2"></i>
              Trusted by Businesses
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Proven Results For Businesses Like Yours</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients have to say about our HR solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <TestimonialCard
              quote="HRNOVA transformed our HR processes. We've reduced time spent on payroll by 70% and can focus on strategic initiatives instead."
              name="Hitesh Kumar"
              position="IT HEAD, Patanjali"
              avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
              delay={0}
            />
            
            <TestimonialCard
              quote="The employee tracking system has been a game-changer for our remote team. We've improved productivity by 25% since implementation."
              name="Yogesh Kumar Maheshwari"
              position="Assistant Manager HR, Wheelseye technology India pvt ltd"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
              delay={0.2}
            />
            
            <TestimonialCard
              quote="HRNOVA's payroll system has eliminated errors and saved us from compliance headaches. The customer support is exceptional as well."
              name="Rahul Kumar"
              position="HR, Discreet India management service pvt ltd"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=64&h=64"
              delay={0.4}
            />
          </div>

          <motion.div
            className="bg-primary rounded-2xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "95%", label: "😊 Customer satisfaction" },
                { value: "30%", label: "📈 Productivity increase" },
                { value: "50%", label: "⏱️ Time saved on HR tasks" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80 text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <i className="fas fa-rupee-sign mr-2"></i>
              HR Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Flexible Pricing Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that works best for your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PricingCard
              title="Hr Policy Design"
              description="Perfect for small businesses"
              price="Free"
              period="/month per user"
              features={[
                "HRMS Core Features",
                "Basic Payroll",
                "Up to 25 employees", 
                "Email support",
                "Advanced reporting",
                "API access"
              ]}
              link="/#contact"
              delay={0}
            />

            <PricingCard
              title="Payroll Management"
              description="Ideal for growing companies"
              price="₹3,000"
              period="/month per user"
              features={[
                "All Starter features",
                "Advanced Payroll",
                "Employee Tracking",
                "Up to 100 employees",
                "Priority support", 
                "API access"
              ]}
              link="/#contact"
              delay={0.1}
            />

            <PricingCard
              title="Virtual HR Team"
              description="Ideal for growing companies"
              price="₹5,000"
              period="/month per user"
              features={[
                "All Starter features",
                "Advanced Payroll",
                "Employee Tracking",
                "Up to 100 employees",
                "Priority support",
                "API access"
              ]}
              link="/#contact"
              isPopular={true}
              delay={0.2}
            />

            <PricingCard
              title="Recruitment"
              description="Ideal for growing companies"
              price="₹9,999"
              period="/month per user"
              features={[
                "All Starter features",
                "Advanced Payroll", 
                "Employee Tracking",
                "Up to 100 employees",
                "Priority support",
                "API access"
              ]}
            link="/#contact"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to transform your HR operations?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule a demo to see how HRNOVA can help your business grow.
          </motion.p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary hover:bg-gray-50 px-12 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="cta-schedule-demo"
          >
            <i className="fas fa-calendar-alt mr-3"></i>
            Schedule Demo
          </motion.button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <i className="fas fa-envelope mr-2"></i>
                Get in Touch
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions? Our team is here to help you choose the right solution for your business.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "fas fa-envelope",
                    title: "Email",
                    content: "prabhat@cloudpay.co.in"
                  },
                  {
                    icon: "fas fa-phone", 
                    title: "Phone",
                    content: "+91-9990227900"
                  },
                  {
                    icon: "fas fa-map-marker-alt",
                    title: "Office",
                    content: "SCO-59, Huda Market, Sector 9\nFaridabad 121006"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      <i className={`${contact.icon} text-primary`}></i>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{contact.title}</div>
                      <div className="text-muted-foreground whitespace-pre-line">{contact.content}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
