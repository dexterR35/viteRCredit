export default function getScrollAnimation() {
  // Detect mobile for lighter animations
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return {
    offscreen: {
      y: isMobile ? 20 : 50, // Less movement on mobile
      opacity: 0,
    },
    onscreen: ({ duration = 0.5 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: isMobile ? Math.min(duration, 0.4) : duration, // Faster on mobile
      },
    }),
  };
}
