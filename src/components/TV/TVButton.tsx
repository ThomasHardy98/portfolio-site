import styles from "components/TV/TVButton.module.scss";

type TVButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  id: string;
  className?: string;
  color?: string;
};

const TVButton = ({ onClick, name, id, className, color }: TVButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={`${styles.tvButton} ${className}`}
        onClick={onClick}
        style={{ backgroundColor: color }}
        id={id}
      >
        <div className={styles.buttonShine} />
      </button>
      <label className={styles.effectsButtonLabel}>{name}</label>
    </div>
  );
};

export default TVButton;
