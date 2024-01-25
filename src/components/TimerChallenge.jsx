import { useState ,useRef} from "react";
import ResultModal from "./ResultModal";
// let timer;
export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStart, setTimerStart] = useState(false);
  const timer = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStart(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
{timerExpired && <ResultModal result="lose" targetTime={targetTime} />}
     <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStart ?  handleStop : handleStart }>
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
