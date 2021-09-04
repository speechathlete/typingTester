import React from "react";
import GenerateText from "./GenerateText";
import ClickPage from "./ClickPage";
import DonePage from "./DonePage";

class Typer extends React.Component {

	state = {
		focus: false,
		data: null
	};

	componentDidMount() {
		window.addEventListener('blur', this.onBlur);
	}

	componentWillUnmount() {
		window.removeEventListener('blur', this.onBlur);
	}

	onBlur = () => this.setState({ focus: false });

	onComplete = data => this.setState({ data });

	onPlay = () => this.setState({ focus: true });

	onRestart = () => this.setState({ data: null });

	render() {
		if (this.state.data != null)
			return <DonePage {...this.state.data} onRestart={this.onRestart} />;
		else if (this.state.focus)
			return <GenerateText {...this.props} onComplete={this.onComplete} />;
		else
			return <ClickPage onPlay={this.onPlay} />;
	}
}

export default Typer;