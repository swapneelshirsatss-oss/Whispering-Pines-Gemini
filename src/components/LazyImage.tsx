import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  placeholderColor?: string;
  priority?: boolean;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
}

export default function LazyImage({
  src,
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
  }, [src]);

  const imgElement = (
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

  if (priority) {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ backgroundColor: placeholderColor }}>
        {imgElement}
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative overflow-hidden ${className}`} 
      style={{ backgroundColor: placeholderColor }}
    >
      {imgElement}
    </motion.div>
  );
}
