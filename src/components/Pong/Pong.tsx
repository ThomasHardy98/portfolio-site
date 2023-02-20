import styles from "components/Pong/Pong.module.scss";

const Pong = () => {
  return (
    <div className={styles.court}>
      <div className={styles.score}>
        <b>4</b>
        <b>7</b>
      </div>
      <div className={styles.horizontal}>
        <span className={styles.ball}></span>
        <span className={styles.playerOne}></span>
        <span className={styles.playerTwo}></span>
      </div>
    </div>
  );
};

export default Pong;
