import { Fragment, useContext } from "react";

import { EffectsContext } from "context/EffectsContext";

import PageLoad from "components/PageLoad/PageLoad";
import AnimatedRoutes from "components/AnimatedRoutes";
import Pong from "./components/Pong/Pong";

import styles from "App.module.scss";

function App() {
  const effCtx = useContext(EffectsContext);

  return (
    <Fragment>
      <div className={`${styles.contentContainer} ${styles.retroEffects}`}>
        <PageLoad />
        <div id={styles.borderEffect}></div>
        {effCtx.useRetro && <Pong />}
        <AnimatedRoutes />
      </div>
    </Fragment>
  );
}

export default App;
