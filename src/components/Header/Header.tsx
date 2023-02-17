import { useContext } from "react";

import { EffectsContext } from "~/context/EffectsContext";

import "components/Header/Header.scss";

const Header = () => {
  const effCtx = useContext(EffectsContext);

  const toggleEffects = () => {
    effCtx.setRetroEffects((effCtx.useRetro = !effCtx.useRetro));
  };

  return (
    <header className="header">
      <div className="nav-wrapper">
        <button className="logo-container" onClick={toggleEffects}>
          {effCtx.useRetro ? "Disable Retro Effects" : "Enable Retro Effects"}
        </button>
        <nav className="nav-container">Menu Dropdown</nav>
      </div>
    </header>
  );
};

export default Header;
