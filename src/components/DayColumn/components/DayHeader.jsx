import styled from "styled-components";

export const DayHeader = styled.div`
	font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
	font-size: 18px;
	background-color: #efefef;
	grid-row-start: 1;
	place-self: center center;
	/* 1 - hours marks column */
	grid-column-start: ${ props => props.columnNumber };
`;
DayHeader.displayName = "DayHeader";
