import "./TagInput.css";
import { usePopper } from "react-popper";
import AutoComplete from "../Auto_Complete/AutoComplete";
import { useState, useRef } from "react";
export default function TagInput() {
  const [tags, setTags] = useState(["Javascript", "HTML", "CSS"]);
  const [tag, setTag] = useState(""); //value of input
  const [display, setDisplay] = useState("none");
  const focus = () => {
    !tag && setTag("");
    setDisplay("flex");
  };
  const addTags = (value = tag) => {
    console.log("cla");
    setTags([...tags, value]);
    setTag("");
  };
  const removeTags = (i) => {
    let t = [...tags];
    t.splice(i, 1);
    setTags(t);
  };
  let firstValue;
  const firVal = (i) => {
    firstValue = i;
  };
  const tool = useRef();
  const tip = useRef();
  const { styles, attributes } = usePopper(tool.current, tip.current, {
    placement: "top",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 0]
        }
      }
    ]
  });

  return (
    <>
      <div
        ref={tool}
        className="TagInput"
        tabindex="1"
        onBlur={() => setDisplay("none")}
      >
        {tags.map((tag, i) => (
          <Tag key={i} value={tag} removeTags={() => removeTags(i)} />
        ))}
        <input
          placeholder="type to add..."
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTags(firstValue)}
          className="multInput"
          type="text"
          onFocus={focus}
        />
      </div>
      
      <AutoComplete
        firVal={firVal}
        {...attributes.popper}
        style={styles.popper}
        ref={tip}
        dis={display}
        addTags={addTags}
        data={nameData}
        check={tag ? tag : ""}
      />
    </>
  );
}

function Tag({ value, removeTags }) {
  return (
    <div className="tagName">
      {value}
      <Icon removeTags={removeTags} />
    </div>
  );
}

function Icon({ removeTags }) {
  return (
    <svg
      onClick={() => removeTags()}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="svg"
    >
      <path d="M17.59 5L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41 17.59 5z"></path>
    </svg>
  );
}

const nameData = [
  {
    title: "GMC"
  },
  {
    title: "Lexus"
  },
  {
    title: "Toyota"
  },
  {
    title: "Plymouth"
  },
  {
    title: "Lexus"
  },
  {
    title: "Ford"
  },
  {
    title: "Spyker"
  },
  {
    title: "BMW"
  },
  {
    title: "Pontiac"
  },
  {
    title: "Honda"
  },
  {
    title: "Hyundai"
  },
  {
    title: "Dodge"
  },
  {
    title: "Mazda"
  },
  {
    title: "Subaru"
  },
  {
    title: "Jeep"
  },
  {
    title: "Volvo"
  },
  {
    title: "Oldsmobile"
  },
  {
    title: "Volkswagen"
  },
  {
    title: "Volkswagen"
  },
  {
    title: "Oldsmobile"
  }
];
