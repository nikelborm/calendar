import React from "react";

import styled from 'styled-components';


const Line = styled.div`
	position: absolute;
	top: ${props => (props.linePosition + "px")};
	left: 45px;
	z-index: 998;
`;
Line.dispalayName = "Line";

const BlackLine = styled.div`
	position: absolute;
	border-top: 3px solid black;
	width: 1520px;
	top: 8px;
	left: 5px;
	
`;
BlackLine.dispalayName = "BlackLine";

const BlackDot = styled.div`
	
`;
BlackDot.dispalayName = "BlackDot";


export class CurrentMomentRedLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: new Date(),
			windowHeight: "",
			windowWidth: ""
		};
	}

	componentDidMount() {
		this.intervalID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	tick() {
		this.setState({
			time: new Date(),
		});
	}

	render() {

		let nowTime = new Date(this.state.time).getHours() * 60 + new Date(this.state.time).getMinutes();
		let windowHeight = window.innerHeight;
		let windowWidth = window.innerWidth;
		const startPos = windowHeight;
		const endPos = windowHeight;

		let linePosition;
		if (nowTime > 480 && nowTime < 1260){
			let top = 95  + (nowTime - 480);
			linePosition = top * 1.03;
		}
		if (nowTime >= 1260){
			linePosition = endPos * 0.9;
		}
		if (nowTime <= 480){
			linePosition = startPos * 0.1;
		}

		console.log(nowTime);
		console.log(linePosition);
		return (
			<Line linePosition={linePosition}>
				<BlackDot>
					<svg height="100" width="100">
					<circle cx="10" cy="10" r="6" stroke="black" stroke-width="1" fill="black" />
					</svg>
				</BlackDot>
				<BlackLine></BlackLine>
			</Line>
		);
	}
}
