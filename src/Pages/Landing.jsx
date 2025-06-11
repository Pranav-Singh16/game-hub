import { useRecoilValue } from "recoil";
import { game } from "../recoil/index";
import { BlackBox, FetchingGenres, SkeletonCard } from "../components";
import { isDarkMode } from "../recoil/index";

const Landing = () => {
  const dark = useRecoilValue(isDarkMode);
  const results = useRecoilValue(game);
  const isLoading = !results || results.length === 0;

  return (
    <div className="flex">
      {/* Left Sidebar: Sticky, full viewport height, and scrollable if its content overflows */}
      {/* If FetchingGenres itself has internal scrolling, it should be wrapped here */}
      <div className="w-1/5 sticky top-0 h-screen overflow-y-auto">
        <FetchingGenres />
      </div>

      {/* Right Content Area: This div will push the overall page scroll.
          It does NOT have h-screen or overflow-y-auto here, because we want
          the main document scroll to handle its content. */}
      <div className="w-4/5 p-4">
        {/* Your grid of BlackBox components */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
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

        {/* IMPORTANT: Add a div with minimum height to ensure scrolling continues
            if the BlackBox content is initially short but you want to scroll past
            the sticky sidebar's conceptual bottom. This often indicates the problem. */}
        {/* <div className="min-h-[50vh]"></div> */}
        {/* OR, more typically, you just ensure your main content is long enough */}
        {/* If your 'BlackBox' content is genuinely short, and you're seeing blank space
            before the page fully scrolls, it implies the content isn't "long enough"
            to force a scroll past the sticky element's visual bottom. */}
      </div>
    </div>
  );
};

export default Landing;
