import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./ui/Layout/AppLayout/AppLayout";
import About from "./pages/About";
import "./scss/main.scss";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
