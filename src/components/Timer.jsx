import { CountdownCircleTimer } from "react-countdown-circle-timer";
import React, { useState } from "react";
import "./Timer.css";
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="timerContainer">
      <div style={{ textAlign: "center" }}>
        <div className="timer">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={seconds}
            colors={["#FF6A6A"]}
          >
            {({ remainingTime }) => {
              if (remainingTime === 0) {
                setIsPlaying(false);
                // alert("Time is up!");
                return <div>Time is up!</div>;
              } else {
                return (
                  <div className="time">
                    <div>{Math.floor(remainingTime / 3600)}h</div>{" "}
                    {/* 1 hour = 3600 seconds */}{" "}
                    {/* 3661 secodonds = 1 hour 1 minute 1 second */}
                    <div> {Math.floor((remainingTime % 3600) / 60)} min</div>
                    <div>{remainingTime % 60}sec</div>
                  </div>
                );
              }
            }}
          </CountdownCircleTimer>
        </div>
      </div>

      <div className="buttons">
        <div className="seconds">
          <button className="btn" onClick={() => setSeconds((prev) => prev + 1)}>
            + Second
          </button>
          <button className="btn"
            onClick={() => {
              if (seconds > 0) {
                setSeconds((prev) => prev - 1);
              }
            }}
          >
            - Second
          </button>
        </div>
        <div className="minutes">
          <button className="btn" onClick={() => setSeconds((prev) => prev + 60)}>
            + Minute
          </button>
          <button className="btn"
            onClick={() => {
              if (seconds >= 60) {
                setSeconds((prev) => prev - 60);
              }
            }}
          >
            - Minute
          </button>
        </div>
        <div className="hours">
          <button className="btn" onClick={() => setSeconds((prev) => prev + 3600)}>
            + Hour
          </button>
          <button className="btn"
            onClick={() => {
              if (seconds >= 3600) {
                setSeconds((prev) => prev - 3600);
              }
            }}
          >
            - Hour
          </button>
        </div>
      </div>
      <button className="playbtn" disabled={isPlaying} onClick={() => setIsPlaying(true)}>
          Play
        </button>
    </div>
  );
}
