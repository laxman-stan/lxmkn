import "./AutoComplete.css";
import { useState } from "react";

export default function AutoComplete(props) {
  const data = props.data;
  const value = props.check;
  let matched = [];
  for (let i = 0; i < data.length; i++)
    if (data[i].title.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
      matched.push(data[i].title);

  props.firVal(matched[0]);

  return (
    <div style={{position: 'relative', height:'0'}}>
    <div style={{ display: props.dis }} className="AC_Container">
      {matched.map((i) => (
        <p onClick={() => props.addTags(i)}>{i}</p>
      ))}
    </div></div>
  );
}
