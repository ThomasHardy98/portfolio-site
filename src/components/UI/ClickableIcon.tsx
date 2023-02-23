import { ReactComponent as cv } from "assets/cv.svg";
import { ReactComponent as github } from "assets/github.svg";
import { ReactComponent as linkedin } from "assets/linkedin.svg";

import styles from "components/UI/ClickableIcon.module.scss";

type ClickableIconProps = {
  name: string;
  destination: string;
};

type IconTypes = { [name: string]: ReactSVGComponent };

const iconTypes: IconTypes = { cv, github, linkedin };

const ClickableIcon = ({ name, destination }: ClickableIconProps) => {
  let Icon = iconTypes[name];

  return (
    <a className={styles.clickableIconLink} href={destination} target="_blank">
      <Icon className={styles.clickableIconImage} />
    </a>
  );
};

export default ClickableIcon;
