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
	return(
		<div className="Article" style={{height:'calc(100vh - 10rem)'}}>

		{(data) ?
		(
			<DonePage {...data}  onRestart={()=>{
				setData(null)
			}}/>
		):
		(
			focus?
			(<GenerateText {...props} onComplete={setData} />):
			(<ClickPage onPlay={() => setFocus(true)}/>)
		)}
		</div>
	);
}

export default Typer;