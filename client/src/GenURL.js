import InputShortener from "./InputShortener";
import LinkURL from "./LinkURL";
import BackgroundAnimate from "./BackgroundAnimate";
import { useState } from "react";

const GenURL = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkURL inputValue={inputValue} />
    </div>
  );
};

export default GenURL;
