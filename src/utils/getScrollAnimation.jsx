export default function getScrollAnimation() {
  return {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: ({ duration = 0.5 } = {}) => ({
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
