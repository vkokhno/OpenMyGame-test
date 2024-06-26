import React, { useState, useEffect, useRef } from 'react';

const radius = 150;
const centerX = 150;
const centerY = 150;

export const LetterCircle = ({ letters, onWordFound }) => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const circleRef = useRef(null);

  const handleMouseDown = (letter) => {
    setIsDragging(true);
    setSelectedLetters([letter]);
  };

  const handleMouseEnter = (letter) => {
    if (isDragging) {
      if (!selectedLetters.find(obj => obj.id === letter.id && obj.letter === letter.letter)) {
        setSelectedLetters((prev) => [...prev, letter]);
      }
    }
  };

  useEffect(() => {
    const handleMouseUpOutside = () => {
      if (isDragging) {
        setIsDragging(false);
        onWordFound(selectedLetters.map(obj => obj.letter).join(""));
        setSelectedLetters([]);
      }
    };

    document.addEventListener('mouseup', handleMouseUpOutside);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpOutside);
    };
  }, [isDragging, selectedLetters, onWordFound]);

  const getLetterPosition = (index, total) => {
    const angle = (index / total) * (2 * Math.PI);
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <>
      <div className="preview-word">
        {selectedLetters.map((letter, cellIndex) => (
          <div key={cellIndex} className="cell">
            {letter.letter}
          </div>
        ))}
      </div>
      <div className="letter-circle" ref={circleRef}>
        {letters.map((letter, index) => {
          const { x, y } = getLetterPosition(index, letters.length);
          return (
            <div
              key={letter.id}
              className={`letter ${selectedLetters.find(obj => obj.id === letter.id && obj.letter === letter.letter) ? 'selected' : ""}`}
              style={{ left: `${x}px`, top: `${y}px` }}
              onMouseDown={() => handleMouseDown(letter)}
              onMouseEnter={() => handleMouseEnter(letter)}
            >
              {letter.letter}
            </div>
          );
        })}
      </div>
    </>
  );
};