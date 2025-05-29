import Cell from './Cells.jsx'

export default function Grid({ setMoney, setEggs, level, eggs }) {
    const gridSize = Math.min(level, 10); // max 10x10
    const numCells = gridSize * gridSize;

    return (
        <div className="flex items-center justify-center">
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
            {[...Array(numCells)].map((_, i) => (
                <Cell key={i} setEggs={setEggs} eggs={eggs} />
            ))}
          </div>
        </div>
    )
}