import { useRecoilValue } from "recoil";
import { genres } from "../recoil/index";

const FetchingGenres = () => {
  const results = useRecoilValue(genres);

  // Check if results is an array and not empty
  if (!Array.isArray(results) || results.length === 0) {
    return <div>No genres available</div>;
  }

  return (
    <div>
      {results.map((result) => (
        <div key={result.id || result.name}>{result.name}</div>
      ))}
    </div>
  );
};

export default FetchingGenres;
