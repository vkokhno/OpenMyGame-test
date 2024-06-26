import React, { useState, useEffect, useCallback } from 'react';
import { WordGrid } from './WordGrid';
import { LetterCircle } from './LetterCircle';
import levels from '../data/levels.json';

export const Level = ({ level, onLevelComplete }) => {
  const levelInfo = levels[(level - 1) % 3]
  const [words, setWords] = useState(() => {
    const savedWords = localStorage.getItem("words");
    return savedWords ? JSON.parse(savedWords) : levelInfo.words;
  });

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  const handleWordFound = (word) => {
    const foundWordObj = words.find(w => w.word === word && !w.founded);

    if (foundWordObj) {
      const updatedWords = words.map(w =>
        w.word === word ? { ...w, founded: true } : w
      );

      setWords(updatedWords);

      if (updatedWords.every(w => w.founded)) {
        onLevelComplete();
      }
    }
  }

  return (
    <div className="level">
      <h1>Уровень {level}</h1>
      <WordGrid words={words} />
      <LetterCircle letters={levelInfo.letters} onWordFound={handleWordFound} />
    </div>
  );
};