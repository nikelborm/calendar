import React from "react";
import styled from "styled-components";

// export class Header extends React.Component {
// 	render() {
// 		return (
// 			<div>

// 			</div>
// 		);
// 	}
// }
export const DayHeader = styled.div`
	font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
	font-size: 18px;
	background-color: #efefef;
	grid-row-start: 1;
	place-self: center center;
	/* 1 - hours marks column */
	grid-column-start: ${ props => ( props.dayOfWeek || 7 ) + 1 };
`;
DayHeader.displayName = "DayHeader";
