import React from "react";
import "./ClickPage.css";

const ClickPage = ({ onPlay }) => (
  <div className="clickPage">
    <button className="button" onClick={onPlay}>
      Click to Start
    </button>
  </div>
);

export default ClickPage;
