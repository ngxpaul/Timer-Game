import { forwardRef } from "react"
const ResultModal = forwardRef(function ResultModal({result, targetTime},ref) {
  return (
    <dialog ref={ref} className="result-modal"  >
      <h2>You {result}</h2>
      <p>
        Your target time <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stop the timer with <strong>X second left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
)


export default ResultModal