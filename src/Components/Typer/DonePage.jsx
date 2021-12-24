import React from "react";
import { useContext } from "react";
import DoneTable from "./DoneTable";
import RestartButton from "./RestartButton";
import { authContext } from "../../AuthProvider";
import { updateLeaderBoard } from "../LeaderBoardPage";
import LoginButton from "../LoginButton";
import "./DonePage.css";

const DonePage = (props) => {
  const user = useContext(authContext);
  if (user) {
    updateLeaderBoard(user.displayName, user.email, props.wpm);
    return (
      <>
        <div className="data">
          <p>Great Job {user.displayName}</p>
          <DoneTable {...props} />
        </div>
        <RestartButton restart={props.onRestart} />
      </>
    );
  } else {
    return (
      <>
        <div className="data">
          <p>Great Job</p>
          <LoginButton />
          <DoneTable {...props} />
        </div>
        <RestartButton restart={props.onRestart} />
      </>
    );
  }
};

export default DonePage;
