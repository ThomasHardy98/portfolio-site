import { Fragment, useContext } from "react";

import { EffectsContext } from "context/EffectsContext";

import PageLoad from "components/PageLoad/PageLoad";
import AnimatedRoutes from "components/AnimatedRoutes";
import Pong from "./components/Pong/Pong";

import styles from "App.module.scss";

function App() {
  const effCtx = useContext(EffectsContext);

  // Add theme switching, when serious button is pressed. Remove pong and switch to light readable theme

  return (
    <Fragment>
      <PageLoad />
      <div
        className={`${styles.contentContainer} ${styles.textGlow} ${styles.retroEffects}`}
      >
        {effCtx.useRetro && <Pong />}
        <AnimatedRoutes />
      </div>
    </Fragment>
  );
}

export default App;
