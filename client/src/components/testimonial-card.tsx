import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  avatar: string;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  name,
  position,
  avatar,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="bg-card border border-border rounded-xl p-8 relative overflow-hidden"
      data-testid={`testimonial-card-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + 0.2 }}
        >
          <div className="flex text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.i
                key={star}
                className="fas fa-star"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.3 + (star * 0.1) }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.p
          className="text-card-foreground text-lg mb-6 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        >
          "{quote}"
        </motion.p>
        
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          <motion.img
            src={avatar}
            alt={`${name} profile`}
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          />
          <div>
            <div className="font-semibold text-card-foreground">{name}</div>
            <div className="text-muted-foreground text-sm">{position}</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
