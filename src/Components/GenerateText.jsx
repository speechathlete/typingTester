import faker from "faker";

let GenerateText = ({ count = 10 }) => {
	let para = faker.random.words(count).split('-').join(" ").toLowerCase();
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
