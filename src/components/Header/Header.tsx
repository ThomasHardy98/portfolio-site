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
      <div className="header-wrapper">
        <button className="effects-button" onClick={toggleEffects}>
          {effCtx.useRetro ? "Disable Retro Effects" : "Enable Retro Effects"}
        </button>
        <nav className="nav-content">Menu Dropdown</nav>
      </div>
    </header>
  );
};

export default Header;
