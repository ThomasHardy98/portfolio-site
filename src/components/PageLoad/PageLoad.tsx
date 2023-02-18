import { useEffect, useState, Fragment } from "react";

import "components/PageLoad/PageLoad.scss";

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
        <div className="loading-container">
          <div className="page-load">
            <div className="page-load-text">
              <p className="text-1">Thomas Hardy - Portfolio</p>
            </div>
          </div>
          <div className="TV-on" />
        </div>
      )}
    </Fragment>
  );
};

export default PageLoad;
