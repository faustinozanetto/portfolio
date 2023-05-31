'use client';
import useRevealOnScroll from '@modules/common/hooks/use-reveal-on-scroll';
import IconButton from '@modules/ui/components/icon-button/icon-button';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const HomeScrollTop: React.FC = () => {
  const { show } = useRevealOnScroll({ revealScroll: 200 });

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key="home-scroll-top"
          className="fixed right-4 bottom-4 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <IconButton
            onClick={handleScrollTop}
            aria-label="Scroll to Top"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-current"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="16" y1="9" x2="12" y2="5" />
                <line x1="8" y1="9" x2="12" y2="5" />
              </svg>
            }
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeScrollTop;
