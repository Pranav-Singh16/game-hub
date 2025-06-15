import { useMemo } from "react";
import useData from "./useData";

const useGames = (query) => {
  const requestConfig = useMemo(
    () => ({
      params: {
        genres: query.genre?.id,
        platforms: query.platform?.id,
        ordering: query.sortOrder,
      },
    }),
    [query.genre?.id, query.platform?.id, query.sortOrder] // ← FIXED
  );

  return useData("/games", requestConfig, [requestConfig]); // Optional: use requestConfig as dep
};

// const useGames = (query) => {
//   const requestConfig = useMemo(
//     () => ({
//       params: {
//         genres: query.genre?.id,
//         platforms: query.platform?.id,
//         ordering: query.sortOrder,
//       },
//     }),
//     [query.genre?.id, query.platform?.id]
//   );

//   return useData("/games", requestConfig, [query]);
// };

export default useGames;
