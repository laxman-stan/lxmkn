import "./ProbabiltyInput.css";
import { useState, useEffect, useRef } from "react";
export default function ProbabilityInput() {
  const data = ["alpha", "beta", "gama", "delta", "pi"];
  const suggArray = useRef(new Array(data.length));

  const addProb = (value, index) => {
    suggArray.current[index] = value;
    console.log(suggArray.current);
  };

  return (
    <>
      <div className="probInput">
        {data.map((i, index) => (
          <ProbMaker key={i} keyVal={index} value={i} addProb={addProb} />
        ))}
      </div>
    </>
  );
}

const ProbMaker = (props) => {
  const [val, setVal] = useState();
  const change = (e) => {
    setVal(e.target.value);
    props.addProb(e.target.value, props.keyVal);
  };
  return (
    <div className="probContainer">
      <p>{props.value}</p>
      <input value={val} onChange={(e) => change(e)} placeholder={20} />
    </div>
  );
};

//useref se array bnakr usme index ki mdad se data store kren
