'use client';

import React from 'react';

// Framer Motion
import { motion, AnimatePresence, cubicBezier } from 'framer-motion';

// Motion handler
import { useMoreInfoWordAnimationHandler } from '@/lib';
import { useWindowSize } from '@/hooks/useWindowSize';
import { CloseIcon } from '@/icons';

export const MoreInfoWord: React.FC = () => {
  const { isClicked, Info, word, wordPosition, setIsClicked, dimensions } = useMoreInfoWordAnimationHandler();

  const { height, width } = useWindowSize();

  return (
    <>
      <AnimatePresence>
        {isClicked && (
          <motion.div
            initial={{
              backgroundColor: '#fff5ea00',
            }}
            animate={{
              backgroundColor: '#fff5ea',
            }}
            exit={{
              backgroundColor: '#fff5ea00',
            }}
            transition={{
              duration: 0.3,
              ease: cubicBezier(0.8, 0, 0.2, 1),
            }}
            className="fixed top-0 z-50 h-screen w-full"
            // onClick={() => {
            //   setIsClicked(false);
            // }}
          >
            <motion.div
              initial={{
                x: wordPosition.x,
                y: wordPosition.y,
                opacity: 1,
              }}
              animate={{
                x: width / 2 - dimensions.width / 2 - 300,
                y: height / 2 - dimensions.height / 2 - 100,
                opacity: 1,
                transition: {
                  ease: cubicBezier(0.8, 0, 0.2, 1),
                },
              }}
              exit={{
                x: wordPosition.x,
                y: wordPosition.y - 2,
                opacity: 1,
                transition: {
                  ease: cubicBezier(0.8, 0, 0.2, 1),
                  duration: 0.375,
                },
                transitionEnd: {
                  opacity: 0,
                },
              }}
              className="absolute flex items-center gap-2 text-black underline underline-offset-2"
            >
              {word}
            </motion.div>
            <motion.div
              initial={{
                x: width / 2 - dimensions.width / 2 - 300,
                y: height / 2 - dimensions.height / 2 - 100 + 30,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0,
                  duration: 0,
                },
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute w-[700px]"
            >
              <Info />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                },
              }}
              exit={{
                opacity: 0,
                transition: {
                  delay: 0,
                  duration: 0,
                },
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute bottom-8 left-[50%] -translate-x-1/2 cursor-pointer rounded-full p-6 duration-200 hover:bg-[#feefdb]"
              onClick={() => {
                setIsClicked(false);
              }}
            >
              <CloseIcon />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
