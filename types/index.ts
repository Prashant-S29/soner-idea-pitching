import { IconType } from 'react-icons';

export type MenuItemProps = {
  title: string;
  icon: IconType;
};

export type DataProps = {
  title: string;
  time: string;
  slug: ShowContentProps;
};

export type ShowContentProps =
  | 'philosophy'
  | 'aboutSoner'
  | 'aboutTeamRoyals'
  | 'sonerObjective'
  | 'howSonerHelps'
  | 'howSonerIsUnique'
  | 'USP_forSoner'
  | 'featureDisclaimer'
  | 'final'
  | 'mvp'
  | 'prototype'
  | 'techDisclaimer'
  | 'techFeatures'
  | 'techStack'
  | null;
