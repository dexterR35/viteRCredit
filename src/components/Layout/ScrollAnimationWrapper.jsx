import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  
  const viewportConfig = useMemo(() => ({
    once: true,
    amount: shouldReduceMotion ? 0 : 0.1,
    margin: "-50px" // Reduced margin for better performance
  }), [shouldReduceMotion]);

  const variants = useMemo(() => {
    if (shouldReduceMotion) {
      return {
        offscreen: { opacity: 0 },
        onscreen: { opacity: 1, transition: { duration: 0.2 } }
      };
    }
    return {
      offscreen: { y: 30, opacity: 0 },
      onscreen: { 
        y: 0, 
        opacity: 1, 
        transition: { 
          type: "tween",
          ease: "easeOut",
          duration: 0.4 
        } 
      }
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewportConfig}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
