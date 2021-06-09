import styled from "styled-components";

const ColumnsContainer = styled.div`
	height: 700px;
	width: 1700px;
	background: linear-gradient(blue, red);
	display: grid;
	grid-template-columns: repeat( 7, 1fr ); // amount of days to show
	grid-template-rows: 40px 1fr;
`;
ColumnsContainer.displayName = "ColumnsContainer";

export { ColumnsContainer };
