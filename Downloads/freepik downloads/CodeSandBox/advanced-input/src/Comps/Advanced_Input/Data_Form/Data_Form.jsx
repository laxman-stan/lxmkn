import { useState } from "react";
import "./Data_Form.css";
import CardSelect from "../Tag_Input/TagInput_Img";
export default function DataForm() {
  const [check, setCheck] = useState(null);
  const [card, setCard] = useState(null);
  const [val, setVal] = useState();

  return (
    <>
      <div className="flex dataFormCont df_Top">
        <p>Select an option:</p>
        <div className="flex">
          <input
            onClick={() => setCheck("Digital")}
            type="radio"
            id="Digital"
            name="option"
            value="Digital"
          />
            <label htmlFor="Digital">Digital</label>
          <br />
           {" "}
          <input
            style={{ marginLeft: "100px" }}
            onClick={() => setCheck("physical")}
            type="radio"
            id="physical"
            name="option"
            value="physical"
          />
            <label htmlFor="physical">Physical</label>
        </div>
      </div>

      <div
        style={{ display: check ? "flex" : "none" }}
        className="flex dataFormCont df_Top"
      >
        <p>Select card type:</p>
        <div className="flex">
          <input
            onClick={() => setCard("Card")}
            type="radio"
            id="card"
            name="card-type"
            value="card"
          />
            <label htmlFor="card">Card</label>
          <br />
           {" "}
          <input
            style={{ marginLeft: "100px" }}
            onClick={() => setCard("card-pack")}
            type="radio"
            id="card-pack"
            name="card-type"
            value="card-pack"
          />
            <label htmlFor="card-pack">Card Pack</label>
          <input
            style={{ marginLeft: "100px" }}
            onClick={() => setCard("combo")}
            type="radio"
            id="combo"
            name="card-type"
            value="combo"
          />
            <label htmlFor="combo">Combo</label>
        </div>
      </div>

      <div style={{ display: card ? "block" : "none" }}>
        <CardSelect value={card} />
      </div>
      <div style={{ display: card ? "flex" : "none" }} className="probInput">
        <p
          style={{
            width: "100%",
            color: "#00c",
            fontWeight: "bold",
            marginLeft: "5px"
          }}
        >
          Addtion Options
        </p>
        <div className="probContainer">
          <p>Invertory</p>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder={1}
          />
        </div>

        <div style={{ marginLeft: "30px " }} className="probContainer">
          <p>Exp</p>
          <input
            style={{ width: "125px" }}
            type="date"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
