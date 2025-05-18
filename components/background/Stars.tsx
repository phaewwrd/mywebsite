'use client'
import { motion } from "framer-motion";

export function Stars() {
    

  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 4 + 1, // ขนาด 1-4px
    duration: Math.random() * 2 + 1, // ความเร็ววิ๊ง 1-3 วินาที
    delay: Math.random() * 3, // ช้าเร็วต่างกัน
  }));
  return (
    <div>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="bg-white rounded-full absolute"
          style={{
            top: star.top,
            left: star.left,
            width: star.size + "px",
            height: star.size + "px",
            opacity: 0.8,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
