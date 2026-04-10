import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layout/RootLayout.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AppsPage from "./pages/apps/AppsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/appsPage",
        Component: AppsPage,
      },
    ],
    errorElement: (
      <h1 className="w-full min-h-screen flex items-center justify-center font-semibold text-2xl text-rose-600 ">
        Not found the page
      </h1>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
