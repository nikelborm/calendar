import React from "react";
import styled from 'styled-components';

const LineContainer = styled.div`
	grid-area: 2 / 1 / -1 / -1;
	position: relative;
	z-index: 4;
`;
LineContainer.dispalayName = "LineContainer";

const Line = styled.div`
	position: absolute;
	border-top: 3px solid black;
	width: 100%;
	top: ${ props => props.linePosition * 100 + "%" };
`;
Line.dispalayName = "Line";

const DecorativeDot = styled.svg`
	position: absolute;
	left: 45px;
	top: calc(${ props => props.linePosition * 100 + "%" } - 8px);
`;

export class CurrentMomentRedLine extends React.Component {
	state = {
		time: new Date(),
	};
	componentDidMount() {
		this.intervalID = setInterval( () => this.tick(), 60000 );
	}
	componentWillUnmount() {
		clearInterval( this.intervalID );
	}
	tick = () => {
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
			<LineContainer>
				<DecorativeDot
					linePosition={ ratioOfEventAndColumnHeights }
				>
					<circle cx="10" cy="10" r="7" stroke="black"fill="black" />
				</DecorativeDot>
				<Line
					linePosition={ ratioOfEventAndColumnHeights }
				/>
			</LineContainer>
		);
	}
}
