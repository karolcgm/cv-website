import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

const Card = ({ title, children, delay = 0 }: CardProps) => {
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        className="card"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <h2 className="card-title">{title}</h2>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Card; 