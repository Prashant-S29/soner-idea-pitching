import React from 'react';

export const LogoSVG: React.FC = () => {
  return (
    <svg width="80" height="80" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="24" width="100" height="100" rx="20" fill="#121212" />
      <path d="M57 57.9314V74.1814L93.9608 90.4314V74.1814L57 57.9314Z" fill="url(#paint0_linear_32_5)" />
      <path
        d="M93.9608 74.5V90.75L67.4315 102.414C62.5159 104.575 57 100.975 57 95.6049C57 92.6547 58.7437 89.9834 61.4444 88.796L93.9608 74.5Z"
        fill="#3ECF8E"
      />
      <path
        d="M57 74.5V58.25L83.5294 46.5862C88.4449 44.4251 93.9608 48.0255 93.9608 53.3951C93.9608 56.3453 92.2171 59.0166 89.5165 60.204L57 74.5Z"
        fill="#3ECF8E"
      />
      <defs>
        <linearGradient
          id="paint0_linear_32_5"
          x1="75.4804"
          y1="57.9314"
          x2="75.4804"
          y2="90.4314"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3ECF8E" />
          <stop offset="1" stopColor="#1F6948" />
        </linearGradient>
      </defs>
    </svg>
  );
};
