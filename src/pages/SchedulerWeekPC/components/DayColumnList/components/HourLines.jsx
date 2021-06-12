import React from "react";
import styled from "styled-components";

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
	border-bottom: 1px solid black;
	width: 100%;
	height: 0px;
`;
Line.displayName = "Line";

export class HourLines extends React.PureComponent {
	render() {
		let lines = [];
		for ( let i = 1; i <= 14; i++ )
			lines.push( <Line key={ i }/> );

		return (
			<LinesContainer>
				{ lines }
			</LinesContainer>
		);
	}
}
