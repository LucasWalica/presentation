import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for tracking the mouse
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Small offset to center the reticle
      mouseX.set(e.clientX - 10); 
      mouseY.set(e.clientY - 10);
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      // Check if we are hovering over an interactive element
      const isInteractive = target.closest('button, a, .group');
      setIsHovering(!!isInteractive);
      
      // If it's a project section or similar, we can show a 'SCAN' text
      if (target.closest('#projects')) {
        setCursorText('SCAN');
      } else {
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* The main reticle box */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="fixed w-5 h-5 flex items-center justify-center"
      >
        {/* Corner Brackets */}
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: isHovering ? 1.5 : 1,
              rotate: isHovering ? 90 : 0,
              opacity: isHovering ? 1 : 0.4
            }}
            className="w-full h-full relative"
          >
            {/* Top Left */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-custom-neonGreen"></div>
            {/* Top Right */}
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-custom-neonGreen"></div>
            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-custom-neonGreen"></div>
            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-custom-neonGreen"></div>
          </motion.div>
        </div>

        {/* Center Dot */}
        <motion.div 
          animate={{ 
            scale: isHovering ? 0.5 : 1,
            backgroundColor: isHovering ? '#00f3ff' : '#39ff14' 
          }}
          className="w-1 h-1 bg-custom-neonGreen rounded-full"
        />

        {/* Scan Text */}
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 20 }}
              exit={{ opacity: 0 }}
              className="absolute text-[8px] font-mono text-custom-neonGreen tracking-[0.2em]"
            >
              [{cursorText}]
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trailing faint ring */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{ 
          scale: isHovering ? 2.5 : 1.2,
          opacity: isHovering ? 0.2 : 0.05
        }}
        className="fixed w-5 h-5 border border-custom-neonGreen rounded-full"
        transition={{ type: 'spring', stiffness: 200, damping: 40 }}
      />
    </div>
  );
}

// Minimal AnimatePresence mock if not imported
function AnimatePresence({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
