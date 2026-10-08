import { useState } from 'react';

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  loading = 'lazy'
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#15181C] ${aspectRatio} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#15181C] to-[#1B1F24] p-4 text-center">
          <svg
            className="w-12 h-12 text-[#E53935] opacity-60 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2m12 0a2 2 0 100 4 2 2 0 000-4zm-12 0a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
          <span className="text-xs text-[#A7ADB4] font-medium tracking-wide uppercase">
            {alt || 'SUVHUB Automobile View'}
          </span>
        </div>
      )}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#15181C] animate-pulse" />
      )}
    </div>
  );
}
