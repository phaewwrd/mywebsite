'use client'
import Image from "next/image";
import { motion } from 'framer-motion'

export default function Leaf({}) {

  return (
    <div>
      {/* Leaf Left with animation */}
      <motion.div
        className="absolute top-0 left-0"
        animate={{ rotate: [-40, 10, -40] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <Image src="/leaf-left.png" alt="leaf-left" width={100} height={100} />
      </motion.div>
      {/* Leaf Right with animation */}
      <motion.div
        className="absolute top-20 right-0"
        animate={{ rotate: [0, -30, 30] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <Image
          src="/leaf-right.png"
          alt="leaf-right"
          width={120}
          height={100}
        />
      </motion.div>
    </div>
  );
}
