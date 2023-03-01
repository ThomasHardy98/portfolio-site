import { useEffect, useState, Fragment } from "react";

import styles from "components/PageLoad/PageLoad.module.scss";

const PageLoad = () => {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 4000);
  }, []);

  return (
    <Fragment>
      {showElement && (
        <Fragment>
          <div className={styles.pageLoad}>
            <div className={styles.pageLoadText}>
              <p className={styles.textOne}>
                ~/Desktop/Projects/portfolio/thomas_hardy
              </p>
            </div>
          </div>
          <div className={styles.tvOn} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default PageLoad;
