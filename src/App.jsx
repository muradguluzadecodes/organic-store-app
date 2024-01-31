import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./ui/Layout/AppLayout/AppLayout";
import About from "./pages/About";
import "./scss/main.scss";
import Contact from "./pages/Contact";
import Everything from "./pages/Everything";
import Groceries from "./pages/Groceries";
import Juice from "./pages/Juice";

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
      {
        path: "/home",
        element: <Everything />,
      },
      {
        path: "/groceries",
        element: <Groceries />,
      },
      {
        path: "/juice",
        element: <Juice />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
