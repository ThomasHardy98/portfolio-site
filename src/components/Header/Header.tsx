import { useContext } from "react";

import { EffectsContext } from "context/EffectsContext";

import TVButtonNav from "components/TV/TVButtonNav";
import TVButtonGeneric from "../TV/TVButtonGeneric";

import styles from "components/Header/Header.module.scss";

const Header = () => {
  const effCtx = useContext(EffectsContext);

  const toggleEffects = () => {
    effCtx.setRetroEffects((effCtx.useRetro = !effCtx.useRetro));
  };

  return (
    <div className={styles.tvDetailsWrapper}>
      <header className={styles.tvDetails}>
        <div className={styles.tvAudio} />
        <div className={styles.tvInfo}>
          <h3>FONY</h3>
        </div>
        <div className={styles.tvControls}>
          <TVButtonNav url="/" name="Home" />
          <TVButtonNav url="/projects" name="Projects" />
          <TVButtonNav url="/contact" name="Contact" />
          <TVButtonGeneric onClick={toggleEffects} name="Serious" />
          <div className={styles.powerContainer}>
            <div className={styles.powerLight} />
            <img className={styles.powerIcon} src="assets/power.png" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
