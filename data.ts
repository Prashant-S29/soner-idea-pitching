import { AppIcon, ComponentsIcon, FeaturesIcon, OpportunitiesIcon } from '@/icons';
import { DataProps, MenuItemProps } from './types';

export const MenuItem: MenuItemProps[] = [
  {
    title: 'Introduction',
    icon: AppIcon,
  },
  {
    title: 'Opportunities',
    icon: OpportunitiesIcon,
  },
  {
    title: 'Features',
    icon: FeaturesIcon,
  },
  {
    title: 'Tech',
    icon: ComponentsIcon,
  },
];

export const IntroductionData: DataProps[] = [
  {
    title: 'Philosophy and Inspiration',
    time: '3 mins',
    slug: 'philosophy',
  },
  {
    title: 'What is Soner ?',
    time: '2 mins',
    slug: 'aboutSoner',
  },
  {
    title: 'Objective of Soner',
    time: '~ 1 min',
    slug: 'sonerObjective',
  },
  // {
  //   title: 'About Team Royals',
  //   time: '2 mins',
  //   slug: 'aboutTeamRoyals',
  // },
];

export const OpportunitiesData: DataProps[] = [
  {
    title: 'What makes Soner a unique product ?',
    time: '1 min',
    slug: 'howSonerIsUnique',
  },
  {
    title: 'How Soner helps ?',
    time: '2 mins',
    slug: 'howSonerHelps',
  },
  {
    title: 'USP for Soner',
    time: '2 mins',
    slug: 'USP_forSoner',
  },
];

export const FeaturesData: DataProps[] = [
  {
    title: 'Disclaimer',
    time: '1 min',
    slug: 'featureDisclaimer',
  },
  {
    title: 'Features for Prototype Version',
    time: '1 min',
    slug: 'prototype',
  },
  {
    title: 'Features for MVP Version',
    time: '1 mins',
    slug: 'mvp',
  },
  {
    title: 'Features for Final Release',
    time: '2 mins',
    slug: 'final',
  },
];

export const TechData: DataProps[] = [
  {
    title: 'Tech powering Soner',
    time: '2 mins',
    slug: 'techStack',
  },
  {
    title: "What's special about this stack ?",
    time: '2 mins',
    slug: 'techFeatures',
  },
];

export const Data: DataProps[][] = [IntroductionData, OpportunitiesData, FeaturesData, TechData];

// export const AllTabs = [...IntroductionData, ...OpportunitiesData, ...FeaturesData, ...TechData];
