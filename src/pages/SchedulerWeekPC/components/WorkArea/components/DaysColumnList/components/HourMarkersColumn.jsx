import styled from "styled-components";
import React from "react";

const HourMarkersBackground = styled.div`
	grid-row-start: 2;
	position: relative;
	/* background: #efefef; */
	grid-column-start: 1;
	border:1px solid red;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
HourMarkersBackground.displayName = "HourMarkersBackground";

export class HourMarkersColumn extends React.Component {
	hours = [ "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00" ];
	render() {

		return (
			<HourMarkersBackground>
				{ this.hours.map( itemHours =>
					<span>
						{ itemHours }
					</span>
				) }
			</HourMarkersBackground>
		);
	}
}
