import { Button } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";
import "./Settings.css";

const Settings = ({
  setCapitalLetters,
  setPunctuations,
  setSounds,
  punctuations,
  sounds,
  capitalLetters,
}) => {
  return (
    <div className="setting-article">
      <div className="Setting-Buttons">
        <h1>Text Settings</h1>
        <div className="capital-div">
          {capitalLetters ? (
            <CheckBox onClick={() => setCapitalLetters(!capitalLetters)} />
          ) : (
            <CheckBoxOutlineBlank
              onClick={() => setCapitalLetters(!capitalLetters)}
            />
          )}
          <Button
            variant="contained"
            onClick={() => setCapitalLetters(!capitalLetters)}
          >
            Enable capital letters.
          </Button>
        </div>
        <div className="punctuations-div">
          {punctuations ? (
            <CheckBox onClick={() => setPunctuations(!punctuations)} />
          ) : (
            <CheckBoxOutlineBlank
              onClick={() => setPunctuations(!punctuations)}
            />
          )}
          <Button
            variant="contained"
            onClick={() => setPunctuations(!punctuations)}
          >
            Enable punctuation.
          </Button>
        </div>
        <div className="sounds-div">
          {sounds ? <CheckBox /> : <CheckBoxOutlineBlank />}
          <Button variant="contained" onClick={() => setSounds(!sounds)}>
            Enable Sounds.
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
