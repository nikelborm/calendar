import React from "react";
import styled from "styled-components";
import { amountOfHourMarkers } from "../timeConstants";

const LinesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	grid-area: 2 / 2 / -1 / -1;
	z-index: 2;
`;
LinesContainer.displayName = "LinesContainer";

const Line = styled.div`
	border: none;
	border-bottom: 1px solid #b4b4b4;
	width: 100%;
	height: 0px;
`;
Line.displayName = "Line";

export class HourLines extends React.PureComponent {
	lines = Array.from( { length: amountOfHourMarkers } ).map( ( h, i ) => <Line key={ i }/> );
	render() {
		return (
			<LinesContainer>
				{ this.lines }
			</LinesContainer>
		);
	}
}
