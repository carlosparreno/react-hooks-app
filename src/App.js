import React from 'react';
import './App.css';
import FilePickerWithUseRef from './components/FilePickerWithUseRef';
import SwitchWithUseState from './components/SwitchWithUseState';

function App() {
  return (
    <div className="ha-app">
      <h3>React state: Hook useState</h3>
      <SwitchWithUseState />
      <h3>React refs: Hook useRef</h3>
      <FilePickerWithUseRef />
      <h3>React effects: Hook useEffect</h3>

      <h3>React event handlers:</h3>
    </div>
  );
}

export default App;
