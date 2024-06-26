import React from 'react';

export const SeveralTabsWarning = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="several-tabs">
      <div className="several-tabs-warning">
        <div className="title">
          <h2>Две вкладки с игрой?</h2>
        </div>
        <p>Похоже, игра открыта в нескольких вкладках браузера. Чтобы продолжить играть в этой вкладке, обновите страницу.</p>
        <button className="default-button" onClick={handleReload}>Обновить</button>
      </div>
    </div>
  );
};