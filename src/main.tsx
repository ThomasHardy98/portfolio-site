import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import TV from "./components/TV/TV";
import App from "App";
import EffectsProvider from "hooks/useRetro";

import "main.module.scss";

ReactDOM.createRoot(document.getElementById("page") as HTMLElement).render(
  <React.StrictMode>
    <EffectsProvider>
      <BrowserRouter>
        <TV />
        <App />
      </BrowserRouter>
    </EffectsProvider>
  </React.StrictMode>
);
