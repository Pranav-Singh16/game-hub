import { useState } from "react";
import useGames from "../hooks/useGames";
import { FetchingGenres, GameGrid } from "../components";
import PlatformSelector from "../components/PlatformSelector";

const Landing = () => {
  const [gameQuery, setGameQuery] = useState({});

  const { data: games, error, isLoading } = useGames(gameQuery); // pass single query object

  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start">
      <div className="hidden sm:block w-1/5 sticky top-0 h-screen overflow-y-auto border-r border-gray-300 p-4 sidebar-scroll">
        <FetchingGenres
          selectedGenre={gameQuery.genre}
          onSelectedGenre={(genre) =>
            setGameQuery((prev) => ({ ...prev, genre }))
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-y-6 p-4 justify-items-center sm:justify-items-stretch">
        <div className="flex justify-start mb-4">
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery((prev) => ({ ...prev, platform }))
            }
          />
        </div>

        <GameGrid games={games} error={error} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Landing;

// import { useRecoilValue } from "recoil";
// import { useState } from "react";
// import useGames from "../hooks/useGames"; //  correct hook
// import { FetchingGenres, GameGrid } from "../components";
// import { selectedGenres } from "../recoil/index";
// import PlatformSelector from "../components/PlatformSelector";

// const Landing = () => {
//   const selectedGenre = useRecoilValue(selectedGenres);
//   // const [selectedPlatform, setSelectedPlatform] = useState(null);
//   const [gameQuery, setGameQuery] = useState({});
//   const {
//     data: games,
//     error,
//     isLoading,
//   } = useGames(selectedGenre, selectedPlatform); //adding selectedPlatform
//   console.log("platform", selectedPlatform);

//   // console.log("landing genre");
//   return (
//     <div className="flex flex-col items-center sm:flex-row sm:items-start">
//       <div className="hidden sm:block w-1/5 sticky top-0 h-screen overflow-y-auto border-r border-gray-300 p-4 sidebar-scroll">
//         <FetchingGenres selectedGenre= {gameQuery.genre} onSelectedGenre={(genre)=>setGameQuery({...gameQuery, genre})}/>
//       </div>

//       <div className="grid grid-cols-1 gap-y-6 p-4 justify-items-center sm:justify-items-stretch ...">
//         {/* Platform Selector Centered */}
//         <div className="flex justify-start mb-4">
//           <PlatformSelector
//             onSelectPlatform={(platform) => {
//               setSelectedPlatform(platform);
//             }}
//           />
//           {/* <PlatformSelector /> */}
//         </div>
//         {/* Game Grid */}
//         <GameGrid games={games} error={error} isLoading={isLoading} />
//       </div>
//     </div>
//   );
// };

// export default Landing;
