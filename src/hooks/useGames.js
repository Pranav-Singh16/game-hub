import { useMemo } from "react";
import useData from "./useData";

const useGames = (query) => {
  const requestConfig = useMemo(
    () => ({
      params: {
        genres: query.genre?.id,
        platforms: query.platform?.id,
        ordering: query.sortOrder,
        search: query.searchText,
      },
    }),
    // [query.genre?.id, query.platform?.id, query.sortOrder, query.searchText] // ← FIXED
    [JSON.stringify(query)]
  );

  return useData("/games", requestConfig, [requestConfig]); // Optional: use requestConfig as dep
};

export default useGames;
