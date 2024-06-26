import React, { useState, useEffect } from 'react';
import { Game } from './components/Game';
import { SeveralTabsWarning } from './components/SeveralTabsWarning';
import './App.css';

export const App = () => {
  const [isSeveralTabs, setIsSeveralTabs] = useState(false);

  useEffect(() => {
    const tabId = Date.now();
    localStorage.setItem('tabId', tabId);

    const checkNewTab = (event) => {
      if (event.key === 'tabId' && event.newValue !== event.oldValue) {
        setIsSeveralTabs(true);
      }
    }

    window.addEventListener('storage', checkNewTab);

    return () => window.removeEventListener('storage', checkNewTab)
  }, []);

  return (
    <div className="app">
      <Game />
      {isSeveralTabs && <SeveralTabsWarning />}
    </div>
  );
};