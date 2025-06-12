import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil/index";
import useGenres from "../hooks/useGenres";

const FetchingGenres = () => {
  const { data: genres, error, isLoading } = useGenres();
  const dark = useRecoilValue(isDarkMode);

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
          className={`flex items-center justify-start p-2 gap-4 rounded-md mb-2 shadow-sm
            ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
          key={genre.id || genre.name}
        >
          <div className="w-8 h-8 rounded-md overflow-hidden">
            <img
              src={genre.image_background}
              alt={`${genre.name} genre`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm font-medium">{genre.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchingGenres;

// import { useRecoilValueLoadable, useRecoilValue } from "recoil";
// import {isDarkMode } from "../recoil/index";
// import useGenres from "../hooks/useGenres"

// const FetchingGenres = () => {
//   const {genres} = useGenres();
//   const dark = useRecoilValue(isDarkMode);

//   if (genresLoadable.state === "loading") {
//     return (
//       <div className="flex justify-center items-center h-full p-4">
//         <div
//           className="w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin
//           dark:border-gray-500 dark:border-t-transparent"
//         ></div>
//       </div>
//     );
//   }

//   if (genresLoadable.state === "hasError") {
//     return <div className="text-red-500 p-4">Failed to load genres.</div>;
//   }

//   const genres = genresLoadable.contents;

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
//           <div className="text-sm font-medium">{genre.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchingGenres;
