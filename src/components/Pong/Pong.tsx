import styles from "components/Pong/Pong.module.scss";

const Pong = () => {
  return (
    <div className={styles.court}>
      <div className={styles.score}>
        <b>4</b>
        <b>7</b>
      </div>
      <div className={styles.horizontal}>
        <div className={styles.ballWrapper}>
          <div className={styles.ball}></div>
        </div>
        <div className={styles.playerOne}></div>
        <div className={styles.playerTwo}></div>
      </div>
    </div>
  );
};

export default Pong;
