import { Variants } from 'framer-motion';

export const menuToggleVariant: Variants = {
  open: {
    height: 220,
    width: 600,
    bottom: -20,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      duration: 0.1,
    },
  },
  closed: {
    height: 30,
    width: 490,
    bottom: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      duration: 0.1,
    },
  },
};

export const activeMenuTabVariant: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      delay: 0,
    },
  },
};

export const feedbackArticleContainerVariant: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export const articleCloseIconVariant: Variants = {
  visible: {
    opacity: 1,
    transform: 'translateX(-50%) scale(1)',
    left: '50%',
  },
  hidden: {
    opacity: 0,
    left: '50%',
    transform: 'translateX(-50%) scale(0.8)',
  },
};

export const articleCloseIconHoverTextVariant: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transform: 'translateX(-50%) scale(1)',
  },
  hidden: {
    opacity: 0,
    y: 20,
    transform: 'translateX(-50%) scale(0.90)',
  },
};

export const feedbackArticleVariant = (isCloseIconHover: boolean): Variants => ({
  visible: {
    opacity: 1,
    transform: ` scale(${isCloseIconHover ? 0.95 : 1})`,
    // left: '50%',
  },
  hidden: {
    opacity: 0,
    // left: '50%',
    transform: ' scale(0.8)',
  },
});

export const MoreInfoWordVariant: Variants = {
  visible: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
  hidden: {
    opacity: 0,
    transform: 'translateY(10%) scale(0.9)',
  },
};
