import React, { useState } from 'react';
import './App.css';
import FilePickerWithUseRef from './components/FilePickerWithUseRef';
import SwitchWithUseState from './components/SwitchWithUseState';
import CardWithUseEffect from './components/CardWithUseEffect';

function App() {
  const [updateTimes, setUpdateTimes] = useState(0);
  const [mounted, setMounted] = useState(true);

  const handleUpdateCard = () => {
    setUpdateTimes(updateTimes + 1);
  };

  const handleUnmountCard = () => {
    setMounted(false);
  };

  return (
    <div className="ha-app">
      <h3>React state: Hook useState</h3>
      <SwitchWithUseState />
      <h3>React refs: Hook useRef</h3>
      <FilePickerWithUseRef />
      <h3>React effects: Hook useEffect</h3>
      <button className="ha-button" onClick={handleUpdateCard}>
        Update Component
      </button>
      <button className="ha-button" onClick={handleUnmountCard}>
        Unmount Component
      </button>
      {mounted && <CardWithUseEffect updateTimes={updateTimes} />}
      <h3>React event handlers:</h3>
      <a href="https://reactjs.org/docs/handling-events.html">Handling Events Docs</a>
    </div>
  );
}

export default App;
