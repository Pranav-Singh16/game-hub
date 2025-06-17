import { useRecoilValue } from "recoil";
import { isDarkMode } from "../recoil/index";

const About = () => {
  const dark = useRecoilValue(isDarkMode);

  return (
    <div
      className={`min-h-screen px-6 py-10 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold border-b pb-3 border-gray-300 dark:border-gray-700">
          About GameHub
        </h1>

        <p className="text-lg leading-relaxed">
          <strong>GameHub</strong> is a responsive web app that helps you
          discover, browse, and explore video games across different platforms.
          It uses the{" "}
          <a
            href="https://rawg.io/apidocs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            RAWG API
          </a>{" "}
          to fetch up-to-date data on games, ratings, and platforms.
        </p>

        <p className="text-lg leading-relaxed">
          The frontend is built with <strong>React</strong>, styled using{" "}
          <strong>Tailwind CSS</strong>, and utilizes <strong>Recoil</strong>{" "}
          for global state management (like theme toggling).
        </p>

        <p className="text-lg leading-relaxed">
          This project is a practice in modern frontend architecture — combining
          dynamic UI, responsive design, and efficient state handling.
        </p>

        <p className="text-lg leading-relaxed">
          You can check out the source code on{" "}
          <a
            href="https://github.com/pranav-singh16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            my GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
