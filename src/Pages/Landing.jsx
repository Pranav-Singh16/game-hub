//proportion

// import { useRecoilValue } from "recoil";
// import { game } from "../recoil/index";
// import { BlackBox, FetchingGenres, SkeletonCard } from "../components";

// const Landing = () => {
//   const results = useRecoilValue(game);
//   const isLoading = !results || results.length === 0;

//   // Estimate number of skeletons to fill the screen initially
//   const ITEMS_PER_ROW = 3; // Based on lg:grid-cols-3
//   const APPROX_ROW_HEIGHT_PX = 350; // Approximate height of a BlackBox card + gap
//   const INITIAL_SCREEN_HEIGHT_PX = window.innerHeight;
//   const MIN_SKELETON_ROWS = Math.ceil(
//     INITIAL_SCREEN_HEIGHT_PX / APPROX_ROW_HEIGHT_PX
//   );
//   const MIN_SKELETON_COUNT = ITEMS_PER_ROW * MIN_SKELETON_ROWS;

//   return (
//     // The main container. This div will hold all content and define the single scrollbar.
//     // Removed 'flex' here and let individual sections handle their layout.
//     // Instead of flex, we'll structure content vertically first, then apply column layout where needed.
//     <div className="flex">
//       {" "}
//       {/* Keep flex to create the side-by-side layout */}
//       {/* Left Column Container */}
//       <div className="w-1/5">
//         {/*
//           This is the key. The FetchingGenres component itself is NOT sticky yet.
//           It's just content. We want the *parent* of the scrollable content to be sticky.
//           However, to make the left column 'scroll' initially and then stick,
//           we need to make the container of FetchingGenres (or FetchingGenres itself)
//           part of the main flow, and use sticky positioning *inside* that flow.

//           Let's redefine the behavior:
//           - The whole `flex` container will scroll.
//           - The left `w-1/5` content will scroll initially.
//           - When the `FetchingGenres` content reaches the top, it should then stick.
//           - The right `w-4/5` content continues scrolling down.
//         */}
//         <div className="sticky top-0">
//           {" "}
//           {/* This div makes FetchingGenres sticky */}
//           <FetchingGenres />
//         </div>
//       </div>
//       {/* Right Column Container */}
//       <div className="w-4/5 p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
//           {isLoading
//             ? Array.from({ length: Math.max(6, MIN_SKELETON_COUNT) }).map(
//                 (_, index) => <SkeletonCard key={index} />
//               )
//             : results.map((result) => (
//                 <BlackBox
//                   key={result.id}
//                   img={result.background_image}
//                   name={result.name}
//                   devices={result.parent_platforms}
//                   score={result.metacritic}
//                 />
//               ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

// two different scroll

// import { useRecoilValue } from "recoil";
// import { game } from "../recoil/index";
// import { BlackBox, FetchingGenres, SkeletonCard } from "../components";

// const Landing = () => {
//   const results = useRecoilValue(game);
//   const isLoading = !results || results.length === 0;

//   return (
//     <div className="flex">
//       {/* Left Sidebar: Sticky, full viewport height, and scrollable if its content overflows */}
//       {/* If FetchingGenres itself has internal scrolling, it should be wrapped here */}
//       <div className="w-1/5 sticky top-0 h-screen overflow-y-auto">
//         <FetchingGenres />
//       </div>

//       {/* Right Content Area: This div will push the overall page scroll.
//           It does NOT have h-screen or overflow-y-auto here, because we want
//           the main document scroll to handle its content. */}
//       <div className="w-4/5 p-4">
//         {/* Your grid of BlackBox components */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
//           {isLoading
//             ? Array.from({ length: 6 }).map((_, index) => (
//                 <SkeletonCard key={index} />
//               ))
//             : results.map((result) => (
//                 <BlackBox
//                   key={result.id}
//                   img={result.background_image}
//                   name={result.name}
//                   devices={result.parent_platforms}
//                   score={result.metacritic}
//                 />
//               ))}
//         </div>

//         {/* IMPORTANT: Add a div with minimum height to ensure scrolling continues
//             if the BlackBox content is initially short but you want to scroll past
//             the sticky sidebar's conceptual bottom. This often indicates the problem. */}
//         {/* <div className="min-h-[50vh]"></div> */}
//         {/* OR, more typically, you just ensure your main content is long enough */}
//         {/* If your 'BlackBox' content is genuinely short, and you're seeing blank space
//             before the page fully scrolls, it implies the content isn't "long enough"
//             to force a scroll past the sticky element's visual bottom. */}
//       </div>
//     </div>
//   );
// };

// export default Landing;

//two scroll bar

// import { useRecoilValue } from "recoil";
// import { game } from "../recoil/index";
// import { BlackBox, FetchingGenres, SkeletonCard } from "../components";

// const Landing = () => {
//   const results = useRecoilValue(game);
//   const isLoading = !results || results.length === 0;

//   return (
//     <div className="flex min-h-screen">
//       <div className="w-1/5 sticky top-0">
//         <FetchingGenres />
//       </div>

//       <div className="w-4/5 overflow-y-auto h-screen p-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
//           {isLoading
//             ? Array.from({ length: 6 }).map((_, index) => (
//                 <SkeletonCard key={index} />
//               ))
//             : results.map((result) => (
//                 <BlackBox
//                   key={result.id}
//                   img={result.background_image}
//                   name={result.name}
//                   devices={result.parent_platforms}
//                   score={result.metacritic}
//                 />
//               ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Landing;

// import { useRecoilValue } from "recoil";
// import { game } from "../recoil/index";
// import { BlackBox, FetchingGenres, SkeletonCard } from "../components";

// const Landing = () => {
//   const results = useRecoilValue(game);
//   const isLoading = !results || results.length === 0;

//   return (
//     <div className="flex items-center">
//       <div className="w-1/5">
//         <FetchingGenres />
//       </div>

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
