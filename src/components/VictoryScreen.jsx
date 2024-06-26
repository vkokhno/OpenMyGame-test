import React from 'react';

export const VictoryScreen = ({ level, onNextLevel }) => {
  return (
    <div className="victory-screen">
      <div>
        <h3>Уровень {level} пройден</h3>
        <h2>Изумительно!</h2>
      </div>
      <button className="default-button" onClick={onNextLevel}>Уровень {level + 1}</button>
    </div>
  );
};