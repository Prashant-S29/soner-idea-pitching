import React from 'react';

// Assets
import { Menu } from '@/components/common';

// Hooks
import { LogoWithTextSVG } from '@/public';

// Components
// import { ContinueReading } from '@/components/common/ContinueReading';

export const Hero: React.FC = () => {
  return (
    <>
      <div className="fixed flex h-screen w-full items-center justify-center bg-[#feefdb] text-center leading-tight">
        <div className="p-5">
          <section className="flex justify-center">
            <LogoWithTextSVG />
          </section>
          <p className="text-balance font-semibold sm:text-xl">A simple way to build question papers</p>
          <section className="hidden md:block">
            <p className="mt-1 font-medium">Idea Pitching</p>
            <p className="mt-1 hidden text-xs font-medium text-black/70 max-[1000px]:block">
              ( consider switching to desktop to enjoy the full experience )
            </p>
          </section>
          <section className="absolute bottom-4 left-0 block w-full text-center md:hidden">
            <p className="mt-1 hidden text-sm font-medium text-black/70 max-[1000px]:block">
              Switch to desktop to enjoy the full experience
            </p>
          </section>
          {/* <ContinueReading /> */}
        </div>
      </div>
      <Menu />
    </>
  );
};
