import React from 'react';
import './App.css';
import FilePickerWithUseRef from './components/FilePickerWithUseRef';
import SwitchWithUseState from './components/SwitchWithUseState';


function App() {
  return (
    <div className="ha-app">
      <h1>React refs: Hook useRef</h1>
      <FilePickerWithUseRef label="Pick a file"/>
      <h1>React state: Hook useState</h1>
      <SwitchWithUseState />
    </div>
  );
}

export default App;
