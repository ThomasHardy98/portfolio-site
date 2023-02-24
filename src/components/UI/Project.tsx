import styles from "components/UI/Project.module.scss";

type ProjectProps = {
  imageSrc: string;
  title: string;
  techStack: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
};

const Project = ({
  imageSrc,
  title,
  techStack,
  description,
  githubLink,
  liveLink,
}: ProjectProps) => {
  return (
    <div className={styles.projectCard}>
      <img src={imageSrc} className={styles.projectImage}></img>
      <h1 className={styles.projectTitle}>{title}</h1>
      <p className={styles.projectStack}>{techStack}</p>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.buttonWrapper}>
        <a className={styles.button} href={githubLink} target="_blank">
          Source Code
        </a>
        <a className={styles.button} href={liveLink} target="_blank">
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Project;
