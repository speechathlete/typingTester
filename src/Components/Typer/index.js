import React, { useState, useEffect } from "react";
import GenerateText from "./GenerateText";
import ClickPage from "./ClickPage";
import DonePage from "./DonePage";

const Typer = props => {
	const [focus, setFocus] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		const onBlur = () => setFocus(false);
		window.addEventListener('blur', onBlur);
		return () => window.removeEventListener('blur', onBlur);
	});

	if (data != null)
		return <DonePage {...data} onRestart={() => setData(null)} />;
	else if (focus)
		return <GenerateText {...props} onComplete={setData} />;
	else
		return <ClickPage onPlay={() => setFocus(true)} />;
}

export default Typer;