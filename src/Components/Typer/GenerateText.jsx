import "./GenerateText.css";
import React, { useEffect, useState } from "react";
import faker from "faker";
import correctKey from './sounds/keypress.mp3';
import errorKey from './sounds/error.m4a';
import useSound from 'use-sound';

let GenerateText = ({ paraLengths, paraIndex, onComplete }) => {
	const [keypress] = useSound(correctKey, { volume: 0.15 });
	const [error] = useSound(errorKey, { volume: 0.15 });
	const [states, setStates] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [cursor, setCursor] = useState(0);
	const [startTime, setStartTime] = useState(0);
	const [charactersTyped, setCharactersTyped] = useState(0);
	const [correctCharCount,setCorrectCharCount]= useState(0);
	const [incorrectCharCount,setIncorrectCharCount]= useState(0);
	const init = () => {
		const noOfWords = paraLengths[paraIndex];
		const arrayOfWords = faker.random.words(noOfWords).toLowerCase().replaceAll('-', ' ').split(' ');
		arrayOfWords.length = noOfWords;
		const string = arrayOfWords.join(' ');
		const arrayOfChars = [];
		for (const char of string)
			if ((char >= 'a' && char <= 'z') || char === ' ')
				arrayOfChars.push(char);
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
	useEffect(init, [paraLengths, paraIndex]);

	// Run after every render
	useEffect(() => {
		const listener = ({ key }) => {
			if ((key >= "a" && key <= "z") || key === " ") {
				setCharactersTyped(charactersTyped + 1);
				if (characters[cursor] === key) {
					keypress();
					if (cursor === characters.length - 1) {
						const endTime = new Date().getTime();
						const time = endTime - startTime;

						onComplete({
							time:time/1000,
							characters:characters.length,
							words:paraLengths[paraIndex],
							cpm:correctCharCount*60000/time,
							accuracy:(correctCharCount/(correctCharCount+incorrectCharCount))*100
						});
					} else {
						states[cursor] = "typed-correctly";
						setCorrectCharCount(correctCharCount+1);
						setCursor(cursor + 1);
					}
				}
				else {
					error();
					states[cursor] = "typed-incorrectly";
					setIncorrectCharCount(incorrectCharCount+1);
					setStates([...states]);
				}
			}
		};
		window.addEventListener("keyup", listener);
		return () => window.removeEventListener("keyup", listener);
	});
	return (
		<>
			<div className="displayText">
				<p>
					{states.map((char, index) =>
						index === cursor ? (
							<span key={index} className={`${states[index]} cursor-border`}>
								{characters[index]}
							</span>
						) : (
							<span key={index} className={states[index]}>
								{characters[index]}
							</span>
						)
					)}
				</p>
			</div>
			<div className="text-tools">
				<div
					onClick={init}
					className="restart"
				>
					<i className="material-icons-round">replay</i>
				</div>
			</div>
		</>
	);
};

export default GenerateText;