import { useEffect, useState } from 'react';

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        style={{ 
          left: position.x, 
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0.5 : 1})`
        }}
        className="cursor-dot transition-transform duration-75"
      />
      <div 
        style={{ 
          left: position.x, 
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`
        }}
        className="cursor-ring transition-transform duration-75"
      />
    </>
  );
}
