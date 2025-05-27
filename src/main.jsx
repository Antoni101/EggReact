import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Grid from './Grid.jsx'


function App() {
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <Grid />
    </div>
  );
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
