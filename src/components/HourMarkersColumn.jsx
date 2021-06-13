import styled from "styled-components";
import React from "react";
import { amountOfHourMarkers, hourOfColumnTop } from "../timeConstants";

const MarkersContainer = styled.div`
	grid-row-start: 2;
	grid-column-start: 1;
	position: relative;
	top: -10px;
	background: #efefef;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	& span {
		height:1px;
	}
`;
MarkersContainer.displayName = "MarkersContainer";

export class HourMarkersColumn extends React.PureComponent {
	hours = Array.from( { length: amountOfHourMarkers } ).map( ( h, i ) => i + hourOfColumnTop + ":00" );
	render() {
		return (
			<MarkersContainer>
				{ this.hours.map( itemHours =>
					<span key={ itemHours }>
						{ itemHours }
					</span>
				) }
			</MarkersContainer>
		);
	}
}
