import { Button } from "@material-ui/core";

const Settings = ({
	setCapitalLetters,
	setPunctuations,
	setSounds,
	punctuations,
	sounds,
	capitalLetters,
}) => {
	return (
		<>
			<div className="type-of-para">
				<Button
					varient="contained"
					onClick={() => {
						setCapitalLetters(!capitalLetters);
						console.log("clicked", capitalLetters);
					}}
				>
					Enable capital letters.
				</Button>

				<Button
					onClick={() => {
						setPunctuations(!punctuations);
					}}
				>
					Enable punctuation characters.
				</Button>
				<Button
					onClick={() => {
						setSounds(!sounds);
					}}
				>
					Enable Sounds
				</Button>
			</div>
			<div className="themes">
				<h1>THEMES</h1>
			</div>
		</>
	);
};

export default Settings;
