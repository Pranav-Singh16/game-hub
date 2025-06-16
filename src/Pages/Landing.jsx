// src/pages/Landing.js
import { useRecoilState } from "recoil";
import { gameQuerys } from "../recoil/index"; // Import your atom
import useGames from "../hooks/useGames";
import { FetchingGenres, GameGrid, GameHeading } from "../components";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Landing = () => {
  const [gameQuery, setGameQuery] = useRecoilState(gameQuerys); // Use Recoil's state instead of useState

  const { data: games, error, isLoading } = useGames(gameQuery);

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
        <GameHeading gameQuery={gameQuery} />
        <div className="flex justify-start mb-4 gap-4">
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery((prev) => ({ ...prev, platform }))
            }
          />
        </div>

        <GameGrid games={games} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Landing;
