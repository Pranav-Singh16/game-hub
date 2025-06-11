import { useRecoilValue } from "recoil";
// import { genres, isDarkMode } from "../recoil/index";

// const FetchingGenres = () => {
//   const results = useRecoilValue(genres);
//   const dark = useRecoilValue(isDarkMode);

//   if (!Array.isArray(results) || results.length === 0) {
//     return <div>No genres available</div>;
//   }

//   return (
//     <div className="p-4">
//       {results.map((result) => (
//         <div
//           className={`flex items-center justify-start p-2 gap-4 rounded-md mb-2 shadow-sm
//             ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
//           key={result.id || result.name}
//         >
//           <div className="w-8 h-8 rounded-md overflow-hidden">
//             <img
//               src={result.image_background}
//               alt={`${result.name} genre`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="text-sm font-medium">{result.name}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchingGenres;
import { useRecoilValueLoadable } from "recoil";
import { useEffect, useState } from "react";
import { genres, isDarkMode } from "../recoil/index";

const FetchingGenres = () => {
  const genresLoadable = useRecoilValueLoadable(genres);
  const dark = useRecoilValue(isDarkMode);
  const [showContent, setShowContent] = useState(false); // ✅ You forgot this

  useEffect(() => {
    let timeout;

    if (genresLoadable.state === "hasValue") {
      timeout = setTimeout(() => {
        setShowContent(true);
      }, 1000); // 1 second delay (you had 5000ms = 5s)
    }

    return () => clearTimeout(timeout);
  }, [genresLoadable.state]);

  if (genresLoadable.state === "loading" || !showContent) {
    return (
      <div className="flex justify-center items-center h-full p-4">
        <div
          className="w-6 h-6 border-4 border-gray-300 border-t-transparent rounded-full animate-spin
          dark:border-gray-500 dark:border-t-transparent"
        ></div>
      </div>
    );
  }

  if (genresLoadable.state === "hasError") {
    return <div className="text-red-500 p-4">Failed to load genres.</div>;
  }

  const results = genresLoadable.contents;

  if (!Array.isArray(results) || results.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 p-4">
        No genres available
      </div>
    );
  }

  return (
    <div className="p-4">
      {results.map((result) => (
        <div
          className={`flex items-center justify-start p-2 gap-4 rounded-md mb-2 shadow-sm
            ${dark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}`}
          key={result.id || result.name}
        >
          <div className="w-8 h-8 rounded-md overflow-hidden">
            <img
              src={result.image_background}
              alt={`${result.name} genre`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm font-medium">{result.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FetchingGenres;
