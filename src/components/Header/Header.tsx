import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { EffectsContext } from "context/EffectsContext";

import TVButton from "components/TV/TVButton";

import styles from "components/Header/Header.module.scss";

const Header = () => {
  let navigate = useNavigate();
  const [isActive, setIsActive] = useState("1");
  const effCtx = useContext(EffectsContext);

  const toggleEffects = () => {
    effCtx.setRetroEffects((effCtx.useRetro = !effCtx.useRetro));
  };

  const goToRoute = (url: string) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      setIsActive(event.currentTarget.id);
      navigate(url);
    };
  };

  return (
    <div className={styles.tvDetailsWrapper}>
      <header className={styles.tvDetails}>
        <div className={styles.tvAudio} />
        <div className={styles.tvInfo}>
          <h3>FONY</h3>
        </div>
        <div className={styles.tvControls}>
          <TVButton
            onClick={goToRoute("/")}
            name="Home"
            id="1"
            className={"1" === isActive ? `${styles.tvButtonActive}` : ""}
          />
          <TVButton
            onClick={goToRoute("/projects")}
            name="Projects"
            id="2"
            className={"2" === isActive ? `${styles.tvButtonActive}` : ""}
          />
          <TVButton
            onClick={goToRoute("/skills")}
            name="Skills"
            id="3"
            className={"3" === isActive ? `${styles.tvButtonActive}` : ""}
          />
          <TVButton
            onClick={goToRoute("/contact")}
            name="Contact"
            id="4"
            className={"4" === isActive ? `${styles.tvButtonActive}` : ""}
          />
          <TVButton
            onClick={toggleEffects}
            name="Serious"
            id="5"
            color="#842020"
          />
          <div className={styles.powerContainer}>
            <div className={styles.powerLight} />
            <img className={styles.powerIcon} src="src\assets\power.png" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
