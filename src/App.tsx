import { Fragment, useContext } from "react";

import { EffectsContext } from "context/EffectsContext";

import PageLoad from "components/PageLoad/PageLoad";
import AnimatedRoutes from "components/AnimatedRoutes";

import "App.scss";

function App() {
  const effCtx = useContext(EffectsContext);
  let className = "";

  if (effCtx.useRetro) {
    className += "text-glow";
  } else {
    className += "";
  }

  return (
    <Fragment>
      <PageLoad />
      <div className={`content-container ${className}`}>
        <AnimatedRoutes />
      </div>
    </Fragment>
  );
}

export default App;
