import { motion } from "framer-motion";

import Footer from "components/Footer/Footer";

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
        <div>This is the contact page.</div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
