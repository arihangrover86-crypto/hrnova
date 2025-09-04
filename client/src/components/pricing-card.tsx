import { motion } from "framer-motion";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  link: string;
  isPopular?: boolean;
  delay?: number;
}

export default function PricingCard({
  title,
  description,
  price,
  period,
  features,
  link,
  isPopular = false,
  delay = 0
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`bg-card ${isPopular ? 'border-2 border-primary' : 'border border-border'} rounded-xl p-8 relative`}
      data-testid={`pricing-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {isPopular && (
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
            MOST POPULAR
          </div>
        </motion.div>
      )}
      
      <div className="text-center mb-8">
        <motion.h3
          className="text-2xl font-bold text-card-foreground mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-muted-foreground mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="text-4xl font-bold text-card-foreground mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.4 }}
        >
          {price}
        </motion.div>
        <motion.div
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        >
          {period}
        </motion.div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.6 + (index * 0.1) }}
          >
            <i className="fas fa-check text-green-500 mr-3"></i>
            <span className="text-muted-foreground">{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      <motion.a
        href={link}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-semibold text-center block transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        data-testid={`pricing-card-button-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        Get Started
      </motion.a>
    </motion.div>
  );
}
