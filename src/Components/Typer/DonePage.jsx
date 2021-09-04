import React from "react";
import "./DonePage.css"

const DonePage = ({ time, characters, words, cpm, wpm, accuracy, onRestart }) => (
	<>
		<div className="data">
			<h2>Time: {time}ms</h2>
			<h2>Characters: {characters}</h2>
			<h2>Words: {words}</h2>
			<h2>CPM: {cpm}</h2>
			<h2>WPM: {wpm}</h2>
			<h2>Accuracy: {accuracy}%</h2>
		</div>
		<div className="text-tools">
			<div
				onClick={onRestart}
				className="restart"
			>
				<i className="material-icons-round">replay</i>
			</div>
		</div >
	</>
);

export default DonePage;