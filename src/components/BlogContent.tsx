import React from 'react';

interface BlogContentProps {
  content?: React.ReactNode;
  excerpt: string;
}

export default function BlogContent({ content, excerpt }: BlogContentProps) {
  return content ? (
    <>{content}</>
  ) : (
    <p className="text-gray-600 leading-relaxed">{excerpt}</p>
  );
}
