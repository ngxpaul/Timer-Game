export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" open >
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
