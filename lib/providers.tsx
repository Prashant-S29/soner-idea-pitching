'use client';

import React from 'react';

// Lenis Smooth Scroll
// import Lenis from 'lenis';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 2,
  //   });
  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // });

  return <>{children}</>;
};
