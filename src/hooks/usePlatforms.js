import useData from "./useData";
// const usePlatforms = () => useData("platforms/lists/parents");

// console.log("useplatforms", usePlatforms);
// export default usePlatforms;
// const data = ["iphone", "playstation", "pc", "xbox"];
// const error = "";
// const isLoading = false;

const usePlatforms = () => {
  // console.log("usePlatforms hook is being called!"); // Log this to see if the hook is invoked
  const { data, error, isLoading } = useData("platforms/lists/parents");
  // console.log("usePlatforms - Data:", data); // Log the fetched data here
  // console.log("usePlatforms - Error:", error); // Log any errors here
  return { platforms: data, error, isLoading }; // Make sure you return the correct data
};
export default usePlatforms;
