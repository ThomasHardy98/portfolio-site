import { motion } from "framer-motion";

import Footer from "components/Footer/Footer";
import ContactForm from "components/Forms/ContactForm";

import styles from "pages/ContactPage.module.scss";

const ContactPage = () => {
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
        <div className={styles.contactContainer}>
          <div className={styles.innerTextContainer}>
            <h1 className={styles.subHeading}>Want to contact me?</h1>
            <p className={styles.contentText}>
              Fill out my contact form or contact me using my email below.
              <br />
              <br />{" "}
              <a href="mailto:tj.hardy77@yahoo.co.uk">tj.hardy77@yahoo.co.uk</a>
            </p>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
