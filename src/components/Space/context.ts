import { createContext } from "react";
import { ConfigContextType } from "./ConfigProvider";

export const ConfigContext = createContext<ConfigContextType>({});
