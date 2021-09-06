import React from "react";
import "./DonePage.css"

const DonePage = ({ time, characters, words, cpm, accuracy, onRestart }) => (
	<>
		<div className="data">
			<p>Great Job!!!!! user_name/guest</p>
			<table>
				<tr>
					<td>Time</td>
					<td>{time}s</td>
				</tr>
				<tr>
					<td>Characters</td>
					<td>{characters}</td>

				</tr>
				<tr>
					<td>Words</td>
					<td>{words}</td>

				</tr>
				<tr>
					<td>CPM</td>
					<td>{cpm.toFixed(0)}</td>

				</tr>
				<tr>
					<td>WPM</td>
					<td>{(cpm/5).toFixed(2)}</td>

				</tr>
				<tr>
					<td>Accuracy</td>
					<td> {accuracy}%</td>

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