import { create } from 'zustand';

export type MoreInfoWordAnimationHandlerProps = {
  // motion handler
  isClicked: boolean;
  setIsClicked: (isClicked: boolean) => void;

  // word and info handler
  word: string;
  setWord: (word: string) => void;
  Info: React.FC;
  setInfo: (Info: React.FC) => void;

  // word position handler
  wordPosition: { x: number; y: number };
  setWordPosition: (wordPosition: { x: number; y: number }) => void;

  // dimensions
  dimensions: { width: number; height: number };
  setDimensions: (dimensions: { width: number; height: number }) => void;
};

export const useMoreInfoWordAnimationHandler = create<MoreInfoWordAnimationHandlerProps>((set) => ({
  // motion handler
  isClicked: false,
  setIsClicked: (isClicked: boolean) => set({ isClicked }),

  // Word and Info Handler
  word: '',
  setWord: (word: string) => set({ word }),
  Info: () => null,
  setInfo: (Info: React.FC) => set({ Info }),

  // Word Position Handler
  wordPosition: { x: 0, y: 0 },
  setWordPosition: (wordPosition: { x: number; y: number }) => set({ wordPosition }),

  // dimensions
  dimensions: { width: 0, height: 0 },
  setDimensions: (dimensions: { width: number; height: number }) => set({ dimensions }),
}));
