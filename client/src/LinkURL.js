import axios from "axios";
import { useEffect, useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";
import Axios from "axios";

const LinkURL = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [datalist, setDatalist] = useState([]);
  const [url, setUrl] = useState("");
  const [click, setClick] = useState(0);

  const getShorturl = () => {
    Axios.get("http://localhost:3001/shorturl").then((response) => {
      setDatalist(response.data);
    });
  };
  
  const addShorturl = () => {
    Axios.post("http://localhost:3001/create", {
      url: url,
      click: click,
    }).then(() => {
      setDatalist([
        ...datalist,
        {
          url: url,
          click: click,
        },
      ]);
    });
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if(inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
      setUrl(shortenLink);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if(loading) {
    return <p className="noData">Loading...</p>
  }
  if(error) {
    return <p className="noData">Fail :(</p>
  }


  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
            {/* <button onClick={addShorturl} value={shortenLink}
          onChange={(e) => setUrl(e.target.value)}>add</button> */}
            {/* <button onClick={getShorturl}>show</button> */}
        </div>
      )}
    </>
  )
}

export default LinkURL