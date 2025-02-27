import { createContext } from "react";
import { AppContextType } from "./AppContextType";

export const AppContext = createContext<AppContextType | null>(null);
