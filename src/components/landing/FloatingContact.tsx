import { Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingContact() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 12, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="bg-primary-dark text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg pointer-events-none"
          >
            psicon.contato@gmail.com
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="mailto:psicon.contato@gmail.com"
        aria-label="Entrar em contato"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-[0_4px_24px_rgba(77,125,132,0.45)] flex items-center justify-center"
      >
        <Mail size={20} />
      </motion.a>
    </div>
  );
}
