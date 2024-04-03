import { useRef } from 'react';
import Calendar from '@components/Calendar';
import { Space as AntSpace } from 'antd';
import dayjs from 'dayjs';
import Button from '@/components/Button';
import { MessageProvider } from '@/components/Message';
import MiniCalendar, { CalendarRef } from '@/components/MiniCalendar';
import Space from '@/components/Space';

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

      {/* dateInnerContent={(value) => {
            return (
              <div>
                <p style={{ background: 'yellowgreen', height: '30px' }}>
                  {value.format('YYYY/MM/DD')}
                </p>
              </div>
            );
          }} */}
      <div className="p24">
        {/* <Calendar
          value={dayjs('2024-02-18')}
          className={'aaa'}
          locale="en-US"
        /> */}
      </div>

      <div></div>

      <div>
        <Space size={20} align="end" wrap split={'|'}>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </Space>
      </div>

      <div>
        <MessageProvider />
      </div>
    </div>
  );
}
