import React from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth } from 'date-fns';

// 1. Define specific types for the props
interface DateGridProps {
  onSelect: (date: Date) => void;
  getStatus: (date: Date) => 'start' | 'end' | 'in-range' | 'idle';
}

const HOLIDAYS: Record<string, string> = {
  "2022-01-01": "New Year's Day",
  "2022-01-17": "Martin Luther King Jr. Day",
  "2022-01-26": "Republic Day",
};

export default function DateGrid({ onSelect, getStatus }: DateGridProps) {
  const currentMonth = new Date(2022, 0, 1);
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentMonth)),
    end: endOfWeek(endOfMonth(currentMonth))
  });

  return (
    <div className="flex-1">
      <div className="grid grid-cols-7 mb-6">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => (
          <span key={d} className={`text-center text-[11px] font-bold tracking-widest ${d === 'SAT' || d === 'SUN' ? 'text-[var(--primary-color)]' : 'text-gray-400'}`}>
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {days.map(day => {
          const status = getStatus(day);
          const dateKey = format(day, 'yyyy-MM-dd');
          const holiday = HOLIDAYS[dateKey];
          const isCurrent = isSameMonth(day, currentMonth);

          return (
            <button
              key={day.toString()}
              onClick={() => onSelect(day)}
              className={`relative h-12 flex items-center justify-center text-sm transition-all group
                ${!isCurrent ? 'text-gray-200' : isCurrent && (day.getDay() === 0 || day.getDay() === 6) ? 'text-sky-500 font-bold' : 'text-gray-800'}
                ${status === 'in-range' ? 'bg-[var(--primary-light)] text-[var(--primary-color)]' : ''}
                ${status === 'start' ? 'bg-[var(--primary-color)] text-white !rounded-l-lg z-10 shadow-md' : ''}
                ${status === 'end' ? 'bg-[var(--primary-color)] text-white !rounded-r-lg z-10 shadow-md' : ''}
              `}
            >
              <span className="relative z-20 font-medium">{format(day, 'd')}</span>
              {holiday && isCurrent && <div className="absolute bottom-1 w-1 h-1 bg-red-400 rounded-full" />}
              {holiday && (
                <div className="absolute hidden group-hover:block bottom-full mb-2 px-2 py-1 bg-gray-900 text-white text-[10px] rounded whitespace-nowrap z-50 animate-in fade-in zoom-in-95">
                  {holiday}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}