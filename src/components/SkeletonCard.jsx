const SkeletonCard = () => {
  const baseSkeleton = "animate-pulse rounded";
  const light = "bg-gray-300";
  const dark = "dark:bg-neutral-800"; // customizable dark tone

  return (
    <div className="w-80 rounded-lg overflow-hidden shadow-md bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-neutral-700">
      <div className={`h-[200px] ${baseSkeleton} ${light} ${dark}`} />

      <div className="p-4 space-y-2">
        <div className={`h-4 w-1/2 ${baseSkeleton} ${light} ${dark}`} />
        <div className={`h-4 w-3/4 ${baseSkeleton} ${light} ${dark}`} />
        <div className={`h-3 w-1/4 ${baseSkeleton} ${light} ${dark}`} />
      </div>
    </div>
  );
};

export default SkeletonCard;
