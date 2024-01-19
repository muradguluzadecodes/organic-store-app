import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import AppLayout from "./ui/Layout/AppLayout/AppLayout";
import "./scss/main.scss";

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
        path: "/juice",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
