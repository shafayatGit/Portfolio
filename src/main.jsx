import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./assets/Layout/MainLayout.jsx";
import Home from "./assets/Pages/Home.jsx";
import Resume from "./assets/Components/Resume/Resume.jsx";
import Education from "./assets/Components/Resume/Education.jsx";
import AboutMe from "./assets/Components/Resume/AboutMe.jsx";
import Skills from "./assets/Components/Resume/Skills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",

        // loader: () => fetch("socials.json"),
        element: <Home></Home>,
        children: [
          {
            path: "/resume/education",
            element: <Education></Education>,
          },
          {
            path: "/resume/aboutMe",
            element: <AboutMe></AboutMe>,
          },
          {
            path: "/",
            element: <Skills></Skills>,
          },
        ],
      },
      // {
      //   path: "/",
      //   element: <Resume></Resume>,

      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
