import { useRecoilValue } from "recoil";
import useGames from "../hooks/useGames"; // ✅ correct hook
import { BlackBox, FetchingGenres, SkeletonCard } from "../components";
import { isDarkMode } from "../recoil/index";
import { selectedGenres } from "../recoil/index";

const Landing = () => {
  const dark = useRecoilValue(isDarkMode);
  const selectedGenre = useRecoilValue(selectedGenres);
  const { data: games, error, isLoading } = useGames(selectedGenre);

  console.log("landing genre");
  return (
    <div className="flex">
      <div className="hidden sm:block w-1/5 sticky top-0 h-screen overflow-y-auto border-r border-gray-300 p-4 sidebar-scroll">
        <FetchingGenres />
      </div>

      <div className="w-full sm:w-4/5 p-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : error ? (
            <div className="text-red-500">Failed to load games: {error}</div>
          ) : (
            games.map((game) => (
              <BlackBox
                key={game.id}
                img={game.background_image}
                name={game.name}
                devices={game.parent_platforms}
                score={game.metacritic}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
