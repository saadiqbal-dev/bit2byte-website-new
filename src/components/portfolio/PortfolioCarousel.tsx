import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { CarouselControls } from './CarouselControls';
import { CarouselSlide } from './CarouselSlide';
import { CarouselIndicators } from './CarouselIndicators';

interface PortfolioCarouselProps {
  projects: Project[];
}

export const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full"
          >
            <CarouselSlide project={projects[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        <CarouselControls onPrevious={() => paginate(-1)} onNext={() => paginate(1)} />
        <CarouselIndicators 
          total={projects.length} 
          current={currentIndex} 
          onChange={(index) => {
            setDirection(index > currentIndex ? 1 : -1);
            setCurrentIndex(index);
          }} 
        />
      </div>
    </div>
  );
};