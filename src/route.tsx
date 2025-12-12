import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home";
import { Gallery } from "./pages/galery";
import { NotFound } from "./pages/not-found";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "galeria",
                element: <Gallery />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);