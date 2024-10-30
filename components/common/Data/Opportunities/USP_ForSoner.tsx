'use client';
import React, { useRef, useState } from 'react';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

// Types
import { ShowContentProps } from '@/types';

// Icons
import { CloseIcon } from '@/icons';

// Motion Variants
import {
  articleCloseIconHoverTextVariant,
  articleCloseIconVariant,
  feedbackArticleContainerVariant,
  feedbackArticleVariant,
} from '@/lib/motionVariant';

// Hooks
import { useMoreInfoWordAnimationHandler } from '@/lib';
import useKeyBinder from '@/hooks/useKeyBinder';

// Components
import { MoreInfoWordWrapper } from '@/components/feature';

// Props
interface Props {
  setShowContent: React.Dispatch<React.SetStateAction<ShowContentProps>>;
}

export const USP_forSoner = ({ setShowContent }: Props) => {
  const [isCloseIconHover, setIsCloseIconHover] = useState(false);

  const { setWord, setInfo, setIsClicked, setWordPosition } = useMoreInfoWordAnimationHandler();

  const wordOneRef = useRef<HTMLSpanElement>(null);

  useKeyBinder({
    key: 'Escape',
    func: () => {
      setIsClicked(false);
      setWord('');
      setInfo(() => null);
      setWordPosition({ x: 0, y: 0 });
    },
  });

  return (
    <motion.div
      variants={feedbackArticleContainerVariant}
      transition={{
        duration: 0.1,
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="relative left-0 top-0 z-20 min-h-screen w-full bg-[#feefdb]"
    >
      <div className="pointer-events-none fixed bottom-0 left-0 z-20 flex h-[150px] w-full justify-center bg-gradient-to-t from-[#feefdb] to-[#feefdb00]" />
      <motion.div
        variants={articleCloseIconVariant}
        transition={{
          ease: 'easeInOut',
          duration: 0.5,
          type: 'spring',
          left: '50%',
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="absolute left-[50%] top-[100px] z-30 cursor-pointer"
        onClick={() => {
          setShowContent(null);
          setIsCloseIconHover(false);
        }}
        onMouseEnter={() => {
          setIsCloseIconHover(true);
        }}
        onMouseLeave={() => {
          setIsCloseIconHover(false);
        }}
      >
        <CloseIcon className="text-[20px]" />
      </motion.div>
      <AnimatePresence>
        {isCloseIconHover && (
          <motion.div
            variants={articleCloseIconHoverTextVariant}
            transition={{
              duration: 0.1,
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="pointer-events-none absolute left-[50%] top-[70px] rounded-full bg-[#e7d4bf] px-3 py-1 text-[12px] font-medium text-[#583c2a]"
          >
            <span>close</span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={feedbackArticleVariant(isCloseIconHover)}
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
          type: 'spring',
          left: '50%',
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex min-h-screen justify-center"
      >
        <div className="mb-[20vh] mt-[200px] w-[70%] rounded-[40px] bg-[#fff5ea] px-[100px] pb-[100px] pt-[80px] shadow-lg">
          <p className="text-[60px] font-bold">Unique Selling Points</p>
          <p className="mt-5">
            My aim behind creating Soner is to provide a
            <span className="font-semibold">
              <MoreInfoWordWrapper
                infoWord="completely open source"
                infoDesc={
                  <div className="leading-tight">
                    <p className="text-base leading-snug">
                      <span className="font-semibold">A completely open source</span> project doesn’t mean it’s entirely
                      free to use. Soner operates on a
                      <span className="font-semibold"> subscription-based pricing model.</span>
                    </p>
                    <p className="mt-2 text-base leading-snug">
                      Features and components are divided into
                      <span className="font-semibold"> three pricing tiers.</span> More on the pricing model later.
                    </p>
                  </div>
                }
                wordRef={wordOneRef}
              />
            </span>
            tool to streamline offline exam and test series preparation. Soner is accessible to everyone, regardless of
            technical skill, saving time and effort for all users.
          </p>
          <p className="mt-5 font-semibold">What sets Soner apart:</p>
          <ul className="mt-2 list-disc pl-8 text-sm">
            <li>Only 3 steps to complete setup</li>
            <li>Extremely user-friendly and easy to navigate</li>
            <li>High level of customizability and control</li>
            <li>Pre-built templates for a quick start</li>
            <li>Reusable layouts and components</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
