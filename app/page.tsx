"use client";
import dynamic from 'next/dynamic';

const WallCalendar = dynamic(
  () => import('./components/calendar/WallCalendar'),
  { ssr: false, loading: () => <div className="h-screen bg-gray-50 animate-pulse" /> }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <WallCalendar />
    </main>
  );
}