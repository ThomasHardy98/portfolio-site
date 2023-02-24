import ClickableIcon from "../UI/ClickableIcon";

import styles from "components/Footer/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <ClickableIcon
        name="github"
        destination="https://github.com/ThomasHardy98"
      />
      <ClickableIcon
        name="linkedin"
        destination="https://www.linkedin.com/in/thomasrhardy"
      />
      <ClickableIcon name="cv" destination="assets/cv.pdf" />
    </footer>
  );
};

export default Footer;
