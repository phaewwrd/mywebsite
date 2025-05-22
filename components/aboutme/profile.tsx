'use client';

import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';


export default function Profile() {
  const messages = [
    "Greeting! I'm Praew.",
    "Welcome to my portfolio!",
    "Full Stack Designer & Developer.",
  ];

  const typingSpeed = 100;
  const pauseDuration = 3000;

  const [textIndex, setTextIndex] = useState(0); // ข้อความที่แสดงอยู่
  const [charIndex, setCharIndex] = useState(0); // จำนวนตัวอักษรที่แสดง
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const currentText = messages[textIndex];
    let timeout: NodeJS.Timeout;

    if (charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else {
      // พิมพ์ครบ → รอ pauseDuration → ไปข้อความถัดไป
      timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % messages.length); // วนกลับไปข้อความแรก
      }, pauseDuration);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex]);

  return (
    <div className="text-center bg-slate-900 py-20 text-white pt-40">
      <div
        className="text-[clamp(2rem,6vmin,10rem)] font-extrabold leading-none"
        style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
        }}
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </div>

      <div>
        <div className="text-2xl font-bold flex justify-center place-items-center gap-5">
          <div className="text-slate-500">Full Stack Designer & Developer</div>
        </div>
        <div className="text-xl mx-auto mt-2 max-w-3xl px-5">
          "I am a passionate full-stack designer and developer with a love for creating beautiful and functional web applications. I thrive on challenges and enjoy learning new technologies to enhance my skills."
        </div>
      </div>
    </div>
  );
}
