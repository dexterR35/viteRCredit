export default function getScrollAnimation() {
  return {
    offscreen: {
      y: 30, // Reduced from 50 for smoother, less jarring animation
      opacity: 0,
    },
    onscreen: ({ duration = 0.4 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: "easeOut",
        duration: duration,
      },
    }),
  };
}
