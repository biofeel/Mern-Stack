import React, {useState} from 'react';
import './App.css';
import Showbox from './components/Showbox';
import Displaybox from './components/Displaybox';

function App() {
  const [box, setbox] = useState([]);

  const addBox = newBox => {
    setbox([...box, newBox])
  }

  return (
    <div className="App">
        <Showbox addOneBox = {addBox}/>
        <Displaybox box1 = {box}/>
    </div>
  );
};

export default App;
