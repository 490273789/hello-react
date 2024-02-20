import { useContext } from 'react';
import cs from 'classnames';
import { Dayjs } from 'dayjs';
import styles from './index.module.scss';
import allLocales from './locale';
import LocaleContext from './LocaleContext';
import { CalendarProps } from '.';

interface DaysInfo {
  date: Dayjs;
  currentMonth: boolean;
}

interface MonthCalendarProps extends CalendarProps {
  selectHandler: (date: Dayjs) => void;
  curMonth: Dayjs;
}

/**
 * 计算当前月的所有日期排列
 * @param date {Dayjs} 当前日期
 * @returns daysInfo {Dayjs[]}
 */
const getAllDays = (date: Dayjs) => {
  // const daysInMonth = date.daysInMonth();
  // 当前月的1号
  const startDate = date.startOf('month');

  // 当前月的1号是星期几
  const day = startDate.day();

  // 每周七天，共展示6行
  const daysInfo: Array<DaysInfo> = new Array(6 * 7);

  // 处理1号的前几天
  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, 'day'), // 获取前n天的日期
      currentMonth: false // 是否为当前月的日期
    };
  }
  // 处理1号之后的日期
  for (let i = day; i < daysInfo.length; i++) {
    // 当前日期+n天
    const calcDate = startDate.add(i - day, 'day');
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month()
    };
  }

  return daysInfo;
};

/**
 * 渲染每一天的UI
 * @param days
 * @returns
 */

const MonthCalendar = (props: MonthCalendarProps) => {
  const { value, curMonth, dateRender, dateInnerContent, selectHandler } =
    props;

  const localeContext = useContext(LocaleContext);

  const weekList = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  const CalendarLocal = allLocales[localeContext.locale];

  // 本月日历页面的42天数据
  const allDays = getAllDays(curMonth);

  const renderDays = (days: DaysInfo[]) => {
    const rows = [];
    // 共有6行 6个 rows
    for (let i = 0; i < 6; i++) {
      const row = [];
      // 每行有7天
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j];
        row[j] = (
          <div
            className={cs(
              styles['calendar-month-body-cell'],
              item.currentMonth
                ? styles['calendar-month-body-cell-current']
                : ''
            )}
            onClick={() => selectHandler?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className={styles['calendar-month-body-cell-date']}>
                <div
                  className={cs(
                    styles['calendar-month-body-cell-date-value'],
                    value.format('YYYY-MM-DD') ===
                      item.date.format('YYYY-MM-DD')
                      ? styles['calendar-month-body-cell-date-selected']
                      : ''
                  )}
                >
                  {item.date.date()}
                </div>
                <div
                  className={styles['calendar-month-body-cell-date-content']}
                >
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(row);
    }

    return rows.map((row, index) => (
      <div className={styles['calendar-month-body-row']} key={index}>
        {row}
      </div>
    ));
  };

  return (
    <div className={styles['calendar-month-body']}>
      <div className={styles['calendar-month-week-list']}>
        {weekList.map((week) => (
          <div className={styles['calendar-month-week-list-item']} key={week}>
            {CalendarLocal.week[week]}
          </div>
        ))}
      </div>
      <div className={styles['calendar-month-body']}>{renderDays(allDays)}</div>
    </div>
  );
};

export default MonthCalendar;
