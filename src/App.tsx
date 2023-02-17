import { Fragment, useContext } from "react";

import { EffectsContext } from "./context/EffectsContext";

import PageLoad from "components/PageLoad/PageLoad";
import Header from "components/Header/Header";
import Page from "Page/Page";
import Footer from "components/Footer/Footer";

function App() {
  const effCtx = useContext(EffectsContext);

  if (effCtx.useRetro) {
    document.body.classList.add("retro-effects");
  } else {
    document.body.classList.remove("retro-effects");
  }

  return (
    <Fragment>
      <PageLoad />
      <Header />
      <Page />
      <Footer />
    </Fragment>
  );
}

export default App;
