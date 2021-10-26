import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import "./LeaderBoardPage.css";

export const updateLeaderBoard = async (name, wpm) => {
	const leaderboardRef = firestore.collection("leaderboard");
	const doc = leaderboardRef.doc(name);
	const data = await doc.get();
	if (data.data() === undefined || data.data().WPM < wpm)
		doc.set({ "WPM": wpm });
};

const LeaderBoard = () => {
	const [results, setResults] = useState([]);
	useEffect(async () => {
		const results = [];
		const leaderboardRef = firestore.collection("leaderboard");
		const q = await leaderboardRef.orderBy("WPM", "desc").get();
		q.forEach(doc => results.push({ "Name": doc.id, "WPM": doc.data().WPM }));
		setResults(results);
	}, results);
	return (
		
		<div id="leaderboard">
			<h1>LeaderBoard</h1>
			{(results.length!=0)?
			(<table>
				{results.map(({ Name, WPM }) => (
					<tbody>
						<tr>
							<td id="name">{Name}</td>
							<td id="wpm">{WPM}</td>
						</tr>
					</tbody>
				))}
			</table>):(
				""
			)}
		</div>
	);
}

export default LeaderBoard;