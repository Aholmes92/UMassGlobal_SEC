
const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

export default function Pokecard({ id, name, type }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 gap-2">
      <img src={`${BASE_URL}/${id}.png`} alt={name} className="w-24 h-24" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm uppercase text-gray-500">{type}</p>
    </div>
  );
}