const CriticScore = ({ score }) => {
  const boxColor =
    score > 70
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";

  return (
    <div
      className={`inline-block px-2 py-1/2 rounded-md text-sm font-semibold ${boxColor}`}
    >
      {score}
    </div>
  );
};

export default CriticScore;
