import { useContext } from "react";

import styles from "./index.module.scss";
import allLocales from "./locale";
import LocaleContext from "./LocaleContext";

import type { Dayjs } from "dayjs";
interface HeaderProps {
  curMonth: Dayjs;
  preMonthHandler: () => void;
  nextMonthHandler: () => void;
  todayHandler: () => void;
}

const Header = (props: HeaderProps) => {
  const { curMonth, preMonthHandler, nextMonthHandler, todayHandler } = props;
  const localeContext = useContext(LocaleContext);

  const CalendarLocale = allLocales[localeContext.locale];
  return (
    <div className={styles["calendar-header"]}>
      <div className={styles["calendar-header-left"]}>
        <div
          className={styles["calendar-header-icon"]}
          onClick={preMonthHandler}
        >
          &lt;
        </div>
        <div className={"calendar-header-value"}>
          {curMonth.format(CalendarLocale.formatMonth)}
        </div>
        <div
          className={styles["calendar-header-icon"]}
          onClick={nextMonthHandler}
        >
          &gt;
        </div>
        <button
          className={styles["calendar-header-btn"]}
          onClick={todayHandler}
        >
          {CalendarLocale.today}
        </button>
      </div>
    </div>
  );
};

export default Header;
