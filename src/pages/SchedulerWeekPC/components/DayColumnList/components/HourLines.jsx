import React from "react";
import styled from "styled-components";

const Line = styled.div`
	justify-content:space-between;
	display: flex;
	flex-direction: column;
	z-index: 1;
	position: relative;
	grid-area: 2 / 2 / -1 / -1;
	margin:0;
`;

export class HourLines extends React.Component {
	 
	render() {
		let lines = [];
		for (let i =1; i<=14; i++)
		lines.push(<hr/>);

		return (
			<Line>	
				{lines}
			</Line>
		);
	}
}
