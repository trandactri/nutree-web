'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';
import { FloatingIcon } from './FloatingIcon';

interface FlipPhoneProps {
  frontImage: string;
  backImage: string;
  frontIcons?: { emoji: string; position: string; delay: number }[];
  backIcons?: { emoji: string; position: string; delay: number }[];
}

export function FlipPhone({ frontImage, backImage, frontIcons = [], backIcons = [] }: FlipPhoneProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Tap instruction with emoji */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-1 mb-8 pointer-events-none"
      >
        {/* Text with bounce animation */}
        <motion.span
          className="text-base sm:text-lg text-muted/80 font-medium"
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          Tap to flip
        </motion.span>
        {/* Down arrow emoji with bounce */}
        <motion.div
          className="text-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          👇
        </motion.div>
      </motion.div>

      {/* Phone container */}
      <motion.div
        className="cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, rotateY: -20 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.6 }}
        style={{ perspective: 1000 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/20 via-primary-forest/15 to-transparent rounded-[3rem] blur-xl scale-105" />

        {/* Rotating container */}
        <motion.div
          className="relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div className="relative backface-hidden">
            <PhoneMockup variant="floating" backgroundImage={frontImage} />
            {frontIcons.map((icon) => (
              <FloatingIcon
                key={`front-${icon.emoji}`}
                emoji={icon.emoji}
                className={icon.position}
                delay={icon.delay}
                size="md"
              />
            ))}
          </div>

          {/* Back (flipped 180deg) */}
          <div
            className="absolute inset-0 backface-hidden"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <PhoneMockup variant="floating" backgroundImage={backImage} />
            {backIcons.map((icon) => (
              <FloatingIcon
                key={`back-${icon.emoji}`}
                emoji={icon.emoji}
                className={icon.position}
                delay={icon.delay}
                size="md"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6 mb-32 sm:mb-6">
        <motion.div
          className={`w-2 h-2 rounded-full ${!isFlipped ? 'bg-primary-teal' : 'bg-muted/40'}`}
          animate={{ scale: !isFlipped ? 1.2 : 1 }}
        />
        <motion.div
          className={`w-2 h-2 rounded-full ${isFlipped ? 'bg-primary-teal' : 'bg-muted/40'}`}
          animate={{ scale: isFlipped ? 1.2 : 1 }}
        />
      </div>
    </div>
  );
}
