import { useContext, Fragment } from "react";

import { EffectsContext } from "context/EffectsContext";

import Header from "components/Header/Header";

import styles from "components/TV/TV.module.scss";

const TV = () => {
  const effCtx = useContext(EffectsContext);

  return (
    <Fragment>
      <div className={styles.tvContainer}>
        <div id={styles.tvBorder}></div>
        <Header />
      </div>
      <div id={styles.borderEffect}></div>
    </Fragment>
  );
};

export default TV;
