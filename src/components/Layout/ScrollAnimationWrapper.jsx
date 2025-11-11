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

  // Disable animations on mobile for better performance
  if (isMobile) {
    return <div className={className} {...props}>{children}</div>;
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1, margin: "-100px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
