import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Grid from './Grid.jsx'
import Data from './Data.jsx'

function App() {
  const [money, setMoney] = useState(0);
  const [level, setLevel] = useState(1);
  const [inventory, setInventory] = useState([]);

  const [eggs, setEggs] = useState([
    { id: 1, name: "F Tier Egg", rate: 10, amount: 0, selected: false },
    { id: 2, name: "D Tier Egg", rate: 8, amount: 0, selected: false },
    { id: 3, name: "C Tier Egg", rate: 6, amount: 1, selected: false },
    { id: 4, name: "B Tier Egg", rate: 4, amount: 0, selected: false },
    { id: 5, name: "A Tier Egg", rate: 2, amount: 0, selected: false },
    { id: 6, name: "S Tier Egg", rate: 1, amount: 0, selected: false }
  ]);

  return (
    <div className='relative w-screen h-screen flex items-center justify-center'>
      <Data money={money} level={level} eggs={eggs} setEggs={setEggs} />
      <Grid inventory={inventory} setInventory={setInventory} setMoney={setMoney} setEggs={setEggs} level={level} eggs={eggs} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
