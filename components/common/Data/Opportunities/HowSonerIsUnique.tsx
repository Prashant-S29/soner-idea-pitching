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

// Shadcn UI
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui';

// Components
import { MoreInfoWordWrapper } from '@/components/feature';

// Props
interface Props {
  setShowContent: React.Dispatch<React.SetStateAction<ShowContentProps>>;
}

export const HowSonerIsUnique = ({ setShowContent }: Props) => {
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
          <p className="text-[60px] font-bold">The Unique Concept</p>
          <p className="mt-5">
            There are
            <MoreInfoWordWrapper
              infoWord="many solutions"
              infoDesc={
                <div className="leading-tight">
                  <p className="text-base leading-snug">
                    Some solutions address similar issues but are
                    <span className="font-semibold"> mostly limited to online examinations 😑 </span>
                  </p>
                  <Table className="mt-5">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="min-w-[250px]">Solutions</TableHead>
                        <TableHead className="w-full">Limitations</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Google Forms</TableCell>
                        <TableCell>
                          Primarily supports MCQ-based tests with limited customization and lacks support for physical
                          paper format.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">MS Word / Google Docs</TableCell>
                        <TableCell>
                          Requires manual structuring and formatting; lacks reusable layouts and requires manual
                          constraint checks.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Typeform, Jotform, Flexiquiz, Classmarker</TableCell>
                        <TableCell>None of these tools assist with physical exams.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              }
              wordRef={wordOneRef}
            />
            available for online test series and examinations. However, none offer significant assistance for hardcopy
            question papers, which involve extensive structuring, formatting, and constraint management.
          </p>
          <p className="mt-5">
            Soner will be the <span className="font-semibold">first tool of its kind</span> in this domain, effectively
            easing the process of creating physical question papers and reducing preparation time by at least 3 hours.
          </p>
          <p className="mt-5">
            <span className="font-semibold">
              Soner is tailored for school and college teachers, tutors, and coaching institutes
            </span>
            &nbsp; where there’s a constant need for question papers in test series and examinations.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
