'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  achievement?: string;
  rating: number;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'Nutree AI completely changed how I track my food. The AI is incredibly accurate and saves me so much time every day. I finally hit my protein goals consistently!',
    author: 'Sarah M.',
    role: 'Fitness Enthusiast',
    achievement: 'Lost 15 lbs in 3 months',
    rating: 5,
    avatar: 'SM',
  },
  {
    id: '2',
    quote: 'As a busy professional, I never had time to manually log meals. Now I just snap a photo and I am done. The meal planning feature is a game changer for my weekly prep.',
    author: 'David K.',
    role: 'Software Engineer',
    achievement: 'Gained 10 lbs muscle',
    rating: 5,
    avatar: 'DK',
  },
  {
    id: '3',
    quote: 'I have tried every nutrition app out there. Nutree AI is by far the most accurate and easiest to use. The Vietnamese language support is perfect for my family.',
    author: 'Linh T.',
    role: 'Working Mom',
    achievement: 'Whole family tracking',
    rating: 5,
    avatar: 'LT',
  },
  {
    id: '4',
    quote: 'The AI meal suggestions are spot on. It learned my preferences quickly and now suggests meals I actually want to eat. Down 20 lbs and counting!',
    author: 'Marcus J.',
    role: 'Personal Trainer',
    achievement: 'Recommends to clients',
    rating: 5,
    avatar: 'MJ',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={cn('w-4 h-4', i < rating ? 'text-yellow-400' : 'text-gray-200')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const activeTestimonial = TESTIMONIALS[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-forest/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            Loved by <span className="gradient-text">thousands</span>
          </h2>
          <p className="section-subtitle">
            See what our users say about their nutrition transformation.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 text-primary-forest/10">
              <svg className="w-12 h-12 md:w-16 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  <StarRating rating={activeTestimonial.rating} />
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  &ldquo;{activeTestimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-brand flex items-center justify-center text-white font-display font-bold">
                    {activeTestimonial.avatar}
                  </div>

                  <div className="text-left">
                    <div className="font-display font-bold text-foreground">
                      {activeTestimonial.author}
                    </div>
                    <div className="text-sm text-muted">{activeTestimonial.role}</div>
                    {activeTestimonial.achievement && (
                      <div className="text-sm text-primary-teal font-medium mt-0.5">
                        {activeTestimonial.achievement}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-border hover:border-primary-forest hover:bg-primary-forest/5 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-border hover:border-primary-forest hover:bg-primary-forest/5 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      index === activeIndex
                        ? 'w-6 bg-primary-teal'
                        : 'bg-border hover:bg-muted'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
