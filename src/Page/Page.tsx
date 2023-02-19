import { useContext } from "react";

import { EffectsContext } from "~/context/EffectsContext";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import "Page/Page.scss";

const Page = () => {
  const effCtx = useContext(EffectsContext);
  let className = "";

  if (effCtx.useRetro) {
    className += "text-glow";
  } else {
    className += "";
  }

  return (
    <div className={`content-container ${className}`}>
      <Header />
      <main className="main-container">
        <div>Test Text</div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
