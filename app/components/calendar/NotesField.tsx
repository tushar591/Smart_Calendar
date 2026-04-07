import React from 'react';

// 2. Define types for the notes interaction
interface NotesFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function NotesField({ value, onChange }: NotesFieldProps) {
  return (
    <div className="w-full">
      <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Notes</h3>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[300px] bg-transparent resize-none leading-[2.5rem] text-gray-600 outline-none p-0 relative z-10 font-medium placeholder:text-gray-300"
        style={{
          backgroundImage: 'linear-gradient(transparent, transparent 39px, #f1f5f9 39px)',
          backgroundSize: '100% 40px',
        }}
        placeholder="Plan your schedule..."
      />
    </div>
  );
}