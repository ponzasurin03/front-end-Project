import React, { Component } from "react";
import BackgroundAnimate from "./BackgroundAnimate";
import { useState } from "react";
import QRCode from "qrcode";

const Qr = () => {
  const [url, seturl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRcode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 300,
        margin: 2,
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div>
      <div className="containerqr">
        <BackgroundAnimate />
        <div className="inputContainer">
          <h1>
            QR Code <span>Generator</span>
          </h1>
          <div>
            <input
              type="text"
              placeholder="Paste a link to Generate it"
              value={url}
              onChange={(e) => seturl(e.target.value)}
            />
            <button onClick={GenerateQRcode}>Generate</button>
          </div>
        </div>
      </div>
      <div className="qrcode">
        <img src={qrcode} />
      </div>
    </div>
  );
};

export default Qr;
