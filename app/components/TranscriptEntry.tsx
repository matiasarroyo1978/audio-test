import React from 'react';

interface TranscriptEntryProps {
  entry: {
    content: string;
    role: string;
    start: number;
    end: number;
  };
  onClick: () => void;
}

const TranscriptEntry = ({ entry, onClick }: TranscriptEntryProps) => (
  <p
    onClick={onClick}
    className={`message flex items-center gap-2 p-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
      entry.role === "agent"
        ? "bg-blue-200 text-blue-900 cursor-pointer"
        : "bg-green-200 text-green-900 cursor-pointer"
    }`}
  >
    {entry.content}
  </p>
);

export default TranscriptEntry;
