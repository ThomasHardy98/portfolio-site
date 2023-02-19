import { motion } from "framer-motion";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "pages/LandingPage.scss";

const LandingPage = () => {
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
      className="page-container"
    >
      <Header />
      <main className="main-container">
        <div>This is the landing page.</div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
