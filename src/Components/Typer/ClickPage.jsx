import React from "react";
import "./ClickPage.css"

const ClickPage = ({ onPlay }) => (
	<div className="clickPage">
		<button className="button" onClick={onPlay}>Click to Play</button>
	</div>
);

export default ClickPage;