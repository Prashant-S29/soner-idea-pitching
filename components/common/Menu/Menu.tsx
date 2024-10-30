'use client';

import React, { useEffect, useRef, useState } from 'react';

// Framer Motion
import { AnimatePresence, motion } from 'framer-motion';

// Icons
import { NotesIcon } from '@/icons';

// Motion Variants
import { activeMenuTabVariant, menuToggleVariant } from '@/lib/motionVariant';

// Data
import { MenuItem, Data } from '@/data';

// Hooks
import { DataProps, MenuItemProps, ShowContentProps } from '@/types';

// Components
import { AboutSoner, Objective, Philosophy } from '../Data/Introduction';
import { HowSonerHelps, HowSonerIsUnique, USP_forSoner } from '../Data/Opportunities';
import { FeaturesDisclaimer, FeaturesFinal, FeaturesMVP, FeaturesPrototype } from '../Data/Features';
import { TechFeatures, TechStack } from '../Data/Tech';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useLastVisitedTabHandler } from '@/lib/lastVisitedTabHandler';

export const Menu = () => {
  const { getValue, setValue } = useLocalStorage<DataProps>();
  const { setLastVisitedTab } = useLastVisitedTabHandler();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState(-1);

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [pillPosition, setPillPosition] = useState({ left: 0, width: 0, opacity: 0 });

  const [showContent, setShowContent] = useState<ShowContentProps>(null);

  const handleMenuOpen = (i: number) => {
    setIsMenuOpen(true);
    setActiveMenuTab(i);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setActiveMenuTab(-1);
    setPillPosition({ ...pillPosition, opacity: 0 });
  };

  const handleLinkClick = (slug: ShowContentProps, data: DataProps) => {
    handleMenuClose();
    setShowContent(slug);
    setHoveredIndex(-1);

    setValue('lastVisitedTab', data);
    setLastVisitedTab(data);
  };

  useEffect(() => {
    setLastVisitedTab(getValue('lastVisitedTab'));
  }, [getValue, setLastVisitedTab]);

  return (
    <>
      <div
        className="fixed bottom-[50px] left-[50%] hidden w-fit translate-x-[-50%] md:block"
        onMouseLeave={handleMenuClose}
      >
        <div className="absolute bottom-0 left-[50%] z-20 flex h-[50px] w-fit -translate-x-[50%] items-center rounded-xl bg-[#ecd2bf] px-5">
          <div className="relative flex w-fit gap-2">
            {MenuItem.map((item, index) => (
              <NavLinkPill
                key={index}
                setPillPosition={setPillPosition}
                handleMenuOpen={handleMenuOpen}
                index={index}
                item={item}
              />
            ))}
            {/* {activeMenuTab ===} */}
            <motion.div animate={pillPosition} className="absolute left-0 top-0 h-full rounded-lg bg-[#feefdb]" />
          </div>
        </div>
        <motion.div
          variants={menuToggleVariant}
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          className="absolute left-[50%] -translate-x-[50%] rounded-2xl bg-[#ecd2bf]"
        >
          <AnimatePresence>
            {Data.map((dataToRender, index) => (
              <React.Fragment key={index}>
                {activeMenuTab === index && (
                  <motion.div
                    variants={activeMenuTabVariant}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute left-0 top-0 h-[150px] w-full rounded-t-2xl bg-[#ecd2bf] p-5"
                  >
                    {dataToRender.map((data, index) => (
                      <div
                        key={index}
                        className={`flex w-full cursor-pointer items-center justify-between px-2 py-1 duration-150 ${
                          hoveredIndex !== -1 && hoveredIndex !== index ? 'opacity-40' : 'opacity-100 hover:px-5'
                        }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                        onClick={() => handleLinkClick(data.slug, data)}
                      >
                        <p className="flex items-center gap-2 text-[14px] font-semibold">
                          <NotesIcon className="text-[14px] text-[#796455]" />
                          {data.title}
                        </p>
                        <p className="text-[14px] font-medium text-[#796455]">{data.time}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {/* Introduction */}
        {showContent === 'philosophy' && <Philosophy setShowContent={setShowContent} />}
        {showContent === 'aboutSoner' && <AboutSoner setShowContent={setShowContent} />}
        {showContent === 'sonerObjective' && <Objective setShowContent={setShowContent} />}

        {/* Opportunities */}
        {showContent === 'howSonerIsUnique' && <HowSonerIsUnique setShowContent={setShowContent} />}
        {showContent === 'howSonerHelps' && <HowSonerHelps setShowContent={setShowContent} />}
        {showContent === 'USP_forSoner' && <USP_forSoner setShowContent={setShowContent} />}

        {/* Features */}
        {showContent === 'featureDisclaimer' && <FeaturesDisclaimer setShowContent={setShowContent} />}
        {showContent === 'prototype' && <FeaturesPrototype setShowContent={setShowContent} />}
        {showContent === 'mvp' && <FeaturesMVP setShowContent={setShowContent} />}
        {showContent === 'final' && <FeaturesFinal setShowContent={setShowContent} />}

        {/* Tech */}
        {showContent === 'techStack' && <TechStack setShowContent={setShowContent} />}
        {showContent === 'techFeatures' && <TechFeatures setShowContent={setShowContent} />}
      </AnimatePresence>
    </>
  );
};

const NavLinkPill = ({
  handleMenuOpen,
  setPillPosition,
  index,
  item,
}: {
  handleMenuOpen: (index: number) => void;
  setPillPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  index: number;
  item: MenuItemProps;
}) => {
  const linkTabRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={linkTabRef}
      className={`relative z-20 flex w-fit cursor-pointer items-center justify-center gap-2 rounded-[10px] p-2 text-[#000] duration-150`}
      onMouseEnter={() => {
        handleMenuOpen(index);
        setPillPosition({
          left: linkTabRef.current?.offsetLeft || 0,
          width: linkTabRef.current?.getBoundingClientRect().width || 0,
          opacity: 1,
        });
      }}
    >
      <item.icon className="text-[13px]" /> <span className="text-[14px] font-semibold">{item.title}</span>
    </div>
  );
};
