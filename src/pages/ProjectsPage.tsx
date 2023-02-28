import { motion } from "framer-motion";

import Footer from "components/Footer/Footer";
import Project from "components/UI/Project";

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
          imageSrc="assets/portfolio_picture.png"
          title="This Portfolio"
          techStack="ReactJS, TypeScript, React Hook Form, Sass, Prettier, ESLint"
          description="I created this portfolio so I could showcase the work I have been doing using ReactJS and the MERN stack."
          githubLink="https://github.com/ThomasHardy98/portfolio-site"
        />
        <Project
          imageSrc="assets/weather_app_picture.png"
          title="Weather App"
          techStack="ReactJS, Typescript, Axios, Sass, Prettier, ESLint"
          description="This project was created to showcase my ability to call an API asynchronously with error handling and manage its response data."
          githubLink="https://github.com/ThomasHardy98/weather-app"
          liveLink="https://thomashardyweatherapp.com"
        />
        <Project
          imageSrc=""
          title="Project 3"
          techStack=""
          description=""
          githubLink=""
          liveLink=""
        />
        <Project
          imageSrc=""
          title="Project 4"
          techStack=""
          description=""
          githubLink=""
          liveLink=""
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
