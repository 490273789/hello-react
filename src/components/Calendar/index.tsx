import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

import cs from "classnames";
import dayjs from "dayjs";

import Header from "./Header";
import styles from "./index.module.scss";
import LocaleContext from "./LocaleContext";
import MonthCalendar from "./MonthCalendar";

import type { Dayjs } from "dayjs";

export interface CalendarProps {
  value: Dayjs;
  /** 修改 Calendar 组件外层容器的样式 */
  style?: CSSProperties;
  /** 修改 Calendar 组件外层容器的样式 */
  className?: string | string[];
  /** 定制日期的显示，会完全替换当前的日期单元格 */
  dateRender?: (currentDate: Dayjs) => ReactNode;
  /** 定制日期单元格，内容会被添加到单元格内，只在全屏模式下生效 */
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  /** 国际化相关 */
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

const Calendar = (props: CalendarProps) => {
  const { value, style, className, locale, onChange } = props;

  /** 处理className */
  const handleClassName = () => {
    if (className === undefined) return;
    else if (typeof className === "string") return styles[className];
    else {
      return className.map((ele) => styles[ele]);
    }
  };

  const [curValue, setCurValue] = useState<Dayjs>(value);
  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  const changeDate = (date: Dayjs) => {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  };

  const selectHandler = (date: Dayjs) => {
    changeDate(date);
  };

  const preMonthHandler = () => {
    setCurMonth(curMonth.subtract(1, "month"));
  };

  const nextMonthHandler = () => {
    setCurMonth(curMonth.add(1, "month"));
  };

  const todayHandler = () => {
    const date = dayjs(Date.now());

    changeDate(date);
  };
  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={cs(styles.calendar, handleClassName())} style={style}>
        <Header
          curMonth={curMonth}
          preMonthHandler={preMonthHandler}
          nextMonthHandler={nextMonthHandler}
          todayHandler={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          selectHandler={selectHandler}
        />
      </div>
    </LocaleContext.Provider>
  );
};

export default Calendar;
