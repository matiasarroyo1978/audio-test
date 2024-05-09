import React, { useEffect, useState, useRef } from "react";
import AudioPlayer from "./AudioPlayer";
import TranscriptEntry from "./TranscriptEntry";

interface TranscriptProps {
  transcript: {
    content: string;
    role: string;
    start: number;
    end: number;
  }[];
  audioUrl: string;
}

const Transcript = ({ transcript, audioUrl }: TranscriptProps) => {
  const [isClient, setIsClient] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioPlayerRef = useRef<{ seekTo: (time: number) => void } | null>(
    null
  );
  const titleClass = "text-xl font-semibold text-center mb-4";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTranscriptClick = (time: number) => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.seekTo(time);
      setPlaying(true);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4 bg-white shadow-xl rounded-lg">
       <h2 className={titleClass}>
        Audio de la llamada telefónica
      </h2>
      <AudioPlayer
        ref={audioPlayerRef}
        url={audioUrl}
        handleStop={() => setPlaying(false)}
        playing={playing}
        setPlaying={setPlaying}
      />
      <h2 className={titleClass}>
        Transcripción de la llamada
      </h2>
      <div className="transcript space-y-3">
        {transcript.map((entry, index) => (
          <TranscriptEntry
            key={index}
            entry={entry}
            onClick={() => handleTranscriptClick(entry.start)}
          />
        ))}
      </div>
    </div>
  );
};

export default Transcript;
