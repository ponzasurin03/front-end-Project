import { useState } from "react";
// import Axios from "axios";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  // const [click, setClick] = useState(0);
  // const [dataList, setDataList] = useState([]);

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  // const addData = () => {
  //   Axios.post("http://localhost:3001/create", {
  //     click: click,
  //   }).then(() => {
  //     setDataList([
  //       ...dataList,
  //       {
  //         click: click,
  //       },
  //     ]);
  //   });
  // };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>shorten</button>
      </div>
    </div>
  );
};

export default InputShortener;
