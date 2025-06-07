import { useRecoilValueLoadable } from "recoil";
import { games } from "../recoil/index"; // adjust the import path

import { useState, useEffect } from "react";
import apiClients from "../services/apiClients";

const GameGrid = () => {
  const gamesLoadable = useRecoilValueLoadable(games);
  console.log("gamesLoadable:", gamesLoadable);

  if (gamesLoadable.state === "loading") {
    return <p>Loading...</p>;
  }

  if (gamesLoadable.state === "hasError") {
    return <p>Error: {gamesLoadable.contents.message}</p>;
  }

  //   console.log(gamesLoadable);

  return (
    <ul>
      {gamesLoadable.contents.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

// const GameGrid = () => {
//   const [games, setGames] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     apiClients
//       .get("/xgames")
//       .then((res) => setGames(res.data.results))
//       .catch((err) => setError(err.message));
//   });

//   console.log(`game${games} error${error}`);
//   return (
//     <ul>
//       {/* {gamesLoadable.contents.map((game) => (
//         <li key={game.id}>{game.name}</li>
//       ))} */}
//       {games.map((game) => (
//         <li key={game.id}>{game.name}</li>
//       ))}
//     </ul>
//   );
// };

export default GameGrid;
