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

// Shadcn UI
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui';

// Props
interface Props {
  setShowContent: React.Dispatch<React.SetStateAction<ShowContentProps>>;
}

export const TechStack = ({ setShowContent }: Props) => {
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

  const techStack = [
    {
      category: 'Frontend',
      tech: 'React, Next.js, Framer Motion, TypeScript, TanStack Query, etc',
    },
    {
      category: 'Backend',
      tech: 'NestJs, tRPC, Postman, TypeScript, etc',
    },
    {
      category: 'Database and ORM',
      tech: 'Supabase (Postgres), Redis, Prisma, etc',
    },
    {
      category: 'File Storage',
      tech: 'AWS S3 via Uploadthing (A 3rd party service)',
    },
    {
      category: 'Middleware and Authentication',
      tech: 'NestJs, OAuth (native)',
    },
    {
      category: 'Documentation',
      tech: 'Postman API Documentation, Swagger',
    },
    {
      category: 'Deployment',
      tech: 'Vercel (Frontend), AWS Elastic Beanstalk (Backend)',
    },
    {
      category: 'Error and Monitoring',
      tech: 'Sentry',
    },
    {
      category: 'Analytics',
      tech: 'Google Analytics',
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
          <p className="text-[60px] font-bold">Tech Stack</p>
          <p className="mt-2">
            Now, it’s time to showcase the technology stack 🫠. Here’s the full suite of tools and frameworks that will
            power Soner.{' '}
            <span className="font-semibold">
              Please note, this stack is designed for the final release; some features may be limited in the Prototype
              and MVP versions.
            </span>
          </p>

          <Table className="mt-5">
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-[250px]">Category</TableHead>
                <TableHead className="w-full">Tech</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {techStack.map((tech, index) => (
                <TableRow key={index}>
                  <TableCell className="min-w-[250px] font-medium">{tech.category}</TableCell>
                  <TableCell className="w-full">{tech.tech}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </motion.div>
  );
};
