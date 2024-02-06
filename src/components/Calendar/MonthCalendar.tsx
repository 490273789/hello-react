import classNames from 'classnames';
import { Dayjs } from 'dayjs';
import styles from './index.module.scss';
import { CalendarProps } from '.';

interface DaysInfo {
  date: Dayjs;
  currentMonth: boolean;
}
const getAllDays = (date: Dayjs) => {
  // const daysInMonth = date.daysInMonth();
  const startDate = date.startOf('month');
  const day = startDate.day();

  const daysInfo: Array<DaysInfo> = new Array(6 * 7);

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, 'day'),
      currentMonth: false
    };
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, 'day');
    daysInfo[i] = {
      date: calcDate,
      currentMonth: calcDate.month() === date.month()
    };
  }

  return daysInfo;
};

const renderDays = (days: DaysInfo[]) => {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      const item = days[i * 7 + j];
      row[j] = (
        <div
          className={classNames(
            styles['calendar-month-body-cell'],
            item.currentMonth ? styles['calendar-month-body-cell-current'] : ''
          )}
        >
          {item.date.date()}
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

interface MonthCalendarProps extends CalendarProps {}

const MonthCalendar = (props: MonthCalendarProps) => {
  const weekList = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  const allDays = getAllDays(props.value);
  return (
    <div className={styles['calendar-month-body']}>
      <div className={styles['calendar-month-week-list']}>
        {weekList.map((week) => (
          <div className={styles['calendar-month-week-list-item']} key={week}>
            {week}
          </div>
        ))}
      </div>
      <div className={styles['calendar-month-body']}>{renderDays(allDays)}</div>
    </div>
  );
};

export default MonthCalendar;
