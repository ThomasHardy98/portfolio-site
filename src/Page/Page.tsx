import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "Page/Page.scss";

const Page = () => {
  return (
    <div className="content-container">
      <Header />
      <main className="main-container">
        <div>Test Text</div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
