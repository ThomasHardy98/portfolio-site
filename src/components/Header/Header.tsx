import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { EffectsContext } from "context/EffectsContext";

import TVButton from "components/TV/TVButton";

import styles from "components/Header/Header.module.scss";

const Header = () => {
  let navigate = useNavigate();
  const effCtx = useContext(EffectsContext);

  const toggleEffects = () => {
    effCtx.setRetroEffects((effCtx.useRetro = !effCtx.useRetro));
  };

  const goToRoute = (url: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      navigate(url);
    };
  };

  return (
    <header className={styles.tvDetails}>
      <div className={styles.tvAudio} />
      <div className={styles.tvInfo}>
        <h3>FONY</h3>
      </div>
      <div className={styles.tvControls}>
        <TVButton onClick={goToRoute("/")} name="Home" />
        <TVButton onClick={goToRoute("/projects")} name="Projects" />
        <TVButton onClick={goToRoute("/skills")} name="Skills" />
        <TVButton onClick={goToRoute("/contact")} name="Contact" />
        <TVButton onClick={toggleEffects} name="Serious" color="#842020" />
        <div className={styles.powerContainer}>
          <div className={styles.powerLight} />
          <img className={styles.powerIcon} src="src\assets\power.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
