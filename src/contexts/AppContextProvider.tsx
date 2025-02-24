import { useState } from "react";
import { AppContext } from ".";

export const AppContextProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [creator] = useState("Danilo");

  return (
    <AppContext.Provider value={{ creator }}>{children}</AppContext.Provider>
  );
};
