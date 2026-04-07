"use client";

import React, { useState, useEffect } from 'react';
import HeroHeader from './calendar/Hero';
import DateGrid from './calendar/DateGrid';
import NotesField from './calendar/NotesField';
import { useCalendarRange } from '../hooks/useCalendarRange';

const CalendarRoot = () => {
  const { range, handleDateClick, getDayStatus } = useCalendarRange();

  const [notes, setNotes] = React.useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('calendar-notes');
        return saved || '';
      } catch (err) {
        console.error("Failed to load notes:", err);
        return '';
      }
    }
    return '';
  });

  const handleNoteChange = (val: string) => {
    setNotes(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem('calendar-notes', val);
    }
  };

  return (
    <main className="max-w-5xl mx-auto my-10 bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100 flex flex-col">
      <HeroHeader month="January" year={2022} />
      
      <div className="flex flex-col md:flex-row p-6 md:p-12 gap-12 bg-[#fdfdfd]">
        <section className="flex-1 order-2 md:order-1">
          <NotesField value={notes} onChange={handleNoteChange} />
        </section>

        <section className="flex-1 order-1 md:order-2">
          <DateGrid 
            onSelect={handleDateClick} 
            getStatus={getDayStatus}
          />
        </section>
      </div>
    </main>
  );
};

export default CalendarRoot;