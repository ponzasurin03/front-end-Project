import { useState } from "react";
import Axios from "axios";
import BackgroundAnimate from "./BackgroundAnimate";

const AddDataALL = () => {
  const [oldURL, setOldURL] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [click, setClick] = useState(0);
  const [dataList, setDataList] = useState([]);

  const getData = () => {
    Axios.get("http://localhost:4000/dataurl").then((response) => {
      setDataList(response.data);
    });
  };

  const addData = () => {
    Axios.post("http://localhost:4000/create", {
      oldURL: oldURL,
      shorturl: shorturl,
      click: click,
    }).then(() => {
      setDataList([
        ...dataList,
        {
          oldURL: oldURL,
          shorturl: shorturl,
          click: click,
        },
      ]);
    });
  };

  // const contclick = () => {

  //   setClick()
  // }

  return (
    <div className="card-body">
      <BackgroundAnimate />
      <div className="qrcode">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <div className="information">
                    <form action="">
                      <div className="mb-3">
                        <label className="AddData">OldURL</label>
                        <input
                          type="text"
                          placeholder="Enter OldURL"
                          className="form-control"
                          onChange={(event) => {
                            setOldURL(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="AddData">Shorturl</label>
                        <input
                          type="text"
                          placeholder="Enter Shorturl"
                          className="form-control"
                          onChange={(event) => {
                            setShorturl(event.target.value);
                          }}
                        />
                      </div>
                      <button onClick={addData} class="btn btn-success" >
                        Add Data
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <div className="data">
                  <button class="btn btn-primary" onClick={getData}>
                    Show Data
                  </button>
                  {dataList.map((val, key) => {
                    return (
                      <div className="employee card">
                        <div className="card-body text-left">
                          <p className="card-text">OldURL: {val.oldURL}</p>
                          <p className="card-text">Shorturl: {val.shorturl}</p>
                          <p className="card-text">CLICK: {val.click}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDataALL;
