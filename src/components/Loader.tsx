import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[rgb(10,10,30)] to-[rgb(30,30,70)] z-50">
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-24 h-24 border-t-4 border-b-4 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="w-16 h-16 border-t-4 border-b-4 border-secondary rounded-full absolute"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-white text-xl font-semibold animate-pulse"
        >
          Ładowanie Portfolio...
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mt-4 rounded-full w-48"
        />
      </div>
    </div>
  );
};

export default Loader; 