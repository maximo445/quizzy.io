import { useEffect, useState } from "react";

export default function CountDown({ dispatch, payload }) {
  const [time, setTime] = useState(180);

  useEffect(
    function () {
      if (time < 0) {
        dispatch({ type: "showResults", payload });
      }
      const interval = setInterval(function () {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
    },
    [time, dispatch]
  );

  return (
    <div className="CountDown">
      <span>{time}</span>
    </div>
  );
}
