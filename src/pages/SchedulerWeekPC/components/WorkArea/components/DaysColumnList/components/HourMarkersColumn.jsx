import styled from "styled-components";

const HourMarkersColumn = styled.div`
	grid-row-start: 2;
	position: relative;
	background: linear-gradient(-90deg,lightgreen,lightgrey);
	grid-column-start: 1;
`;
HourMarkersColumn.displayName = "HourMarkersColumn";

export { HourMarkersColumn };
