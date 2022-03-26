import { useState, useEffect } from "react";
import "./App.css";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setVisible(!visible)}>Show/Hide</button>
      {visible && <CountingComp />}
    </>
  );
};

export default App;

const CountingComp = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const counting = (count) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count < 10 && count > 2) setCount(count + 2);
  }, [count]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // side effects

    // cleanup
    return () => {
      setCount(0);
      console.log("hello");
    };
  }, []);

  const [state, setState] = useState("");

  const stateDebounce = useDebounce(state, 2000);

  useEffect(() => {
    fetch(`https://checkemail.com/api/${stateDebounce}`);
  }, [stateDebounce]);

  return (
    <div style={{ height: "1000rem" }}>
      <p>You clicked {count} times</p>
      <input type="text" onChange={(e) => setState(e.target.value)} />
      {/* <button onClick={() => counting(count)}>Click me</button> */}
    </div>
  );
};
