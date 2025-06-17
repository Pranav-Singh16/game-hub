import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, About, Error } from "./Pages/index";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Landing />,
          },
          {
            path: "about",
            element: <About />,
          },
        ],
      },
    ],
    {
      basename: "/game-hub/", // 👈 this is required for GitHub Pages
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
