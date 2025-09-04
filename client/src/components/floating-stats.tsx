import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FloatingStatsProps {
  value: string;
  label: string;
  icon: string;
  delay?: number;
  className?: string;
}

export default function FloatingStats({ 
  value, 
  label, 
  icon, 
  delay = 0,
  className = "" 
}: FloatingStatsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: delay
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`bg-white rounded-xl p-4 shadow-lg animate-float ${className}`}
      style={{ animationDelay: `${delay * 0.5}s` }}
      data-testid={`floating-stats-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <i className={`${icon} text-green-600`}></i>
        </div>
        <div>
          <div className="text-2xl font-bold text-foreground">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}
