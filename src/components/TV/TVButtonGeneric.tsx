import styles from "components/TV/TVButtonGeneric.module.scss";

type TVButtonGenericProps = {
  onClick: () => void;
  name: string;
};

const TVButtonGeneric = ({ onClick, name }: TVButtonGenericProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.tvButton} onClick={onClick}>
        <div className={styles.buttonShine} />
      </button>
      <label className={styles.effectsButtonLabel}>{name}</label>
    </div>
  );
};

export default TVButtonGeneric;
