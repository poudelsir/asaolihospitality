import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = 'ASA Hospitality',
  fallbackTitle = 'ASA Hospitality',
  fallbackSubtitle = 'Contemporary Irish Restaurant Group',
  className = '',
  aspectRatioClass = 'aspect-[16/9]',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#1A1A18] ${aspectRatioClass} ${className}`}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          {...props}
        />
      ) : null}

      {/* Styled Luxury CSS/SVG Fallback */}
      {(!src || hasError || !isLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 bg-gradient-to-br from-[#1E1E1C] via-[#151513] to-[#0D0D0C] ${
            isLoaded && !hasError ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          {/* Subtle gold geometric watermark */}
          <div className="w-16 h-16 mb-4 rounded-full border border-[#B89B72]/30 flex items-center justify-center bg-[#B89B72]/5">
            <svg
              className="w-8 h-8 text-[#B89B72]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              <line x1="12" y1="22" x2="12" y2="15.5" />
              <polyline points="22 8.5 12 15.5 2 8.5" />
              <polyline points="2 15.5 12 8.5 22 15.5" />
              <line x1="12" y1="2" x2="12" y2="8.5" />
            </svg>
          </div>
          <span className="font-serif text-lg tracking-wider text-[#F5F1E9] font-medium">
            {fallbackTitle}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#B89B72] mt-1 font-sans">
            {fallbackSubtitle}
          </span>
          <div className="w-12 h-[1px] bg-[#B89B72]/40 mt-3" />
        </div>
      )}
    </div>
  );
};
