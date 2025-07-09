import React, { useRef, useEffect, useState } from 'react';

type MarqueeProps = {
  children: React.ReactNode[];
  speed?: number;
  direction?: 'left' | 'right';
  gap?: number; // New gap prop in pixels
  className?: string;
};

export const Marquee = ({
  children,
  speed = 60,
  direction = 'left',
  gap = 32, // Default 32px gap between items
  className = '',
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    
    // Clone all children for seamless looping
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    let animationFrame: number;
    let position = 0;
    const contentWidth = content.scrollWidth + gap; // Include gap in calculation

    const animate = () => {
      if (!isMounted) return;
      
      position += (direction === 'left' ? -1 : 1) * (speed / 60);
      
      // Reset position when entire content has scrolled
      if (direction === 'left' && position <= -contentWidth) {
        position = 0;
      } else if (direction === 'right' && position >= 0) {
        position = -contentWidth;
      }

      container.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    // Initialize position
    position = direction === 'left' ? 0 : -contentWidth;
    container.style.transform = `translateX(${position}px)`;
    
    // Start animation after a brief delay to ensure proper measurements
    const startDelay = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 50);

    return () => {
      clearTimeout(startDelay);
      cancelAnimationFrame(animationFrame);
      if (container.contains(clone)) {
        container.removeChild(clone);
      }
    };
  }, [isMounted, children, speed, direction, gap]);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div 
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ gap: `${gap}px` }} // Apply gap here
      >
        <div ref={contentRef} className="flex" style={{ gap: `${gap}px` }}>
          {React.Children.map(children, (child, index) => (
            <div 
              key={`original-${index}`} 
              className="flex-shrink-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};