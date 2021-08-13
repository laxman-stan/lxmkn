import "./TagInput.css";
import Portal from "../Portal";
import ProbInput from "../ProbabilityInput/ProbabiltyInput";
import { usePopper } from "react-popper";
import AutoComplete from "../Auto_Complete/AutoComplete";
import { useState, useEffect } from "react";

const clsClick = "clsClick";

export default function TagInput(props) {
  const [tags, setTags] = useState(["Javascript", "HTML", "CSS"]);
  const [tag, setTag] = useState(""); //value of input
  const [display, setDisplay] = useState("none");
  const hideAS = (e) => {
    let str = e.target.className.toString();
    if (str.includes(clsClick)) console.log(true);
    else if (
      str.includes("object") &&
      e.target.parentNode.parentNode.className.includes(clsClick)
    )
      console.log(true);
    else {
      console.log(false);
      setDisplay("none");
    }
  }; // hide auto select menu
  useEffect(() => {
    window.addEventListener("click", hideAS);
    return () => window.removeEventListener("click", hideAS);
  }, [display]);

  const focus = () => {
    !tag && setTag("");
    setDisplay("flex");
  };
  const addTags = (value = tag) => {
    setTimeout(() => {
      setDisplay("flex");
    }, 100);
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

  const [tool, setTool] = useState(null);
  const [tip, setTip] = useState(null);
  const { styles, attributes } = usePopper(tool, tip, {
    placement: "auto",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [100, 0]
        }
      }
    ]
  });

  return (
    <>
      <div ref={setTool} className={`TagInput ${clsClick}`} tabindex="1">
        <p
          className={`${clsClick}`}
          style={{
            width: "100%",
            color: "#00c",
            fontWeight: "bold",
            marginLeft: "5px"
          }}
        >
          {props.value}
        </p>

        {tags.map((tag, i) => (
          <Tag key={i} value={tag} removeTags={() => removeTags(i)} />
        ))}
        <input
          placeholder="type to add..."
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTags(firstValue)}
          className={`multInput ${clsClick}`}
          type="text"
          onFocus={focus}
        />
      </div>

      <AutoComplete
        firVal={firVal}
        {...attributes.popper}
        style={styles.popper}
        ref={setTip}
        dis={display}
        addTags={addTags}
        data={nameData}
        check={tag ? tag : ""}
      />

      {/* <ProbInput data={tags} /> */}
    </>
  );
}

function Tag({ value, removeTags }) {
  return (
    <div className={`tagName tagNameImg ${clsClick}`}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Icon removeTags={removeTags} />
        {value}
      </div>
      <div className={`img ${clsClick}`}></div>
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
      className={`svg ${clsClick}`}
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
