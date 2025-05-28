export default function Data({ money, level, eggs }) {
  return (
    <div className="absolute top-4 w-full text-center text-white font-bold">
      <div className="text-green-500">Money: ${money}</div>
      <div className="text-blue-300">Level: {level}</div>
      <div className="text-pink-200">Eggs: {eggs.length}</div>
    </div>
  );
}
