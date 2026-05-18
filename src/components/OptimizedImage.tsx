import { useState, useRef, useEffect, useMemo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectRatio?: string;
  fallback?: string;
  sizes?: string;
  width?: number;
  height?: number;
  quality?: number;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&auto=format&fit=crop';

// Adaptive thresholds based on device capability
const getAdaptiveThreshold = () => {
  if (typeof window === 'undefined') return '200px';
  const connection = (navigator as any).connection;
  if (connection) {
    // Increase threshold for slow connections
    if (connection.saveData || connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
      return '400px';
    }
    if (connection.effectiveType === '3g') {
      return '300px';
    }
  }
  // Default threshold for fast connections
  return '200px';
};

// Generate responsive srcset for local images
const generateSrcset = (src: string, baseWidth: number, quality: number = 80): string => {
  if (src.includes('unsplash.com')) {
    const baseUrl = src.split('?')[0];
    const widths = [320, 640, 768, 1024, 1280, 1536, 1920];
    return widths
      .filter(w => w <= baseWidth)
      .map(w => `${baseUrl}?w=${w}&q=${quality}&auto=format&fit=crop ${w}w`)
      .join(', ');
  }
  // For local images, return empty srcset (browser will use src)
  return '';
};

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  aspectRatio,
  fallback = FALLBACK_IMAGE,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw',
  width = 800,
  height = 600,
  quality = 80,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgTagRef = useRef<HTMLImageElement>(null);

  // Generate optimized srcset
  const srcset = useMemo(() => generateSrcset(src, width, quality), [src, width, quality]);

  // Generate optimized src
  const imageSrc = useMemo(() => {
    if (hasError) return fallback;
    if (src.includes('unsplash.com')) {
      const baseUrl = src.split('?')[0];
      return `${baseUrl}?w=${width}&q=${quality}&auto=format&fit=crop`;
    }
    return src;
  }, [src, hasError, fallback, width, quality]);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const threshold = getAdaptiveThreshold();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: threshold, threshold: 0.01 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Handle image error
  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setIsLoaded(false);
    }
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-surface-soft ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Actual image */}
      {isInView && (
        <img
          ref={imgTagRef}
          src={imageSrc}
          srcSet={srcset || undefined}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          sizes={sizes}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ willChange: 'opacity' }}
        />
      )}
    </div>
  );
}
