import { motion } from "framer-motion";

import useImagePreloader from "~/hooks/useImagePreloader";

import Footer from "components/Footer/Footer";

import styles from "pages/LandingPage.module.scss";

const LandingPage = () => {
  const { imagesPreloaded } = useImagePreloader(["assets/profile_picture.jpg"]);

  return (
    <motion.div
      initial={{
        scaleY: 0.01,
        opacity: 0,
        backgroundColor: "hsla(0, 100, 100, 0.8)",
      }}
      animate={{
        scaleY: 1,
        opacity: 1,
        backgroundColor: "hsla(0, 0, 0, 0)",
      }}
      exit={{
        scaleY: 0.01,
        opacity: 0,
        backgroundColor: "hsla(0, 00, 100, 0.8)",
      }}
      transition={{ bounce: 0 }}
      className={styles.pageContainer}
    >
      <main className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            {imagesPreloaded ? (
              <img
                src="assets/profile_picture.jpg"
                className={styles.profileImage}
              />
            ) : (
              <p className={styles.loadingText}>Image loading...</p>
            )}
          </div>
          <div className={styles.textContainer}>
            <div className={styles.innerTextContainer}>
              <h1 className={styles.subHeading}>
                I'm Thomas Hardy, a Front End Developer with 3 years commercial
                experience
              </h1>
              <p className={styles.contentText}>
                I have experience using HTML5, CSS, JavaScript, ReactJS and
                Typescript, to help organisations improve their user experience
                within their applications.
                <br />
                <br /> With exposure to the MERN stack and hands-on experience
                providing functionality and designs for businesses within
                Agriculture, I am able to support stakeholders and colleagues to
                provide numerous business improvements through technology.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
