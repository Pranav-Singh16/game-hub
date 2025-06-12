import { useRecoilValueLoadable } from "recoil";

const GameGrid = () => {
  // const gamesLoadable = useRecoilValueLoadable(games);

  if (gamesLoadable.state === "loading") {
    return <p>Loading...</p>;
  }

  if (gamesLoadable.state === "hasError") {
    return (
      <p className="text-red-500">Error: {gamesLoadable.contents.message}</p>
    );
  }

  return (
    <ul>
      {gamesLoadable.contents.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};
export default GameGrid;
