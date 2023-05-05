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
          imageSrc="assets/to-do_list_picture.png"
          title="To-do List"
          techStack="ReactJS, Typescript, Sass, Font Awesome"
          description="A simple react project utilising context and local storage to create and store a to-do list with the ability to add, edit and delete tasks."
          githubLink="https://github.com/ThomasHardy98/to-do-list"
          liveLink="https://thomashardytodolist.com"
        />
        <Project
          imageSrc="assets/expense-tracker_picture.png"
          title="Expense Tracker"
          techStack="ReactJS, Typescript, Sass, CSS Modules, Font Awesome"
          description="A similar project to my to-do list, however it focuses more on my CSS skills, displaying data in an easy to read format."
          githubLink="https://github.com/ThomasHardy98/expenses-tracker"
          liveLink="https://thomashardyexpensetracker.com"
        />
        <Project
          imageSrc="assets/booking-app-designs_picture.png"
          title="Booking App Wireframe"
          techStack="Adobe XD"
          description="As a personal project I needed to create an interactive wireframe for the business side of a booking SPA. 
          I mocked up this in Adobe XD to show my ability to not only implement, but design as well. This is an early version wireframe without colour."
          liveLink="https://xd.adobe.com/view/50f4f28f-488d-4d96-bfcb-dd6f5b8f50c0-05a7/grid?fbclid=IwAR1egO4SFXNWDthrDNUu6CxSQxKDW36MlsjVr-06OsWR5R59ITez_4nqyV0"
          buttonName="View design"
        />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
