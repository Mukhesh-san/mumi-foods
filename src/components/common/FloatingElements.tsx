import React from 'react';
import { floatingElements } from '../../utils/floatingElements';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} ${element.position} opacity-20`}
        >
          <img 
            src={element.image} 
            alt="" 
            className={`rounded-full ${element.rotate}`}
          />
        </div>
      ))}
    </div>
  );
}