import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from "react";
import ReactQuill from "react-quill";
import DragDrop from "./DragDrop";

import '../../../node_modules/react-quill/dist/quill.snow.css';
export default function Form() {
  const [content, setContent] = useState("");

  const handleChange = (html) => setContent(html);
  const defaultProps = {
    options: nameData,
    getOptionLabel: (option) => option.title
  };
  return (
    <>
      <div className="form-set">
        <h3 style={{ fontWeight: "500" }}>Card Pack Schema:</h3>
        <div className="input">
          <p>*Name</p>
          <TextField
            style={{ width: "100%" }}
            id="standard-basic"
            variant="outlined"
          />
        </div>
        <div className="input">
          <p>Perks</p>
          <Autocomplete
            multiple
            id="tags-outlined"
            {...defaultProps}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField {...params} variant="outlined" placeholder="type..." />
            )}
          />
        </div>
        <div className="input richEdit">
          <p>*Description</p>
          <ReactQuill
            className="rich-text-editor"
            placeholder="Start Writting..."
            modules={App.modules}
            formats={App.formats}
            onChange={handleChange}
            type="text"
            name="content"
            value={content}
          />
        </div>
        <DragDrop label={"*Image"} />

        <div className="input">
          <p>*Drops Number</p>
          <TextField
            style={{ width: "100%" }}
            id="standard-basic"
            type="number"
            placeholder="2"
            variant="outlined"
          />
        </div>

        <div className="input">
          <p>*Item Drop Probability</p>
          <TextField
            style={{ width: "100%" }}
            id="standard-basic"
            min="1"
            maxValue="100"
            type="number"
            placeholder="2"
            variant="outlined"
          />
        </div>

        <div className="input">
          <p>Price</p>
          <TextField
            placeholder="16.66"
            type="number"
            id="outlined-start-adornment"
            // className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs</InputAdornment>
              )
            }}
            variant="outlined"
          />
        </div>
      </div>
    </>
  );
}

const App = () => {
  App.modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      ["bold", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"]
    ]
  };

  App.formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
  ];
};

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
