import { useState } from 'react';
import { useMemo } from 'react';
import './App.css';

const complexComputed = (e) => {
  console.log ('computing');
  let i = 0
  while (i < 1000000000) i++
  return e * 2
}

function App() {
const [num, setNum] = useState (24)
const [color, setColor] = useState (false)

const stylz = {
  color: color ? 'red' : 'black'
}

const compute = useMemo (e => complexComputed (num), [num])

  return (
    <div className="App">
      <h1 style={stylz}>Сложные вычисления равны: {compute}</h1>
      <input type='button' value='increase' onClick={e => setNum(num +1)}/>
      <input type='button' value='decrease' onClick={e => setNum(num -1)}/>
      <input type='button' value='Cheng color' onClick={e => setColor(!color)}/>

    </div>
  );
}

export default App;
