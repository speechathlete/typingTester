import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
  } from "react-router-dom";
import AccountPage from "./Components/AccountPage";
import Settings from './Components/Settings'
import './App.css';
import React, { useState } from 'react';
import GenerateText from './Components/GenerateText';
import Navbar from './Components/Navbar';

let App = () => {
	const [paraIndex, setParaIndex] = useState(0);
	const state = { paraLengths: [10, 20, 30, 50,100], paraIndex, setParaIndex };
	return (
		<Router>

		<>  

		
			<Navbar {...state} />
			<Switch>
				<Route path="/" exact>
					<GenerateText {...state} />
				</Route>
				<Route path="/settings" exact>
					<Settings/>
				</Route>
				<Route path="/account" exact>
					<AccountPage/>
				</Route>

			</Switch>
		</>
		</Router>
	);
};

export default App;