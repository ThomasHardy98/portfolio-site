import { Fragment } from "react";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "Page/Page.scss";

const Page = () => {
  return (
    <Fragment>
      <Header />
      <main className="content-container">
        <div>Test Text</div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Page;
