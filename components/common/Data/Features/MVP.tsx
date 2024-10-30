'use client';
import React, { useState } from 'react';

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

// Props
interface Props {
  setShowContent: React.Dispatch<React.SetStateAction<ShowContentProps>>;
}

export const FeaturesMVP = ({ setShowContent }: Props) => {
  const [isCloseIconHover, setIsCloseIconHover] = useState(false);

  const { setWord, setInfo, setIsClicked, setWordPosition } = useMoreInfoWordAnimationHandler();

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
          <p className="text-[60px] font-bold">MVP Version</p>
          <p className="mt-5">
            This release primarily <span className="font-semibold">focuses on the First Launch</span>, delivering
            enhanced core functionalities with an emphasis on improved UI/UX.
          </p>
          <p className="mt-5">Key features in this version include:</p>
          <ul className="list-disc pl-8 text-sm">
            <li>All essential core functionalities</li>
            <li>Ability to create new projects</li>
            <li>Save projects as drafts</li>
            <li>One-click sharing with customizable access rights (view only / view + edit)</li>
            <li>Option for custom watermarks, including “Made with Soner” branding</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};
