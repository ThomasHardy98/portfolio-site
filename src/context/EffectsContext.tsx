import { createContext } from "react";

import { EffectsContextType } from "../@types/effects";

export const EffectsContext = createContext<EffectsContextType>({
  useRetro: true,
  setRetroEffects: () => {},
});
