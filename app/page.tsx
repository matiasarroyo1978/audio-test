"use client";
import Transcript from "./components/Transcript";
import type { NextPage } from "next";
import TRANSCRIPTION from './data/transcription.json'; 

const Home: NextPage = () => {
  const audioUrl =
    "/audio.mp3";

  return (
    <div className="container mx-auto p-4">
      <Transcript transcript={TRANSCRIPTION} audioUrl={audioUrl} />
    </div>
  );
};

export default Home;
