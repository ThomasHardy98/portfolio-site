import { useContext } from "react";

import { EffectsContext } from "context/EffectsContext";

import "components/Header/Header.scss";

const Header = () => {
  const effCtx = useContext(EffectsContext);

  const toggleEffects = () => {
    effCtx.setRetroEffects((effCtx.useRetro = !effCtx.useRetro));
  };

  return (
    <header className="header-container">
      <h1 className="name-heading">Thomas Hardy</h1>
      <p className="short-description">React Developer</p>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>
          <button className="effects-button" onClick={toggleEffects}>
            {effCtx.useRetro ? "Disable Retro Effects" : "Enable Retro Effects"}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
