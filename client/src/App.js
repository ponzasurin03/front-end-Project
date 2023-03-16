import "./App.css";
import AddDataALL from "./AddDataALL";
import Qr from "./Qr";
import GenURL from "./GenURL";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { useState } from "react";
// import Axios from "axios";

function App() {
  return (
    <Router>
      <div>
        <header className="app-header">
          <Link to="/">Gen URL</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/addurl">ADD URL</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/genqr">QR CODE</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </header>
        <Routes>
          <Route path="/" element={<GenURL />}></Route>
          <Route path="/addurl" element={<AddDataALL/>}></Route>
          <Route path="/genqr" element={<Qr />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;