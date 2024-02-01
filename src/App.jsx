import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./store/counterSlice";

import { useCallback, useEffect } from "react";
import { toggleAuth } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();

  const globalState = useSelector((state) => state);

  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      } else if (type === "decrease") {
        dispatch(decrease(value));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(increase(20));
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {globalState.auth.isAuthenticated && (
        <>
          <div className="counter">
            Counter: {globalState.counter.value}
          </div>
          <div>
            <button
              className="btn"
              onClick={() => counterHandler("increase", 3)}
            >
              increase +
            </button>
            <button
              className="btn"
              onClick={() => counterHandler("decrease", 1)}
            >
              decrease -
            </button>
          </div>
        </>
      )}
      <div>
        <button onClick={() => dispatch(toggleAuth())} className="btn">
          {globalState.auth.isAuthenticated ? "Hide" : "Show"} Counter Number
        </button>
      </div>
    </div>
  );
}

export default App;
