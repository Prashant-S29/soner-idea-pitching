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

export const Philosophy = ({ setShowContent }: Props) => {
  const [isCloseIconHover, setIsCloseIconHover] = useState(false);

  const { setWord, setInfo, setIsClicked, setWordPosition } = useMoreInfoWordAnimationHandler();

  const wordOneRef = useRef<HTMLSpanElement>(null);
  const wordTwoRef = useRef<HTMLSpanElement>(null);

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
          <p className="text-[60px] font-bold">Philosophy</p>
          <p className="mt-2">
            In recent years, I had the
            <MoreInfoWordWrapper
              infoWord="chance"
              infoDesc={
                <div className="leading-tight">
                  <p className="text-base leading-snug">
                    <span className="font-semibold">Just for context,</span> my mom is a school teacher managing four
                    classes. When exam season rolls around, she has to prepare and set up numerous question papers.
                  </p>
                  <p className="mt-2 text-base leading-snug">
                    For reference, that’s four classes with five subjects each —
                    <span className="font-semibold"> about 20 question papers 🙁</span>.
                  </p>
                  <p className="mt-2 text-base leading-snug">
                    So, I started brainstorming 💭 ways to help her out. At first,
                    <span className="font-semibold"> the concept of Soner</span> was just a fixed layout for all papers.
                    But it lacked the flexibility and customization she needed. So, I spent another week researching 😶‍🌫️
                    and came up with the full concept.🔥
                  </p>
                </div>
              }
              wordRef={wordTwoRef}
            />
            to interact with many school teachers and coaching managers. They all agreed and shared a common concern:
            the need to prepare and set up numerous question papers just a week before any examination. This process
            includes manually structuring and formatting each question in MS Word or Google Docs, while keeping an eye
            on constraints like Maximum Marks, Total Time, Number of Sections and Subsections, etc.
          </p>
          <p className="mt-5">
            As a developer, I asked
            <MoreInfoWordWrapper
              infoWord="myself"
              infoDesc={
                <div className="leading-tight">
                  <p className="text-base leading-snug">
                    <span className="font-semibold">Hey there!👋 Prashant Singh here.</span> Super pumped to have you on
                    board! I{"'"}ll be your <span className="font-semibold">dost</span> and your
                    <span className="font-semibold"> host</span> for the rest of your journey. I{"'"}m betting you{"'"}
                    ll catch the whole vibe behind Soner in no time.😉
                  </p>
                  <p className="mt-2 text-base leading-snug">
                    Ready for a deep dive? Get comfortable, {"'"}cause things are about to get real. Let{"'"}s make it
                    an epic ride!
                  </p>
                </div>
              }
              wordRef={wordOneRef}
            />
            , what if there could be a tool, like a no-code website builder, specifically tailored for creating question
            papers? What if, instead of typing each question manually, you could just drag and drop it, like Google
            Forms but designed for examinations?
          </p>
          <p className="mt-5">
            All this gave rise to <span className="font-semibold">Soner</span>.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
