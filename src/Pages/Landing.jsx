import { useRecoilValue } from "recoil";
import { game } from "../recoil/index";
import { BlackBox, FetchingGenres, SkeletonCard } from "../components";

const Landing = () => {
  const results = useRecoilValue(game);
  const isLoading = !results || results.length === 0;

  return (
    <div className="flex items-center">
      <div className="w-1/5">
        <FetchingGenres />
      </div>

      <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : results.map((result) => (
              <BlackBox
                key={result.id}
                img={result.background_image}
                name={result.name}
                devices={result.parent_platforms}
                score={result.metacritic}
              />
            ))}
      </div>
    </div>
  );
};

export default Landing;

//loading time
// import { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
// import { game } from "../recoil/index";
// import { BlackBox, SkeletonCard } from "../components";

// const Landing = () => {
//   const results = useRecoilValue(game);
//   const [isLoading, setIsLoading] = useState(true);

//   // Simulate loading delay (e.g., 1.5 seconds)
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsLoading(false);
//     }, 4000); // 1500ms = 1.5 seconds

//     return () => clearTimeout(timeout); // Clean up timeout
//   }, []);

//   return (
//     <div className="flex items-center">
//       <div className="w-1/5">landing</div>

//       <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
//         {isLoading
//           ? Array.from({ length: 6 }).map((_, index) => (
//               <SkeletonCard key={index} />
//             ))
//           : results.map((result) => (
//               <BlackBox
//                 key={result.id}
//                 img={result.background_image}
//                 name={result.name}
//                 devices={result.parent_platforms}
//                 score={result.metacritic}
//               />
//             ))}
//       </div>
//     </div>
//   );
// };

// export default Landing;
