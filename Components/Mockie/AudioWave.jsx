"use client";

import { useState, useEffect, useRef } from "react";

import wavesurfer from "wavesurfer.js";
import { FiPlayCircle, FiPauseCircle } from "react-icons/fi";

const AudioWave = () => {
  const [wavesurferObj, setWavesurferObj] = useState();
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const wavesurferRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [animate, setAnimate] = useState(false);
  // const [loading, setLoading] = useState(false);

  // create the waveform inside the correct component
  useEffect(() => {
    if (wavesurferRef.current && !wavesurferObj) {
      setWavesurferObj(
        wavesurfer.create({
          container: "#waveform",
          scrollParent: false,
          height: 40,
          cursorWidth: 0,
          cursorColor: "#471bff",
          waveColor: "#d9d9d9",
          progressColor: "#471bff",
          // fillParent: false,
          responsive: true,
          barWidth: 1.5,
          barGap: 3,
          barHeight: 1.5,
          barRadius: 3,
          // normalize: true,
        })
      );
    } else if (wavesurferObj) {
      wavesurferObj.load("/wave.mp3");
      wavesurferObj.on("ready", () => {
        let time = wavesurferObj.getDuration();

        setDuration((time / 60).toString().slice(0, 4).replace(".", ":"));
        // setLoading(false);
      });
    }
  }, [wavesurferRef, wavesurferObj]);

  const handlePlayPause = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      if (wavesurferObj) {
        if (playing) {
          wavesurferObj.pause();
        } else {
          wavesurferObj.play();
          wavesurferObj.on("play", () => {
            setPlaying(true);
          });

          wavesurferObj.on("timeupdate", (currentTime) =>
            setCurrentTime(
              (currentTime / 60).toString().slice(0, 4).replace(".", ":")
            )
          ),
            wavesurferObj.on("finish", () => {
              setPlaying(false);
            });
        }
        setPlaying(!playing);
      }
    }, 300);
  };

  return (
    <>
      <div className="flex items-center gap-2 audio-container p-2 w-full sm:w-[320px] md:w-[242px] lg:w-[240px] xl:w-[310px]">
        <button
          title="play/pause"
          className={`controls outline-none focus:outline-none inline ${
            animate
              ? "transition-transform transform ease-in-out duration-500 hover:rotate-180"
              : ""
          }`}
          onClick={handlePlayPause}
        >
          {playing ? (
            <FiPauseCircle
              className={`text-white text-3xl sm:text-5xl fade-animation transition-transform transform ease-in`}
            />
          ) : (
            <FiPlayCircle
              className={`text-white text-3xl sm:text-5xl fade-animation transition-transform transform ease-in`}
            />
          )}
        </button>

        <div className="w-full md:w-[160px] lg:w-[170px] xl:w-[240px] ">
          <div
            ref={wavesurferRef}
            id="waveform"
            className="bg-transparent cursor-pointer"
          />

          <p className="text-white text-[10px] sm:text-xs  flex justify-between">
            <span>{currentTime || ""}</span>
            <span>{duration}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AudioWave;
