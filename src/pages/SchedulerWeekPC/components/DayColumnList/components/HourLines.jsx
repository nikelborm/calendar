import React from "react";
import styled from "styled-components";

const Line = styled.div`
	grid-row-start: 1;
	grid-column-end:2;
	justify-content:space-between;
	display:flex;
`;

export class HourLines extends React.Component {
	 
	render() {
		let lines = [];
		for (let i =1; i<=15; i++)
		lines.push(<hr/>);

		return (
			<Line>	
				{lines}
			</Line>
		);
	}
}
