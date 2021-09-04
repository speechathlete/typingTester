import React from "react";

const DonePage = ({ time, characters, words, cpm, wpm, accuracy, onRestart }) => (
	<>
		<div>
			<div>Time: {time}ms</div>
			<div>Characters: {characters}</div>
			<div>Words: {words}</div>
			<div>CPM: {cpm}</div>
			<div>WPM: {wpm}</div>
			<div>Accuracy: {accuracy}%</div>
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