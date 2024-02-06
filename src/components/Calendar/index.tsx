import { Dayjs } from 'dayjs';
import Header from './Header';
import styles from './index.module.scss';
import MonthCalendar from './MonthCalendar';

export interface CalendarProps {
  value: Dayjs;
}

const Calendar = (props: CalendarProps) => {
  return (
    <div className={styles.calendar}>
      <Header />
      <MonthCalendar {...props} />
    </div>
  );
};

export default Calendar;
