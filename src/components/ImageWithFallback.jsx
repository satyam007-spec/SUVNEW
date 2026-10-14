import { useState } from 'react';

// Helper to ensure small payload size and responsive dimensions for images
function getOptimizedImageUrl(url, maxWidth = 800) {
  if (!url || typeof url !== 'string') return url;
  if (url.includes('images.unsplash.com')) {
    // Replace high-res dimensions with lightweight responsive dimensions and compressed quality
    const cleanUrl = url.split('?')[0];
    return `${cleanUrl}?auto=format&fit=crop&w=${maxWidth}&q=75`;
  }
  return url;
}

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  loading = 'lazy',
  maxWidth = 800,
  width = 800,
  height = 500
}) {
  const [hasError, setHasError] = useState(false);

  const optimizedSrc = getOptimizedImageUrl(src, maxWidth);
  const validAltText = alt && alt.trim().length > 0 ? alt : 'SUVHUB automotive photograph';

  return (
    <div className={`relative overflow-hidden bg-[#15181C] ${aspectRatio} ${className}`}>
      {!hasError ? (
        <img
          src={optimizedSrc}
          alt={validAltText}
          width={width}
          height={height}
          loading={loading}
          decoding="async"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover transition-transform duration-500 ease-out"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#15181C] to-[#1B1F24] p-4 text-center">
          <svg
            className="w-12 h-12 text-[#E53935] opacity-60 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h2m12 0a2 2 0 100 4 2 2 0 000-4zm-12 0a2 2 0 100 4 2 2 0 000-4z"
            />
          </svg>
          <span className="text-xs text-[#A7ADB4] font-medium tracking-wide uppercase">
            {validAltText}
          </span>
        </div>
      )}
    </div>
  );
}
