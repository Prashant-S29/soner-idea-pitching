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

export const HowSonerHelps = ({ setShowContent }: Props) => {
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

  const stepsData = [
    {
      title: 'Create a New Project',
      desc: 'Open Soner in any web browser and with just one click, start a new project. Soner also provides pre-built templates to help you get started quickly.',
    },
    {
      title: 'Add Your Questions',
      desc: 'Within your project, open the editor and experiment with various components. Customize styles, structure, and formatting as desired, and add images or any type of question format.',
    },
    {
      title: 'Export Your Work',
      desc: 'With a single click, export your question paper in PDF, DOCX, or HTML formats. You can also download it as a zip file for easy access.',
    },
  ];

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
          <p className="text-[60px] font-bold">Soner Use Cases</p>
          <p className="mt-2">
            To better understand the use cases, let{"'"}s start with a scenario.{' '}
            <span className="font-semibold">
              You are a college teacher, primarily teaching tech subjects. When exam season arrives, your first task is
              to prepare question papers
            </span>
            , isn{"'"}t it?
          </p>
          <p className="mt-5">
            So, what would you do? Open Google Docs or MS Word and start typing questions. At the end of the day, you
            may have accomplished your tasks, but at what cost? Without even realizing it,{' '}
            <span className="font-semibold">you have spent about 3 hours on each paper</span>, with{' '}
            <span className="font-semibold">countless revisions</span>,{' '}
            <span className="font-semibold">spamming the space key to format</span>, and{' '}
            <span className="font-semibold">repeated calculations to ensure everything meets the requirements</span>.
          </p>
          <p className="mt-5">
            What a waste of time. Now, <span className="font-semibold">let{"'"}s try it again, but with Soner</span>.
          </p>
          {/* Steps */}
          {stepsData.map((data, index) => (
            <div key={index} className="mt-5 flex gap-3 leading-tight">
              <p className="whitespace-nowrap">Step {index + 1}</p>
              <section>
                <p className="font-semibold">{data.title}</p>
                <p className="text-sm">{data.desc}</p>
              </section>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
