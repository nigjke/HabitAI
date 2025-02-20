import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.tsx";
import React from "react";
import { ThemeContextProvider } from "./Context/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
