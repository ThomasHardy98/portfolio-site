import { useState, useEffect } from "react";

import { EffectsContext } from "context/EffectsContext";

interface EffectsContextProps {
  children: React.ReactNode;
}

const EffectsProvider = ({ children }: EffectsContextProps) => {
  const [useRetro, setUseRetro] = useState(true);

  const setRetroEffects = (useRetro: boolean) => {
    setUseRetro(useRetro);
    localStorage.setItem("useEffects", JSON.stringify(useRetro));
  };

  useEffect(() => {
    const storedEffects = localStorage.getItem("useEffects");

    if (storedEffects) {
      setUseRetro(JSON.parse(storedEffects));
    }
  }, []);

  const value = {
    useRetro,
    setRetroEffects,
  };

  return (
    <EffectsContext.Provider value={value}>{children}</EffectsContext.Provider>
  );
};

export default EffectsProvider;
