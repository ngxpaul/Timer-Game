import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// let timer;
export default function TimerChallenge({ title, targetTime }) {
  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);
  const timeIsActive = remainingTime > 0 && remainingTime <= targetTime * 1000;
  if (remainingTime <= 0) {
    clearInterval(timer.current);
    setRemainingTime(targetTime * 1000);
    dialog.current.open();
  }
  const timer = useRef();
  const dialog = useRef();
  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
    setTimerStart(true);
  }
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Timing is running....." : "Time is inactive"}
        </p>
      </section>
    </>
  );
}
