'use client';

import React, { ReactNode } from 'react';

// Framer Motion
import { motion } from 'framer-motion';
import { useMoreInfoWordAnimationHandler } from '@/lib';

interface Props {
  infoWord: string;
  infoDesc: ReactNode;
  wordRef: React.RefObject<HTMLSpanElement>;
}

export const MoreInfoWordWrapper: React.FC<Props> = ({ wordRef, infoDesc, infoWord }) => {
  const { isClicked, setIsClicked, setWord, setInfo, setWordPosition, word, setDimensions } =
    useMoreInfoWordAnimationHandler();

  return (
    <>
      &nbsp;
      <motion.span
        ref={wordRef}
        variants={{
          hidden: { opacity: 0, transition: { delay: 0, duration: 0 } },
          visible: { opacity: 1, transition: { delay: 0.3, duration: 0.1 } },
        }}
        initial="visible"
        animate={isClicked && word === infoWord ? 'hidden' : 'visible'}
        onClick={() => {
          setIsClicked(true);
          setWord(infoWord);
          setInfo(() => infoDesc);
          setWordPosition({
            x: wordRef.current?.getBoundingClientRect().left || 0,
            y: wordRef.current?.getBoundingClientRect().top || 0,
          });
          setDimensions({
            width: wordRef.current?.getBoundingClientRect().width || 0,
            height: wordRef.current?.getBoundingClientRect().height || 0,
          });
        }}
        className={`cursor-pointer underline underline-offset-2`}
      >
        {infoWord}
      </motion.span>
      &nbsp;
    </>
  );
};
