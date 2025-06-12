import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil/index";
import useGenres from "../hooks/useGenres";
import { useState } from "react";

const FetchingGenres = () => {
  const { data: genres, error, isLoading } = useGenres();
  const dark = useRecoilValue(isDarkMode);

  // State to track the selected genre
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    // If the clicked genre is the same as the current selection, reset it
    if (selectedGenre === genre.id) {
      setSelectedGenre(null);
    } else {
      setSelectedGenre(genre.id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full p-4">
        <div
          className="w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin
          dark:border-gray-500 dark:border-t-transparent"
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">Failed to load genres: {error}</div>
    );
  }

  if (!Array.isArray(genres) || genres.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 p-4">
        No genres available
      </div>
    );
  }

  return (
    <div className="p-4">
      {genres.map((genre) => (
        <div
          key={genre.id || genre.name}
          className={`flex items-center justify-start p-2 gap-4 rounded-md mb-2 shadow-sm
            ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"} 
            transition-transform duration-300 ease-in-out
            hover:scale-105 hover:shadow-lg
            ${
              selectedGenre === genre.id
                ? `${
                    dark
                      ? "bg-gray-600 border-2 border-purple-500"
                      : "bg-gray-200 border-2 border-indigo-500"
                  } scale-110`
                : ""
            }`}
          onClick={() => handleGenreClick(genre)}
        >
          <div className="w-8 h-8 rounded-md overflow-hidden">
            <img
              src={genre.image_background}
              alt={`${genre.name} genre`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <button className="text-sm font-medium hover:text-indigo-500 transition-colors duration-200">
            {genre.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FetchingGenres;

// hover

// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index";
// import useGenres from "../hooks/useGenres";

// const FetchingGenres = () => {
//   const { data: genres, error, isLoading } = useGenres();
//   const dark = useRecoilValue(isDarkMode);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-full p-4">
//         <div
//           className="w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin
//           dark:border-gray-500 dark:border-t-transparent"
//         ></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 p-4">Failed to load genres: {error}</div>
//     );
//   }

//   if (!Array.isArray(genres) || genres.length === 0) {
//     return (
//       <div className="text-gray-500 dark:text-gray-400 p-4">
//         No genres available
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       {genres.map((genre) => (
//         <div
//           className={`flex items-center justify-start p-2 gap-4 rounded-md mb-2 shadow-sm
//             ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}
//             hover:${dark ? "bg-gray-700" : "bg-gray-200"}
//             hover:scale-105
//             transition-transform duration-300 ease-in-out
//             hover:shadow-lg`}
//           key={genre.id || genre.name}
//         >
//           <div className="w-8 h-8 rounded-md overflow-hidden">
//             <img
//               src={genre.image_background}
//               alt={`${genre.name} genre`}
//               className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//             />
//           </div>
//           <button className="text-sm font-medium hover:text-indigo-500 transition-colors duration-200">
//             {genre.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchingGenres;

// Normal

// import { useRecoilValue } from "recoil";
// import { isDarkMode } from "../recoil/index";
// import useGenres from "../hooks/useGenres";

// const FetchingGenres = () => {
//   const { data: genres, error, isLoading } = useGenres();
//   const dark = useRecoilValue(isDarkMode);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-full p-4">
//         <div
//           className="w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin
//           dark:border-gray-500 dark:border-t-transparent"
//         ></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-red-500 p-4">Failed to load genres: {error}</div>
//     );
//   }

//   if (!Array.isArray(genres) || genres.length === 0) {
//     return (
//       <div className="text-gray-500 dark:text-gray-400 p-4">
//         No genres available
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       {genres.map((genre) => (
//         <div
//           className={`flex items-center justify-start p-2 gap-4 rounded-md mb-2 shadow-sm
//             ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
//           key={genre.id || genre.name}
//         >
//           <div className="w-8 h-8 rounded-md overflow-hidden">
//             <img
//               src={genre.image_background}
//               alt={`${genre.name} genre`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <button onH className="text-sm font-medium">
//             {genre.name}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchingGenres;
