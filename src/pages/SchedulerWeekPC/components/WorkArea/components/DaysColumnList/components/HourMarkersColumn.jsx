import { render } from "react-dom";
import styled from "styled-components";
import React from 'react';

const HourMarkersBackground = styled.div`
	grid-row-start: 2;
	position: relative;
	background: linear-gradient(-90deg,lightgreen,lightgrey);
	grid-column-start: 1;
	
`;
const HourMarkers = styled.div`
	display: flex;
	flex-direction:column;
`;
const Hours =styled.div`
	margin-bottom: 29px;
`



export class HourMarkersColumn extends React.Component {
	render(){
		const hours = ["8:00", "9:00","10:00","11:00","12:00","13:00","14:00","15:00",
		"16:00","17:00","18:00","19:00","20:00","21:00",];

		return(
			<HourMarkersBackground>
				<HourMarkers>							
					{hours.map((itemHours) => 
					<Hours>
						{itemHours}
					</Hours>
					)}				
				</HourMarkers>
			</HourMarkersBackground>
		); 
	}
}
