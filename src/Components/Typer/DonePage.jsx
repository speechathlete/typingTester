import React from "react";
import "./DonePage.css"

const DonePage = ({ time, characters, cpm, accuracy, onRestart }) => (
	<>
		<div className="data">
			<p>Great Job</p>
			<table>
				<tr>
					<td>Time</td>
					<td>{time.toFixed(0)}s</td>
				</tr>
				<tr>
					<td>Characters</td>
					<td>{characters}</td>
				</tr>
				<tr>
					<td>WPM</td>
					<td>{(cpm / 5).toFixed(1)}</td>
				</tr>
				<tr>
					<td>Accuracy</td>
					<td>{accuracy.toFixed(0)}%</td>
				</tr>
			</table>
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