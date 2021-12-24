import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import "./LeaderBoardPage.css";

export const updateLeaderBoard = async (name, email, WPM) => {
  const leaderboardRef = firestore.collection("leaderboard");
  const doc = leaderboardRef.doc(email);
  const data = await doc.get();
  if (data.data() === undefined || data.data().WPM < WPM)
    doc.set({ WPM, name });
};

const LeaderBoard = () => {
  const [results, setResults] = useState([]);
  const fetch = async () => {
    const results = [];
    const leaderboardRef = firestore.collection("leaderboard");
    const q = await leaderboardRef.orderBy("WPM", "desc").get();
    q.forEach((doc) =>
      results.push({ Name: doc.data().name, WPM: doc.data().WPM })
    );
    setResults(results);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div id="leaderboard">
      <h1>LeaderBoard</h1>
      <table>
        <tbody>
          {results.length !== 0 ? (
            results.map(({ Name, WPM }) => (
              <tr key={Name}>
                <td id="name">{Name}</td>
                <td id="wpm">{WPM}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td id="name">No Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
