import { useState } from "react";
import useGames from "../hooks/useGames";
import { FetchingGenres, GameGrid } from "../components";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Landing = () => {
  const [gameQuery, setGameQuery] = useState({});

  const { data: games, error, isLoading } = useGames(gameQuery); // pass single query object

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start">
      <div className="hidden sm:block w-1/5 sticky top-0 h-screen overflow-y-auto border-r border-gray-300 p-4 sidebar-scroll">
        <FetchingGenres
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) =>
            setGameQuery((prev) => ({ ...prev, genre }))
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-y-6 p-4 justify-items-center sm:justify-items-stretch">
        <div className="flex justify-start mb-4 gap-4">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery((prev) => ({ ...prev, platform }))
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </div>

        <GameGrid games={games} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Landing;
