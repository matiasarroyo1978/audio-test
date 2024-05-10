import React from "react";
import { BiBot, BiUserVoice } from "react-icons/bi";

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
  <div className={`message-container flex flex-col gap-2`}>
    {entry.role === "agent" ? (
      <BiBot className="text-3xl relative left-0 top-0 mt-4 ml-4" />
    ) : (
      <BiUserVoice className="text-3xl relative left-0 top-0 mt-4 ml-4" />
    )}
    <div
      onClick={onClick}
      className={`message flex items-center gap-2 p-4 rounded-lg relative transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
        entry.role === "agent"
          ? "bg-blue-200 text-blue-900 cursor-pointer"
          : "bg-green-200 text-green-900 cursor-pointer"
      }`}
    >
      <p>{entry.content}</p>
    </div>
  </div>
);

export default TranscriptEntry;
