import { ReactNode, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Card = ({ title, children, className = '', delay = 0 }: CardProps) => {
  // Używane do efektu przechylania karty
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  
  // Zaawansowane zmienne ruchu z framer-motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Sprężystość ruchu
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // Transform używany do efektu 3D - bardzo delikatny efekt
  const rotateX = useTransform(ySpring, [-50, 50], [2, -2]);
  const rotateY = useTransform(xSpring, [-50, 50], [-2, 2]);
  
  // Efekt uniesienia karty
  const scale = useSpring(hovered ? 1.02 : 1, springConfig);

  // Obsługa ruchu myszą nad kartą
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    
    // Obliczanie pozycji względem środka elementu
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Pozycja kursora względem środka elementu
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Aktualizacja pozycji dla efektu
    x.set(mouseX / 8); // Dzielenie aby zmniejszyć intensywność efektu
    y.set(mouseY / 8);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Reset pozycji
    x.set(0);
    y.set(0);
  };

  // Efekt świecenia podążający za kursorem
  const glowX = useTransform(xSpring, [-50, 50], ['-20%', '120%']);
  const glowY = useTransform(ySpring, [-50, 50], ['-20%', '120%']);

  return (
    <motion.div
      className={`card-container ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className="card relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.98 }}
      >
        {/* Efekt świecący podążający za kursorem */}
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(99, 102, 241, 0.15), transparent 70%)`,
              zIndex: 0,
            }}
          />
        )}
        
        {/* Contenwy karty */}
        <div className="relative z-10">
          <h2 className="card-title">{title}</h2>
          <div className="card-content">{children}</div>
        </div>
        
        {/* Błyszczące krawędzie */}
        <motion.div 
          className={`absolute inset-0 pointer-events-none border border-transparent rounded-2xl transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(130deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.1), rgba(99, 102, 241, 0.2))',
            backgroundSize: '300% 300%',
            filter: 'blur(1px)',
            animationDuration: '3s',
            animationIterationCount: 'infinite',
            animationName: 'shimmerAnimation',
            animationTimingFunction: 'ease-in-out',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card; 