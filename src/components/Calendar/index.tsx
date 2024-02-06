import React, { useImperativeHandle, useState } from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
}

export interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}
const Calendar: React.ForwardRefRenderFunction<CalendarRef, CalendarProps> = (
  { value = new Date(), onChange },
  ref
) => {
  /** 保存当前时间 */
  const [date, setDate] = useState(value);
  /** 上个月 */
  const handlePreMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };
  /** 下个月 */
  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  /** 当前选择月份的天数 */
  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  /** 获取当前月份的第一天 */
  const firstDayOfMonth = (year: number, month: number) => {
    // getDay 获取今天使星期几
    return new Date(year, month, 1).getDay();
  };

  /** 渲染每月的天数 */
  const renderDays = () => {
    const days = [];
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {
      const preDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        -i
      ).getDate();
      days.push(
        <div key={`pre-empty-${i}`} className={styles.empty}>
          {preDay}
        </div>
      );
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = onChange?.bind(
        null,
        new Date(date.getFullYear(), date.getMonth(), 1)
      );
      if (i === date.getDate()) {
        days.push(
          <div
            key={i}
            className={classNames(styles.day, styles.select)}
            onClick={clickHandler}
          >
            {i}
          </div>
        );
      } else {
        days.push(
          <div key={i} className={styles.day} onClick={clickHandler}>
            {i}
          </div>
        );
      }
    }
    const nextDay = 7 - ((firstDay + daysCount) % 7);

    for (let i = 0; i < nextDay; i++) {
      days.push(
        <div key={`last-empty-${i}`} className={styles.empty}>
          {i + 1}
        </div>
      );
    }

    return days;
  };
  /** 月份的映射 */
  const monthNames = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
  ];

  useImperativeHandle(ref, () => {
    return {
      getDate: () => date,
      setDate: (date) => setDate(date)
    };
  });
  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button onClick={handlePreMonth}>&lt;</button>
        <div>
          {date.getFullYear()} 年 {monthNames[date.getMonth()]}
        </div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles.days}>
        <div className={styles.day}>日</div>
        <div className={styles.day}>一</div>
        <div className={styles.day}>二</div>
        <div className={styles.day}>三</div>
        <div className={styles.day}>四</div>
        <div className={styles.day}>五</div>
        <div className={styles.day}>六</div>
        {renderDays()}
      </div>
    </div>
  );
};

export default React.forwardRef(Calendar);
