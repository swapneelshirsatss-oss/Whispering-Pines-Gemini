import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'width' | 'height'> {
  src: string | any;
  mobileSrc?: string | any;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  imgClassName?: string;
  placeholderColor?: string;
  priority?: boolean;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

const getSrcString = (val: any): string | undefined => {
  if (!val) return undefined;
  if (typeof val === 'string') return val;
  if (typeof val === 'object') {
    if (typeof val.src === 'string') return val.src;
    if (typeof val.default === 'string') return val.default;
  }
  return String(val);
};

export default function LazyImage({
  src,
  mobileSrc,
  srcSet,
  sizes,
  alt,
  width,
  height,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  placeholderColor = '#EAE8E3',
  priority = false,
  ...props
}: LazyImageProps) {
  const actualSrc = getSrcString(src);
  const actualMobileSrc = getSrcString(mobileSrc);

  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // IntersectionObserver to delay setting src for off-screen non-priority images
  useEffect(() => {
    if (priority || isInView) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  useEffect(() => {
    if (isInView && imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [isInView, actualSrc, actualMobileSrc]);

  const handleImgRef = (node: HTMLImageElement | null) => {
    imgRef.current = node;
    if (node && node.complete) {
      setIsLoaded(true);
    }
  };

  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  const coreImg = (
    <img
      ref={handleImgRef}
      src={isInView ? actualSrc : undefined}
      srcSet={isInView && srcSet ? srcSet : undefined}
      sizes={sizes ? sizes : (srcSet ? defaultSizes : undefined)}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onLoad={() => setIsLoaded(true)}
      onError={() => setIsLoaded(true)}
      className={`${imgClassName} ${priority ? '' : 'transition-opacity duration-700 ease-out'} ${
        isLoaded || priority ? 'opacity-100' : 'opacity-0'
      }`}
      {...props}
    />
  );

  const imgElement = actualMobileSrc ? (
    <picture className="block w-full h-full">
      <source media="(max-width: 768px)" srcSet={isInView ? actualMobileSrc : undefined} type="image/webp" />
      <source media="(min-width: 769px)" srcSet={isInView ? (srcSet || actualSrc) : undefined} sizes={sizes ? sizes : (srcSet ? defaultSizes : undefined)} type="image/webp" />
      {coreImg}
    </picture>
  ) : (
    coreImg
  );

  const aspectRatioStyle =
    width && height && typeof width === 'number' && typeof height === 'number'
      ? { aspectRatio: `${width} / ${height}` }
      : undefined;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${priority ? '' : 'animate-fade-in-up'} ${className}`} 
      style={{ backgroundColor: placeholderColor, ...aspectRatioStyle }}
    >
      {isInView && imgElement}
    </div>
  );
}
