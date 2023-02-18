import React from "react";
import ReactDOM from "react-dom/client";

import TV from "./components/TV/TV";
import App from "App";
import EffectsProvider from "hooks/useRetro";

import "main.scss";

ReactDOM.createRoot(document.getElementById("page") as HTMLElement).render(
  <React.StrictMode>
    <EffectsProvider>
      <TV />
      <App />
    </EffectsProvider>
  </React.StrictMode>
);
