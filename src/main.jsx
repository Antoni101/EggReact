import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Grid from './Grid.jsx'
import Data from './Data.jsx'

function App() {
  const [money, setMoney] = useState(0);
  const [eggs, setEggs] = useState([]);
  const [level, setLevel] = useState(1);

  return (
    <div className='relative w-screen h-screen flex items-center justify-center'>
      <Data money={money} level={level} eggs={eggs} />

      <Grid setMoney={setMoney} setEggs={setEggs} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
