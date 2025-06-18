import Pokecard from "./Pokecard";

export default function Pokedex({ pokemon }) {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
      {pokemon.map((p) => (
        <Pokecard key={p.id} {...p} />
      ))}
    </section>
  );
}