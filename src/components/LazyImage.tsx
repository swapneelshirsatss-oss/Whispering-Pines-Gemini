import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  mobileSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  placeholderColor?: string;
  priority?: boolean;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function LazyImage({
  src,
  mobileSrc,
  alt,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  placeholderColor = '#EAE8E3',
  priority = false,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src, mobileSrc]);

  const coreImg = (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
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

  const imgElement = mobileSrc ? (
    <picture className="block w-full h-full">
      <source media="(max-width: 768px)" srcSet={mobileSrc} type="image/webp" />
      <source media="(min-width: 769px)" srcSet={src} type="image/webp" />
      {coreImg}
    </picture>
  ) : (
    coreImg
  );

  if (priority) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: placeholderColor }}>
        {imgElement}
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden animate-fade-in-up ${className}`} 
      style={{ backgroundColor: placeholderColor }}
    >
      {imgElement}
    </div>
  );
}
