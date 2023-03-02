import useImagePreloader from "hooks/useImagePreloader";

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
  const { imagesPreloaded } = useImagePreloader([imageSrc]);

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        {!imagesPreloaded ? (
          <p className={styles.loadingText}>Image loading...</p>
        ) : (
          <img src={imageSrc} className={styles.projectImage} />
        )}
      </div>
      <div className={styles.projectContent}>
        <h1 className={styles.projectTitle}>{title}</h1>
        <p className={styles.projectStack}>{techStack}</p>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.buttonWrapper}>
          {liveLink && (
            <a className={styles.button} href={liveLink} target="_blank">
              Live Site
            </a>
          )}
          {githubLink && (
            <a className={styles.button} href={githubLink} target="_blank">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
