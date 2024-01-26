import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
// let timer;
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStart, setTimerStart] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimerStart(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {timerExpired && (
        <ResultModal ref={dialog} targetTime={targetTime} result="lose" />
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStart ? handleStop : handleStart}>
            {timerStart ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStart ? "active" : undefined}>
          {timerStart ? "Timing is running....." : "Time is inactive"}
        </p>
      </section>
    </>
  );
}
