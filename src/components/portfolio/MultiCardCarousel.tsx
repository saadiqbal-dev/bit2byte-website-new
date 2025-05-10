import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types/portfolio';
import { CarouselCard } from './CarouselCard';
import { CarouselControls } from './CarouselControls';
import { CarouselIndicators } from './CarouselIndicators';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MultiCardCarouselProps {
  projects: Project[];
}

export const MultiCardCarousel: React.FC<MultiCardCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getVisibleProjects = () => {
    if (isMobile) {
      return [{
        project: projects[currentIndex],
        position: 'center',
        index: currentIndex,
      }];
    }

    const visibleProjects = [];
    const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    visibleProjects.push({
      project: projects[previousIndex],
      position: 'left',
      index: previousIndex,
    });
    visibleProjects.push({
      project: projects[currentIndex],
      position: 'center',
      index: currentIndex,
    });
    visibleProjects.push({
      project: projects[nextIndex],
      position: 'right',
      index: nextIndex,
    });

    return visibleProjects;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16">
      <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] overflow-visible">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {getVisibleProjects().map(({ project, position, index }) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? {} : {
                  scale: 0.8,
                  opacity: 0,
                  x: position === 'left' ? -100 : position === 'right' ? 100 : 0
                }}
                animate={{
                  scale: position === 'center' ? 1 : isMobile ? 1 : 0.8,
                  x: isMobile ? 0 : position === 'left' ? '-60%' : position === 'right' ? '60%' : 0,
                  zIndex: position === 'center' ? 2 : 1,
                  opacity: position === 'center' ? 1 : isMobile ? 1 : 0.5,
                }}
                exit={prefersReducedMotion ? {} : {
                  scale: 0.8,
                  opacity: 0,
                  x: position === 'left' ? -100 : position === 'right' ? 100 : 0
                }}
                transition={{ duration: 0.5 }}
                className={`absolute w-full ${isMobile ? 'max-w-md' : 'max-w-2xl'}`}
              >
                <CarouselCard project={project} isActive={position === 'center'} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <CarouselControls 
          onPrevious={handlePrevious} 
          onNext={handleNext}
          className="hidden sm:block"
        />
        <CarouselIndicators
          total={projects.length}
          current={currentIndex}
          onChange={setCurrentIndex}
        />
      </div>
    </div>
  );
};