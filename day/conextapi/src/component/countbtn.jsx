import React from "react";
import { MdAdd } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { useContext } from "react";
import { CountContext } from "../context/counter.jsx"; 

function Countbtn() {
  const { count, setCount } = useContext(CountContext);
  
  return (
    <div className="counter-buttons">
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        <MdAdd />
      </button>
      <button onClick={() => setCount(prevCount => Math.max(0, prevCount - 1))}>
        <FaMinus />
      </button>
    </div>
  );
}

export default Countbtn;
