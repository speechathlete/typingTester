import "./GenerateText.css";
import React, { useEffect, useState } from "react";
import faker from "faker";

let GenerateText = ({ paraLengths, paraIndex }) => {
	const [states, setStates] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [cursor, setCursor] = useState(0);

	// Run after first render
	useEffect(() => {
		const string = faker.random.words(paraLengths[paraIndex]);
		const para = string.split('-').join(" ").toLowerCase();
		const array = para.split("");
		setCharacters(array);
		const states = new Array(array.length);
		for (let i = 0; i < array.length; i++)
			states[i] = "not-typed";
		setStates(states);
		setCursor(0);
	}, [paraLengths, paraIndex]);

	// Run after every render
	useEffect(() => {
		const listener = ({ key }) => {
			if ((key >= 'a' && key <= 'z') || key === ' ') {
				if (characters[cursor] === key) {
					states[cursor] = "typed-correctly";
					setCursor(cursor + 1);
				} else {
					states[cursor] = "typed-incorrectly";
					setStates([...states]);
				}
			}
		};
		window.addEventListener('keyup', listener);
		return () => window.removeEventListener('keyup', listener);
	});
	return (
		<>
			<div className="displayText">
				<p>{states.map((char, index) => (index === cursor
					? <span key={index} className={states[index]}>{characters[index]}</span>
					: <span key={index} className={states[index]}>{characters[index]}</span>
				))}</p>
			</div>
			<div className="text-tools">
				<i className="material-icons-round">replay</i>
			</div>
		</>
	);
};

export default GenerateText;