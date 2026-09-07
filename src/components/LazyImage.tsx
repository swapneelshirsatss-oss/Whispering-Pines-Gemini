import React from 'react';

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

  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  const coreImg = (
    <img
      src={actualSrc}
      srcSet={srcSet}
      sizes={sizes ? sizes : (srcSet ? defaultSizes : undefined)}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={imgClassName}
      {...props}
    />
  );

  const imgElement = actualMobileSrc ? (
    <picture className="block w-full h-full">
      <source media="(max-width: 768px)" srcSet={actualMobileSrc} type="image/webp" />
      <source media="(min-width: 769px)" srcSet={srcSet || actualSrc} sizes={sizes ? sizes : (srcSet ? defaultSizes : undefined)} type="image/webp" />
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
      className={`relative overflow-hidden ${className}`} 
      style={{ backgroundColor: placeholderColor, ...aspectRatioStyle }}
    >
      {imgElement}
    </div>
  );
}
