import { DataProps } from '@/types';
import { create } from 'zustand';

export type LastVisitedTabProps = {
  lastVisitedTab: DataProps | null;
  setLastVisitedTab: (lastVisitedTab: DataProps | null) => void;
};
export const useLastVisitedTabHandler = create<LastVisitedTabProps>((set) => ({
  lastVisitedTab: null,
  setLastVisitedTab: (lastVisitedTab: DataProps | null) => set({ lastVisitedTab }),
}));
