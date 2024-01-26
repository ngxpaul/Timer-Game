import { forwardRef, useImperativeHandle,useRef } from "react";
const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={ref} className="result-modal" open>
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
});

export default ResultModal;
