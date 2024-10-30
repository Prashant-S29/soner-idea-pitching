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

export const AboutSoner = ({ setShowContent }: Props) => {
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
          <p className="text-[60px] font-bold">Introduction to Soner</p>
          <p className="mt-5">
            <span className="font-semibold">
              Soner is a fully managed, customizable, one-stop solution to build all types of question papers without
              even opening a document editor
            </span>
            (
            <MoreInfoWordWrapper
              infoWord="not kidding"
              infoDesc={
                <p>
                  <span className="font-semibold">Docs are great,</span> but not when there are many things to manage.
                  With Soner 🤔, you can simply{' '}
                  <span className="font-semibold">
                    drag and drop questions, and they’ll be automatically formatted and saved in your editor.
                  </span>
                </p>
              }
              wordRef={wordOneRef}
            />
            ). It offers user-friendly UI components that can be dragged and dropped onto a canvas to create question
            papers tailored to your style and requirements. Soner helps you save hours of hard work and enables you to{' '}
            <span className="font-semibold">build question papers in just 3 easy steps.</span>
          </p>
          <p className="mt-5">
            At a high level, Soner provides an abstraction layer over all the features needed to create a professional
            question paper within a user-friendly editor. This allows users to focus more on the content and worry less
            about layout and structuring.
          </p>
          <p className="mt-5">
            <span className="font-semibold">
              Soner is primarily designed for school and college teachers, as well as tutors and coaching institutes
            </span>
            &nbsp; where there’s a need to prepare papers for every test series and examination.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
