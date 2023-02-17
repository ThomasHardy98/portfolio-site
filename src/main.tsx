import React from "react";
import ReactDOM from "react-dom/client";

import App from "App";
import EffectsProvider from "./hooks/useRetro";

import "main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <EffectsProvider>
      <App />
    </EffectsProvider>
  </React.StrictMode>
);
