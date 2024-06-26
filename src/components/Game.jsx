import React, { useState, useEffect } from 'react';
import { Level } from './Level';
import { VictoryScreen } from './VictoryScreen';

export const Game = () => {
  const [currentLevel, setСurrentLevel] = useState(() => {
    const savedLevel = localStorage.getItem('currentLevel')
    return savedLevel !== null ? parseInt(savedLevel, 10) : 1
  })
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNextLevel = () => {
    localStorage.setItem('currentLevel', currentLevel + 1);
    localStorage.removeItem('words');
    setIsCompleted(false);
    setСurrentLevel((prevLevel) => prevLevel + 1);
  };

  if (isCompleted) {
    return <VictoryScreen level={currentLevel} onNextLevel={handleNextLevel} />
  }

  return (
    <Level
      level={currentLevel}
      onLevelComplete={() => setIsCompleted(true)}
    />
  );
};