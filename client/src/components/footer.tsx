import AboutUs from "@/pages/about/about-us";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
 
   
    <footer className="bg-card border-t border-border py-16">
          
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">HRNOVA</h3>
            <p className="text-muted-foreground mb-6">
              Complete HR solutions designed to help your business grow efficiently and empower your workforce.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fab fa-linkedin', href: '#' },
                { icon: 'fab fa-twitter', href: '#' },
                { icon: 'fab fa-facebook', href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  data-testid={`social-link-${index}`}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-card-foreground mb-6">Solutions</h4>
            <ul className="space-y-3">
              {[
                { label: 'HRMS System', href: '/products/core-hr' },
                { label: 'Payroll Management', href: '/products/payroll-compliance' },
                { label: 'Employee Tracking', href: '/products/fieldforce-management' },
                { label: 'Compliance Management', href: '/products/compliance-management' },
                { label: 'Leave & Attendance', href: '/products/leave-attendance' }
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-card-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                'Documentation',
                'API Reference',
                'Help Center',
                'Blog',
                'Case Studies'
              ].map((item) => (
                <li key={item}>
                  <motion.a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-resource-${item.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-card-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', action: () =>  { window.location.href = '/about/about-us'; } },
                { label: 'Careers', action: () => { window.location.href = '/about/careers'; } },
                { label: 'Privacy Policy', action: () => {} },
                { label: 'Terms of Service', action: () => {} },
                { label: 'Contact', action: () => scrollToSection('contact') }
              ].map((item) => (
                <li key={item.label}>
                  <motion.button
                    onClick={item.action}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    whileHover={{ x: 5 }}
                    data-testid={`footer-company-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground">
            © 2025 HRNOVA. All rights reserved. Empowering businesses with smart HR solutions.
          </p>
        </motion.div>
      </div>
  
    </footer>
    </div>
  );
}
