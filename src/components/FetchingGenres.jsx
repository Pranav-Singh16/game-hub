import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil";
import useGenres from "../hooks/useGenres";

const FetchingGenres = ({ selectedGenre, onSelectedGenre }) => {
  const dark = useRecoilValue(isDarkMode);
  const { data: genres, error, isLoading } = useGenres();

  const handleGenreClick = (genre) => {
    if (selectedGenre?.id === genre.id) {
      onSelectedGenre(null);
    } else {
      onSelectedGenre(genre);
    }
  };

  if (isLoading) return <div className="p-4">Loading genres...</div>;
  if (error)
    return (
      <div className="text-red-500 p-4">Failed to load genres: {error}</div>
    );
  if (!Array.isArray(genres) || genres.length === 0)
    return <div className="p-4 text-gray-500">No genres available</div>;

  return (
    <div className="p-4">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className={`flex items-center p-2 mb-2 rounded-md cursor-pointer transition-all ${
            dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          } ${
            selectedGenre?.id === genre.id
              ? "border-2 border-indigo-500 scale-105"
              : ""
          }`}
          onClick={() => handleGenreClick(genre)}
        >
          <img
            src={genre.image_background}
            alt={genre.name}
            className="w-8 h-8 rounded-md mr-3 object-cover"
          />
          <span className="text-sm font-medium">{genre.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FetchingGenres;
