import React from 'react';

interface InfinityBackgroundProps {
  className?: string;
  variant?: 'light' | 'hero' | 'dark' | 'subtle';
}

export const InfinityBackground: React.FC<InfinityBackgroundProps> = ({ 
  className = '', 
  variant = 'light' 
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`} aria-hidden="true">
      {variant === 'hero' && (
        <>
          {/* Subtle Radial Glows in Brand Blue and Cyan */}
          <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl animate-pulseGlow" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl animate-pulseGlow" style={{ animationDelay: '2s' }} />
          
          {/* Flowing Infinity Vector Motif */}
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[1100px] h-auto opacity-15"
            viewBox="0 0 600 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 150 150 C 70 70, 70 230, 150 150 C 230 70, 370 230, 450 150 C 530 70, 530 230, 450 150 C 370 70, 230 230, 150 150 Z"
              stroke="url(#infinityGrad1)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="infinity-path"
            />
            <path
              d="M 150 150 C 70 50, 70 250, 150 150 C 230 50, 370 250, 450 150 C 530 50, 530 250, 450 150 C 370 50, 230 250, 150 150 Z"
              stroke="url(#infinityGrad2)"
              strokeWidth="1"
              strokeDasharray="4 8"
              opacity="0.6"
            />
            <defs>
              <linearGradient id="infinityGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0877B9" />
                <stop offset="50%" stopColor="#08A9E0" />
                <stop offset="100%" stopColor="#0877B9" />
              </linearGradient>
              <linearGradient id="infinityGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#08A9E0" />
                <stop offset="100%" stopColor="#29292D" />
              </linearGradient>
            </defs>
          </svg>
        </>
      )}

      {variant === 'dark' && (
        <svg
          className="absolute -right-20 -bottom-20 w-[600px] h-auto opacity-10"
          viewBox="0 0 600 300"
          fill="none"
        >
          <path
            d="M 150 150 C 70 70, 70 230, 150 150 C 230 70, 370 230, 450 150 C 530 70, 530 230, 450 150 C 370 70, 230 230, 150 150 Z"
            stroke="#08A9E0"
            strokeWidth="2"
          />
        </svg>
      )}

      {variant === 'subtle' && (
        <svg
          className="absolute top-0 right-0 w-[500px] h-auto opacity-5"
          viewBox="0 0 600 300"
          fill="none"
        >
          <path
            d="M 150 150 C 70 70, 70 230, 150 150 C 230 70, 370 230, 450 150 C 530 70, 530 230, 450 150 C 370 70, 230 230, 150 150 Z"
            stroke="#0877B9"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </div>
  );
};
