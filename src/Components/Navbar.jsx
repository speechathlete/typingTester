import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ paraLengths, paraIndex, setParaIndex }) => {
	const history = useHistory();
	return (
		<div className="Navbar">
			<div className="Heading" onClick={() => history.push('/')}>
				TypeTester
			</div>
			<div className="tools">
				<div>
					<Link className="btn" to="/">
						<i className="material-icons-round"> home </i>
					</Link>
				</div>
				<div>
					<Link className="btn" to="/leaderboard">
						<i className="material-icons-round"> leaderboard </i>
					</Link>
				</div>
				<div>
					<Link className="btn" to="/account">
						<i className="material-icons-round"> person </i>
					</Link>
				</div>
				<div >
					<Link className="btn" to="/settings">
						<i className="material-icons-round"> settings </i>
					</Link>
				</div>
			</div>
			<div className="count-of-words">
				<h4>Words</h4>
				<div className="set-count">
					{paraLengths.map((length, index) =>
						index === paraIndex ? (
							<div className="word-count active-count" key={index}>
								{length}
							</div>
						) : (
							<div
								className="word-count"
								key={index}
								onClick={() => setParaIndex(index)}
							>
								{length}
							</div>
						)
					)}
				</div>
			</div>
		</div >
	);
};

export default Navbar;
