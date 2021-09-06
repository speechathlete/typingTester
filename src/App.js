import { BrowserRouter, Route, Switch } from "react-router-dom";
import AccountPage from "./Components/AccountPage";
import Settings from './Components/Settings'
import './App.css';
import React, { useState } from 'react';
import Typer from './Components/Typer/';
import Navbar from './Components/Navbar';

let App = () => {
	const [paraIndex, setParaIndex] = useState(0);
	const state = { paraLengths: [20,30,50,70,100], paraIndex, setParaIndex };
	return (
		<BrowserRouter>
			<Navbar {...state} />
			<Switch>
				<Route path="/" exact>
					<Typer {...state} />
				</Route>
				<Route path="/settings" exact>
					<Settings />
				</Route>
				<Route path="/account" exact>
					<AccountPage />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;