import { motion } from "framer-motion";
import { useState } from "react";
import LottieAnimation from "./lottie-animation";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  iconColor: string;
  iconBg: string;
  link: string;
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon,
  iconColor,
  iconBg,
  link,
  delay = 0
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="service-card bg-card border border-border rounded-xl p-8 hover:shadow-lg"
      data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <motion.div 
        className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center mb-6 relative overflow-hidden`}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <i className={`${icon} ${iconColor} text-2xl z-10`}></i>
        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>

      <h3 className="text-2xl font-bold text-card-foreground mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + (index * 0.1) }}
            className="flex items-center text-sm text-muted-foreground"
          >
            <i className="fas fa-check text-green-500 mr-3"></i>
            {feature}
          </motion.li>
        ))}
      </ul>
      
      <motion.a
        href={link}
        className="text-primary hover:text-primary/80 font-semibold inline-flex items-center group"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
        data-testid={`service-card-link-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        Explore solution 
        <motion.i 
          className="fas fa-arrow-right ml-2"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.a>
    </motion.div>
  );
}
