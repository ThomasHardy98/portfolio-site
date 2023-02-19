import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { EffectsContext } from "context/EffectsContext";

import "../TV/TV.scss";

const TV = () => {
  const effCtx = useContext(EffectsContext);
  let navigate = useNavigate();
  let className = "";

  if (effCtx.useRetro) {
    className += "retro-effects";
  } else {
    className += "";
  }

  const toggleEffects = () => {
    effCtx.setRetroEffects((effCtx.useRetro = !effCtx.useRetro));
  };

  const goToProjects = () => {
    navigate("/projects");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="tv-container">
      <div id="tv-border"></div>
      <div id="border-effect"></div>
      <header className="tv__details">
        <div className="tv__audio" />
        <div className="tv__info">
          <h3>FONY</h3>
        </div>
        <div className="tv__controls">
          <div className="button-container">
            <button className="tv-button" onClick={toggleEffects}>
              <div className="button-shine" />
            </button>
            <label className="effects-button-label">Effects</label>
          </div>
          <div className="button-container">
            <button className="tv-button" onClick={goToProjects}>
              <div className="button-shine" />
            </button>
            <label className="effects-button-label">Projects</label>
          </div>
          <div className="button-container">
            <button className="tv-button" onClick={goToHome}>
              <div className="button-shine" />
            </button>
            <label className="effects-button-label">Home</label>
          </div>
          <div className="power-container">
            <div className="power-light" />
            <img className="power-icon" src="src\assets\power.png" />
          </div>
        </div>
      </header>
      <div id="effects" className={className}></div>
    </div>
  );
};

export default TV;
