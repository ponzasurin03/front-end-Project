const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "database",
});

app.get("/dataurl", (req, res) => {
    db.query("SELECT * FROM dataurl", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
});

app.post("/create", (req, res) => {
  const oldURL = req.body.oldURL;
  const shorturl = req.body.shorturl;
  const click = req.body.click;

  db.query(
    "INSERT INTO dataurl (oldURL, shorturl, click) VALUES (?,?,?)",
    [oldURL, shorturl, click],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.listen(4000, () => {
    console.log("Yey, your server is running on port 3002");
});