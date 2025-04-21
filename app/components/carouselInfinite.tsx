"use client"

import React, { useState } from 'react';

const items = Array.from({ length: 9 }, (_, i) => `Elemento ${i + 1}`);

console.log(items)

const Carrusel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  const rotateLeft = () => {
    setStartIndex((prev) => (prev - 1));
  };

  const rotateRight = () => {
    setStartIndex((prev) => (prev + 1));
  };

  const getVisibleItems = () => {
    return Array.from({ length: visibleCount }, (_, i) =>
      items[(startIndex + i) % items.length]
    );
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={rotateLeft}>⬅️</button>
      <div className="flex gap-2 overflow-hidden">
        {getVisibleItems().map((item, index) => (
          <div
            key={index}
            className="w-40 h-40 bg-gray-800 text-white flex items-center justify-center rounded"
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={rotateRight}>➡️</button>
    </div>
  );
};

export default Carrusel;