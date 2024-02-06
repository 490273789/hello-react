import { useRef } from 'react';
import Calendar from '@components/Calendar';
import dayjs from 'dayjs';
import Button from '@/components/Button';
import MiniCalendar, { CalendarRef } from '@/components/MiniCalendar';
export default function UIComponent() {
  const calendarRef = useRef<CalendarRef>(null);
  const handleCalendarChange = (date: Date) => {
    console.log(date);
  };

  const getDate = () => {
    console.log(calendarRef.current?.getDate());
  };
  const setDate = () => {
    calendarRef.current?.setDate(new Date('2024/02/08'));
  };
  return (
    <div>
      <MiniCalendar
        ref={calendarRef}
        value={new Date()}
        onChange={handleCalendarChange}
      />

      <Button onClick={getDate}>获取时间</Button>
      <Button onClick={setDate}>设置时间</Button>

      <div className="p24">
        <Calendar value={dayjs('2024-02-05')} />
      </div>
    </div>
  );
}
