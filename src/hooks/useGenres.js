import useData from "./useData";
import genres from "../data/genres";

// const useGenres = () => useData("/genres");
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
