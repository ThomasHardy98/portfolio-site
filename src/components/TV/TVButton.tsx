import styles from "./TVButton.module.scss";

type TVButtonProps = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  name: string;
  color?: string;
};

const TVButton = ({ onClick, name, color }: TVButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.tvButton}
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        <div className={styles.buttonShine} />
      </button>
      <label className={styles.effectsButtonLabel}>{name}</label>
    </div>
  );
};

export default TVButton;
