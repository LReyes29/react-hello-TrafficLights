import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			//your state properties here
			red: true,
			yellow: false,
			green: false
		};
	}

	selectedLight(a, b, c) {
		this.setState({
			red: a,
			yellow: b,
			green: c
		});
	}

	render() {
		return (
			<>
				<div className="support" />
				<div className="container">
					<div
						className={
							"red-light " +
							(this.state.red == true ? "selected" : "")
						}
						onClick={() => this.selectedLight(true, false, false)}
					/>
					<div
						className={
							"yellow-light " +
							(this.state.yellow == true ? "selected" : "")
						}
						onClick={() => this.selectedLight(false, true, false)}
					/>
					<div
						className={
							"green-light " +
							(this.state.green == true ? "selected" : "")
						}
						onClick={() => this.selectedLight(false, false, true)}
					/>
				</div>
			</>
		);
	}
}
