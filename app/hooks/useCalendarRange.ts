import { useState } from 'react';
import { isBefore, isSameDay, isWithinInterval, differenceInDays } from 'date-fns';

export const useCalendarRange = () => {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const handleDateClick = (date: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
      return;
    }
    if (isBefore(date, range.start)) {
      setRange({ start: date, end: null });
      return;
    }
    setRange({ ...range, end: date });
  };

  const getDayStatus = (date: Date) => {
    const { start, end } = range;
    if (start && isSameDay(date, start)) return 'start';
    if (end && isSameDay(date, end)) return 'end';
    if (start && end && isWithinInterval(date, { start, end })) return 'in-range';
    return 'idle';
  };

  const selectedCount = range.start && range.end 
    ? differenceInDays(range.end, range.start) + 1 
    : 0;

  return { range, handleDateClick, getDayStatus, selectedCount };
};