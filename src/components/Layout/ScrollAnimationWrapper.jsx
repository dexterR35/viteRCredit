import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimize viewport settings for mobile (keep animations but optimized)
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ 
        once: true, 
        amount: isMobile ? 0.2 : 0.1, // Trigger earlier on mobile
        margin: isMobile ? "-50px" : "-100px" // Less margin on mobile
      }}
      style={{ willChange: "transform, opacity" }} // GPU acceleration
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
