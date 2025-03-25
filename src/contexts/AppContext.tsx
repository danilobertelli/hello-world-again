import { createContext } from "react";
export interface AppContextType {
  creator: string;
}

export const AppContext = createContext<AppContextType | null>(null);
