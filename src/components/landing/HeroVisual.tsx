import { motion } from "framer-motion";

/**
 * Centered radial-rings hero backdrop with a floating product chip.
 * Inspired by concentric "ripple" hero — adapted to teal palette.
 */
export function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* concentric rings */}
      <div className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: `${i * 220}px`,
              height: `${i * 220}px`,
              marginLeft: `-${i * 110}px`,
              marginTop: `-${i * 110}px`,
            }}
            className="absolute rounded-full border border-primary/15"
          />
        ))}
      </div>

      {/* soft color wash */}
      <div className="absolute left-1/2 top-[58%] h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl" />
    </div>
  );
}
