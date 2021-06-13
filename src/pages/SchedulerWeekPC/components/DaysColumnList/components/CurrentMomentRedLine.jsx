import React from "react";

import styled from 'styled-components';


const Line = styled.div`
	position: absolute;
	width: 100%;
	top: ${props => (props.linePosition * 100 + "%")};
	
`;
Line.dispalayName = "Line";

const BlackLine = styled.div`
	position: absolute;
	border-top: 3px solid black;
	width: 100%;
	top: 8px;
	
	
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

		const hourOfColumnBottom = 21;
		const hourOfColumnTop = 8;
		const minutesInEventsColumn = ( hourOfColumnBottom - hourOfColumnTop ) * 60;

		const dateHours = new Date(this.state.time).getHours();
		const dateMinutes = new Date(this.state.time).getMinutes();

		const eventMarginTopInMinutes = (dateHours - hourOfColumnTop ) * 60 + dateMinutes;
		const ratioOfEventAndColumnHeights = eventMarginTopInMinutes  / minutesInEventsColumn;

		return (
			<Line linePosition={ratioOfEventAndColumnHeights}>
				<BlackDot>
					<svg height="100" width="100">
					<circle cx="55" cy="10" r="6" stroke="black" stroke-width="1" fill="black" />
					</svg>
				</BlackDot>
				<BlackLine></BlackLine>
			</Line>
		);
	}
}
