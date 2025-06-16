import SkeletonCard from "./SkeletonCard";
import BlackBox from "./BlackBox";
const GameGrid = ({ games, error, isLoading }) => {
  return (
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
            rating={game.rating_top}
          />
        ))
      )}
    </div>
  );
};
export default GameGrid;
