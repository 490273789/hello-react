import { PropsWithChildren } from "react";
import { ConfigContext } from "./context";
import { SizeType } from ".";

export interface ConfigContextType {
  space?: {
    size?: SizeType;
  };
}

export function ConfigProvider(props: PropsWithChildren<ConfigContextType>) {
  const { space, children } = props;

  return <ConfigContext value={{ space }}>{children}</ConfigContext>;
}
