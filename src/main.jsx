import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
