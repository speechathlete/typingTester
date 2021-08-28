import "./Navbar.css";
import React from 'react';

let Navbar = ({ paraLengths, paraIndex, setParaIndex }) => (
	<div className="Navbar">
		<div className="Heading">TypeTester</div>
		<div className="tools">
			<div className="home"><i className="material-icons-round"> home </i></div>
			<div className="setting-btn"><i className="material-icons-round"> settings </i></div>
			<div className="account"><i className="material-icons-round"> person </i></div>
		</div>
		<div className="count-of-words">
			<h4>Words</h4>
			<div className="set-count">
				{paraLengths.map((length, index) =>
					index == paraIndex
						? <div className="word-count active-count">{length}</div>
						: <div className="word-count" onClick={() => setParaIndex(index)}>{length}</div>
				)}
				<div className="word-count"><i className="material-icons-round"> handyman </i></div>
			</div>
		</div>
	</div>
);

export default Navbar;