import React, { useRef, useImperativeHandle, forwardRef } from "react";
import ReactPlayer from "react-player";

interface AudioPlayerProps {
  url: string;
  handleStop: () => void;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
}

const AudioPlayer = forwardRef((props: AudioPlayerProps, ref) => {
  const { url, handleStop, playing, setPlaying } = props;
  const playerRef = useRef<ReactPlayer | null>(null);

  useImperativeHandle(ref, () => ({
    seekTo: (time: number) => {
      if (playerRef.current) {
        playerRef.current.seekTo(time, "seconds");
      }
    },
  }));

  return (
    <>
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls
        playing={playing}
        width="100%"
        height="50px"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="flex justify-center mt-1 mb-4">
        <button
          onClick={() => {
            if (playerRef.current) {
              playerRef.current.seekTo(0);
              handleStop();
            }
          }}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition-colors"
        >
          Stop
        </button>
      </div>
    </>
  );
});

AudioPlayer.displayName = "AudioPlayer"; 
export default AudioPlayer;
