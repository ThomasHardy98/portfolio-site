import { NavLink } from "react-router-dom";

import styles from "components/TV/TVButtonNav.module.scss";

type TVButtonNavProps = {
  url: string;
  name: string;
};

const TVButtonNav = ({ url, name }: TVButtonNavProps) => {
  return (
    <div className={styles.buttonContainer}>
      <NavLink
        to={url}
        className={({ isActive }) =>
          isActive ? styles.tvButtonActive : styles.tvButton
        }
      >
        <div className={styles.buttonShine} />
      </NavLink>
      <label className={styles.effectsButtonLabel}>{name}</label>
    </div>
  );
};

export default TVButtonNav;
