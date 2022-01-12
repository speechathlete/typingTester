import { useState, useEffect } from "react";
import { signOut } from "../firebase";
import { firestore } from "../firebase";
import "./AccountData.css";

const AccountData = ({ user }) => {
  const [score, setScore] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      const leaderboardRef = firestore.collection("leaderboard");
      const doc = leaderboardRef.doc(user.email);
      const data = await doc.get();
      if (data.exists) setScore(data.data().WPM);
    };
    fetch();
  }, [user.email]);
  return (
    <>
      <div id="account-data">
        <div className="img-div">
          <img src={user.photoURL} alt="User" />
        </div>
        <div>
          <div>Name: {user.displayName}</div>
          <div>Email: {user.email}</div>
          <div>Best Score: {score.toString()} words per minute</div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: "22rem",
          left: "44rem",
        }}
      >
        <button
          className="btn btn-primary btn-lg "
          style={{
            top: "30rem",
            position: "fixed",
            left: "43rem",
            height: " 5rem",
            widt: "12rem",
            fontSize: "2.5rem",
          }}
          onClick={signOut}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default AccountData;
