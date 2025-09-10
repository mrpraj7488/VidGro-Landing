// Animation configurations and utilities
export const animationConfig = {
  // Entry Animations (on scroll into view)
  fadeInUp: {
    duration: 0.6,
    delay: 0.1, // Stagger children by 0.1s
    easing: "cubic-bezier(0.16, 1, 0.3, 1)", // Smooth deceleration
  },
  
  // Hover Interactions
  buttonHover: {
    scale: 1.05,
    duration: 0.2,
    shadowSpread: "20px",
  },
  
  // Coin Animations
  coinFloat: {
    duration: 3,
    yoyo: true,
    repeat: Infinity,
    rotateZ: 360,
  },
  
  // Number Counters
  countUp: {
    duration: 2.5,
    easing: "easeOutExpo",
    decimals: 0,
    suffix: "+",
  },
  
  // Page Transitions
  pageLoad: {
    heroDelay: 0,
    socialProofDelay: 0.3,
    featuresDelay: 0.6,
    ctaDelay: 0.9,
  }
};

export const scrollTriggers = {
  25: () => "📺 12,456 videos promoted today",
  50: () => "🚀 Real creators, real growth",
  75: () => "💎 Join the VIP community",
  90: () => "⚡ Last chance for bonus coins"
};

// Utility functions for animations
export const getRandomDelay = (min: number = 0, max: number = 0.5) => {
  return Math.random() * (max - min) + min;
};

export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => {
  return index * baseDelay;
};

export const coinPhysics = {
  gravity: 0.5,
  bounce: 0.7,
  friction: 0.98,
  magnetStrength: 0.1,
  magnetRadius: 100
};

export const particleConfig = {
  count: 20,
  colors: ['#F59E0B', '#FCD34D', '#FDE047'],
  sizes: [8, 12, 16],
  velocities: {
    x: { min: -5, max: 5 },
    y: { min: -10, max: -5 }
  }
};