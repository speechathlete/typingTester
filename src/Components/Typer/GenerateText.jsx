import "./GenerateText.css";

import React, { useEffect, useState } from "react";
import correctKey from "./sounds/keypress.mp3";
import errorKey from "./sounds/error.m4a";
import useSound from "use-sound";

const txtgen = require("txtgen");
const ignoredKeys = [
	"F1",
	"F2",
	"F3",
	"F4",
	"F5",
	"F6",
	"F7",
	"F8",
	"F9",
	"F10",
	"F11",
	"F12",
	"Shift",
];

let GenerateText = ({
	paraLengths,
	paraIndex,
	onComplete,
	punctuations,
	sounds,
	capitalLetters,
}) => {
	const [keypress] = useSound(correctKey, { volume: 0.15 });
	const [error] = useSound(errorKey, { volume: 0.15 });
	const [states, setStates] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [cursor, setCursor] = useState(0);
	const [startTime, setStartTime] = useState(0);
	const [charactersTyped, setCharactersTyped] = useState(0);
	const [correctCharCount, setCorrectCharCount] = useState(0);
	const [incorrectCharCount, setIncorrectCharCount] = useState(0);
	const init = () => {
		const noOfWords = paraLengths[paraIndex];
		const arrayOfWords = txtgen.article().split(" ").slice(0, noOfWords);
		arrayOfWords.length = noOfWords;
		const string = arrayOfWords.join(" ");
		const arrayOfChars = [];
		for (const c of string) {
			if ((c >= "a" && c <= "z") || c === " ") arrayOfChars.push(c);
			else if (c >= "A" && c <= "Z") {
				if (capitalLetters) arrayOfChars.push(c);
				else arrayOfChars.push(c.toLowerCase());
			} else {
				if (punctuations) arrayOfChars.push(c);
			}
		}

		setCharacters(arrayOfChars);
		const states = new Array(arrayOfChars.length);
		states.fill("not-typed");
		setStates(states);
		setCursor(0);
		setStartTime(new Date().getTime());
		setCharactersTyped(0);
		setCorrectCharCount(0);
		setIncorrectCharCount(0);
	};

	// Run after first render
	useEffect(init, [paraLengths, paraIndex, punctuations, capitalLetters]);

	// Run after every render
	useEffect(() => {
		const listener = ({ key }) => {
			if (
				(key >= "a" && key <= "z") ||
				(key >= "A" && key <= "Z") ||
				key === " " ||
				(`}('".,<>{)][-+=_/*@#%^&`.includes(key))
			) {
				setCharactersTyped(charactersTyped + 1);
				if (characters[cursor] === key) {
					if (sounds) keypress();
					if (cursor === characters.length - 1) {
						const endTime = new Date().getTime();
						const time = endTime - startTime;
						onComplete({
							time: time / 1000,
							characters: characters.length,
							words: paraLengths[paraIndex],
							wpm: parseFloat((correctCharCount * 12000 / time).toFixed(1)),
							accuracy:
								(correctCharCount / (correctCharCount + incorrectCharCount)) *
								100,
						});
					} else {
						states[cursor] = "typed-correctly";
						setCorrectCharCount(correctCharCount + 1);
						setCursor(cursor + 1);
					}
				} else {
					if (!ignoredKeys.includes(key)) {
						if (sounds) error();
						states[cursor] = "typed-incorrectly";
						setIncorrectCharCount(incorrectCharCount + 1);
						setStates([...states]);
					}
				}
			}
		};

    setCharacters(arrayOfChars);
    const states = new Array(arrayOfChars.length);
    states.fill("not-typed");
    setStates(states);
    setCursor(0);
    setStartTime(new Date().getTime());
    setCharactersTyped(0);
    setCorrectCharCount(0);
    setIncorrectCharCount(0);
  };

  // Run after first render
  useEffect(init, [paraLengths, paraIndex,punctuations,capitalLetters]);

  // Run after every render
  useEffect(() => {
    const listener = ({ key }) => {
      //   console.log(key);
      if (
        (key >= "a" && key <= "z") ||
        (key >= "A" && key <= "Z") ||
        key === " "||
		(`}('".,<>{)][-+=_/*@#%^&`.includes(key))
      ) {
        setCharactersTyped(charactersTyped + 1);
        if (characters[cursor] === key) {
          if (sounds) keypress();
          if (cursor === characters.length - 1) {
            const endTime = new Date().getTime();
            const time = endTime - startTime;

            onComplete({
              time: time / 1000,
              characters: characters.length,
              words: paraLengths[paraIndex],
              cpm: (correctCharCount * 60000) / time,
              accuracy:
                (correctCharCount / (correctCharCount + incorrectCharCount)) *
                100,
            });
			// Store the data in the database if user present
          } else {
            states[cursor] = "typed-correctly";
            setCorrectCharCount(correctCharCount + 1);
            setCursor(cursor + 1);
          }
        } else {
          if (!ignoredKeys.includes(key)) {
            if (sounds) error();
            states[cursor] = "typed-incorrectly";
            setIncorrectCharCount(incorrectCharCount + 1);
            setStates([...states]);
          }
        }
      }
    };

    window.addEventListener("keyup", listener);
    return () => window.removeEventListener("keyup", listener);
  });
  return (
    <>
      <div className="text-wrapper">
        <div className="complete-text">
          <div className="display-text">
            {states.map((char, index) =>
              index === cursor ? (
                <span key={index} className={`${states[index]} current-cursor`}>
                  {characters[index]}
                </span>
              ) : (
                <span key={index} className={states[index]}>
                  {characters[index]}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <div className="text-tools">
        <div onClick={init} className="restart">
          <i className="material-icons-round">replay</i>
        </div>
      </div>
    </>
  );
};

export default GenerateText;
