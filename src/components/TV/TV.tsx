import { useContext, Fragment } from "react";

import { EffectsContext } from "context/EffectsContext";

import "../TV/TV.scss";

const TV = () => {
  const effCtx = useContext(EffectsContext);
  let className = "";

  if (effCtx.useRetro) {
    className += "retro-effects";
  } else {
    className += "";
  }

  const toggleEffects = () => {
    effCtx.setRetroEffects((effCtx.useRetro = !effCtx.useRetro));
  };

  return (
    <div className="tv-container">
      <div id="tv-border"></div>
      <div id="border-effect"></div>
      <div className="tv__details">
        <div className="tv__audio"></div>
        <div className="tv__info">
          <h3>SONY</h3>
          <div className="tv__controls">
            <button className="effects-button" onClick={toggleEffects}>
              {effCtx.useRetro
                ? "Disable Retro Effects"
                : "Enable Retro Effects"}
            </button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="tv__audio"></div>
      </div>
      <div id="effects" className={className}></div>
    </div>
  );
};

export default TV;
