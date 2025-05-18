import { motion } from "framer-motion";

export default function Fog() {
  const fogs = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    size: Math.random() * 70 + 1, // ขนาด 1-4px
    duration: Math.random() * 10 + 1, // ความเร็ววิ๊ง 1-3 วินาที
    delay: Math.random() * 10, // ช้าเร็วต่างกัน
  }));
  return (
    <div>
      {fogs.map((fog) => (
        <motion.div
          key={fog.id}
          className="bg-yellow-100 rounded-full absolute"
          style={{
            top: fog.top,
            left: fog.left,
            width: fog.size + "px",
            height: fog.size + "px",
            opacity: 0.1,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: fog.duration,
            delay: fog.delay,
            repeat: Infinity,
            ease: "circInOut",
          }}
        />
      ))}
    </div>
  );
}
