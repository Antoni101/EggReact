import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Grid from './Grid.jsx'
import Data from './Data.jsx'
import eggsData from './Eggs.jsx'

function App() {
  const [money, setMoney] = useState(0);
  const [availableEggs, setAvailableEggs] = useState(eggsData);
  const [playerEggs, setPlayerEggs] = useState([eggsData[0]]); // Start with basic egg
  const [level, setLevel] = useState(1);

  return (
    <div className='relative w-screen h-screen flex items-center justify-center'>
      <Data money={money} level={level} eggs={playerEggs} />

      <Grid setMoney={setMoney} setEggs={setPlayerEggs} level={level} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
