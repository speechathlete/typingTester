import "./GenerateText.css";
import React, { useEffect, useState } from "react";
import faker from "faker";
import correctKey from '../sounds/keypress.mp3';
import errorKey from '../sounds/error.m4a';
import useSound from 'use-sound';

let GenerateText = ({ paraLengths, paraIndex }) => {
	const [keypress] = useSound(correctKey);
	const [error] = useSound(errorKey);
	const [states, setStates] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [cursor, setCursor] = useState(0);
	const init = () => {
		const string = faker.random.words(paraLengths[paraIndex]);
		const para = string.split("-").join(" ").toLowerCase();
		const array = para.split("");
		setCharacters(array);
		const states = new Array(array.length);
		states.fill("not-typed");
		setStates(states);
		setCursor(0);
	};

	// Run after first render
	useEffect(init, [paraLengths, paraIndex]);

	// Run after every render
	useEffect(() => {
		const listener = ({ key }) => {
			if ((key >= "a" && key <= "z") || key === " " || (key >= 0 && key <= 9)) {
				if (characters[cursor] === key) {
					keypress();
					if (cursor === characters.length - 1)
						init();
					else {
						states[cursor] = "typed-correctly";
						setCursor(cursor + 1);
					}
				}
				else {
					error();
					states[cursor] = "typed-incorrectly";
					// setCursor(cursor + 1); //if we want to keep the word as wrong 
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