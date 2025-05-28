import Cell from './Cells.jsx'

export default function Grid({ setMoney, setEggs }) {
    return (
        <div className="bg-gray-300 relative w-200 h-200">
          <div className='grid grid-cols-10 gap-0'>
            {[...Array(100)].map((_, i) => (
                <Cell key={i} setMoney={setMoney} setEggs={setEggs}/>
            ))}
          </div>
        </div>
    )
}