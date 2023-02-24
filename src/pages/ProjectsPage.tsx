import { motion } from "framer-motion";

import Footer from "components/Footer/Footer";
import Project from "~/components/UI/Project";

import styles from "pages/ProjectsPage.module.scss";

const ProjectsPage = () => {
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
        <Project
          imageSrc="src\assets\weather_app_picture.png"
          title="Weather App"
          techStack="ReactJS, Typescript"
          description="Short description of the weather app project."
          githubLink=""
          liveLink=""
        />
        <Project
          imageSrc="src\assets\weather_app_picture.png"
          title="Weather App"
          techStack="ReactJS, Typescript"
          description="Short description of the weather app project."
          githubLink=""
          liveLink=""
        />
        <Project
          imageSrc="src\assets\weather_app_picture.png"
          title="Weather App"
          techStack="ReactJS, Typescript"
          description="Short description of the weather app project."
          githubLink=""
          liveLink=""
        />
        <Project
          imageSrc="src\assets\weather_app_picture.png"
          title="Weather App"
          techStack="ReactJS, Typescript"
          description="Short description of the weather app project."
          githubLink=""
          liveLink=""
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
