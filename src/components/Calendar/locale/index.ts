import enUS from "./en-US";
import zhCN from "./zh-CN";

import type { CalendarType } from "./types";

const allLocales: Record<string, CalendarType> = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

export default allLocales;
