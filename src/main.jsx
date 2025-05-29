import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Grid from './Grid.jsx'
import Data from './Data.jsx'

function App() {
  const [money, setMoney] = useState(0);
  const [level, setLevel] = useState(1);

  const [eggs, setEggs] = useState([
    { id: 1, name: "F Tier Egg", speed: 1000, value: 50, amount: 1, selected: false },
    { id: 2, name: "E Tier Egg", speed: 800, value: 100, amount: 0, selected: false },
    { id: 3, name: "D Tier Egg", speed: 600, value: 250, amount: 0, selected: false },
    { id: 4, name: "C Tier Egg", speed: 400, value: 500, amount: 0, selected: false },
    { id: 5, name: "B Tier Egg", speed: 300, value: 1000, amount: 0, selected: false },
    { id: 6, name: "A Tier Egg", speed: 200, value: 2500, amount: 0, selected: false },
    { id: 7, name: "S Tier Egg", speed: 100, value: 5000, amount: 0, selected: false }
  ]);

  return (
    <div className='relative w-screen h-screen flex items-center justify-center'>
      <Data money={money} level={level} eggs={eggs} setEggs={setEggs} />

      <Grid setMoney={setMoney} setEggs={setEggs} level={level} eggs={eggs} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
