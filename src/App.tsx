import { Fragment, useContext } from "react";

import { EffectsContext } from "context/EffectsContext";

import PageLoad from "components/PageLoad/PageLoad";
import Page from "Page/Page";

function App() {
  const effCtx = useContext(EffectsContext);

  if (effCtx.useRetro) {
    document.getElementById("effects")!.classList.add("retro-effects");
  } else {
    document.getElementById("effects")!.classList.remove("retro-effects");
  }

  return (
    <Fragment>
      <PageLoad />
      <Page />
    </Fragment>
  );
}

export default App;
