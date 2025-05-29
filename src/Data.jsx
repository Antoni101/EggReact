export default function Data({ money, level, eggs, setEggs }) {
  const totalEggs = eggs.reduce((sum, egg) => sum + egg.amount, 0);

  // Filter eggs to only those with amount > 0
  const ownedEggs = eggs.filter(egg => egg.amount > 0);

  const handleEggClick = (clickedEgg) => {
    setEggs(eggs.map(egg => 
      egg.id === clickedEgg.id
        ? { ...egg, selected: !egg.selected }
        : egg
    ));
  };

  return (
    <>
      <div className="absolute top-4 w-full text-center text-white font-bold">
        <div className="text-green-500">Money: ${money}</div>
        <div className="text-blue-300">Level: {level}</div>
        <div className="text-pink-200">Eggs: {totalEggs}</div>
      </div>
      
      <div className="absolute left-4 top-1/2 -translate-y-1/2 border-2 bg-white p-4 rounded shadow flex flex-col items-center gap-2 min-w-[180px]">
        <div className="text-red-700 font-semibold mb-2">Your Eggs</div>
        {ownedEggs.length === 0 ? (
          <div className="text-gray-500">No eggs owned</div>
        ) : (
          ownedEggs.map(egg => (
            <button
              key={egg.id}
              className={`px-3 py-1 active:transform active:scale-105 hover:cursor-pointer rounded transition text-white ${egg.selected ? 'bg-yellow-700' : 'bg-gray-400'}`}
              onClick={() => handleEggClick(egg)}
            >
              {egg.name} ({egg.amount})
            </button>
          ))
        )}
      </div>
    </>
  );
}
