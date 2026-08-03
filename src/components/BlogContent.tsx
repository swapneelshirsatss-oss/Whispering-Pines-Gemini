import React from 'react';

interface BlogContentProps {
  content?: React.ReactNode | React.ComponentType | any;
  excerpt: string;
}

export default function BlogContent({ content, excerpt }: BlogContentProps) {
  if (!content) {
    return <p className="text-gray-600 leading-relaxed">{excerpt}</p>;
  }

  if (typeof content === 'function') {
    const Component = content;
    return <Component />;
  }

  if (React.isValidElement(content)) {
    return content;
  }

  return <>{content}</>;
}
