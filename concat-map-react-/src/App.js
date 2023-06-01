import { useState } from 'react';
import './App.css';
let i = 0;
function App() {
  const [list, setList] = useState([]);
  const add = () => {
      setList(
        list.concat(
          <button onClick={add} key={i} style={{padding: '10px'}}>
            {i}
          </button>
        )
      )
      {i++}
  }

  return (
    <div className="App">
      <button onClick={add} style={{padding: '10px'}}>{'Add'}</button>
      {
        list.map(val => val)
      }    
    </div>
  );
}

export default App;
