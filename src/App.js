import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountPage from "./Components/AccountPage";
import LeaderBoardPage from "./Components/LeaderBoardPage";
import Settings from "./Components/Settings";
import Typer from "./Components/Typer/";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  const [paraIndex, setParaIndex] = useState(0);
  const [capitalLetters, setCapitalLetters] = useState(false);
  const [punctuations, setPunctuations] = useState(false);
  const [sounds, setSounds] = useState(true);
  const stateProps = {
    paraLengths: [5, 10, 20, 30],
    paraIndex,
    setParaIndex,
    capitalLetters,
    sounds,
    punctuations,
  };
  const settingProps = {
    setCapitalLetters,
    setPunctuations,
    setSounds,
    punctuations,
    sounds,
    capitalLetters,
  };

  return (
    <BrowserRouter>
      <Navbar {...stateProps} />
      <Switch>
        <Route path="/" exact>
          <div className="Article" style={{ height: "calc(100vh - 10rem)" }}>
            <Typer {...stateProps} />
          </div>
        </Route>
        <Route path="/settings" exact>
          <Settings {...settingProps} />
        </Route>
        <Route path="/account" exact>
          <AccountPage />
        </Route>
        <Route path="/leaderboard" exact>
          <LeaderBoardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
