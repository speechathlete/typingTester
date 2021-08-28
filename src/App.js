import './App.css';
import React, { useState } from 'react';
import GenerateText from './Components/GenerateText';
import Navbar from './Components/Navbar';

let App = () => {
	const [paraIndex, setParaIndex] = useState(0);
	const state = { paraLengths: [10, 20, 30, 50], paraIndex, setParaIndex };
	return (
		<>
			<Navbar {...state} />
			<GenerateText {...state} />
		</>
	);
};

export default App;