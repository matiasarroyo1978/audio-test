import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

type TranscriptProps = {
  transcript: {
    content: string;
    role: string;
    start: number;
    end: number;
  }[];
  audioUrl: string;
};

const Transcript = ({ transcript, audioUrl }: TranscriptProps) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTranscriptClick = (time: number) => {
    if (playerRef.current) {
      playerRef.current.seekTo(time, "seconds");
      setPlaying(true);
    }
  };

  const handleStop = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      setPlaying(false);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-4 bg-white shadow-xl rounded-lg">
      <ReactPlayer
        ref={playerRef}
        url={audioUrl}
        controls
        playing={playing}
        width="100%"
        height="50px"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="flex justify-center mt-1 mb-4">
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
        >
          Stop
        </button>
      </div>
      <div className="transcript space-y-3">
        {transcript.map((entry, index) => (
          <p
            key={index}
            onClick={() => handleTranscriptClick(entry.start)}
            className={`message p-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${
              entry.role === "agent"
                ? "bg-blue-200 text-blue-900 cursor-pointer"
                : "bg-green-200 text-green-900 cursor-pointer"
            }`}
          >
            {entry.content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Transcript;
