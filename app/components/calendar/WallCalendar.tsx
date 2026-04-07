"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import Spiral from './Spiral';
import Hero from './Hero';
import DateGrid from './DateGrid';
import NotesField from './NotesField';
import { useCalendarRange } from '../../hooks/useCalendarRange';

const THEME = {
  name: "January",
  primary: "#0284c7", // Sky 600
  light: "#f0f9ff",   // Sky 50
  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
};

export default function WallCalendar() {
  const { range, handleDateClick, getDayStatus, selectedCount } = useCalendarRange();
  const [notes, setNotes] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('cal-notes') || '' : ''));

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-[#dee5ed] py-24 px-6"
      style={{ 
        '--primary-color': THEME.primary, 
        '--primary-light': THEME.light 
      } as React.CSSProperties}
    >
      <div className="relative w-full max-w-5xl bg-white shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] rounded-b-3xl border border-gray-100">
        <Spiral />

        {/* Improvement 1: 3D Flipping Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={THEME.name}
            initial={{ rotateX: 20, opacity: 0, transformOrigin: "top" }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Hero month={THEME.name} year={2026} image={THEME.image} />

            <div className="flex flex-col md:flex-row p-10 md:p-20 gap-16 lg:gap-28">
              <div className="flex-1 order-2 md:order-1 border-r border-gray-50 pr-8">
                <NotesField value={notes} onChange={(v: string) => { setNotes(v); localStorage.setItem('cal-notes', v); }} />
                
                {/* Improvement 4: Range Selection Insights */}
                {selectedCount > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl border border-[var(--primary-color)]/20 bg-[var(--primary-light)]"
                  >
                    <p className="text-[10px] font-black text-[var(--primary-color)] uppercase tracking-widest mb-1">Selected Range</p>
                    <p className="text-sm text-gray-700">
                      You have selected <span className="font-bold text-[var(--primary-color)]">{selectedCount} days</span>
                      {range.start && range.end && ` (${format(range.start, 'MMM d')} - ${format(range.end, 'MMM d')})`}
                    </p>
                  </motion.div>
                )}
              </div>

              <div className="flex-1 order-1 md:order-2">
                <DateGrid onSelect={handleDateClick} getStatus={getDayStatus} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Paper Layers */}
        <div className="absolute -bottom-3 left-4 right-4 h-10 bg-white border border-gray-200 shadow-sm rounded-b-3xl -z-10 opacity-80" />
        <div className="absolute -bottom-6 left-8 right-8 h-10 bg-white border border-gray-200 shadow-sm rounded-b-3xl -z-20 opacity-40" />
      </div>
    </div>
  );
}