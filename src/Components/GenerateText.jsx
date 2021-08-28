import faker from "faker";

let GenerateText = ({ paraLengths, paraIndex }) => {
	const string = faker.random.words(paraLengths[paraIndex]);
	const para = string.split('-').join(" ").toLowerCase();
	return (
		<>
			<div className="displayText">
				<p>{para}</p>
			</div>
			<div className="text-tools">
				<i className="material-icons-round">replay</i>
			</div>
		</>
	);
};

export default GenerateText;