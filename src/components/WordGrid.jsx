import React from 'react';

export const WordGrid = ({ words }) => {
  return (
    <div className="word-grid">
      {words.map((row, rowIndex) => (
        <div key={rowIndex} className={`word-row ${row.founded ? "opened" : ""}`}>
          {row.word.split("").map((letter, cellIndex) => (
            <div key={cellIndex} className="cell">
              {row.founded ? letter : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};