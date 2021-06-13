import styled from "styled-components";

export const ColumnsContainer = styled.div`
	background: #efefef;
	display: grid;
	grid-area: 2 / 1 / 3 / 2;
	grid-template-columns: 50px repeat( 7, 1fr ); // 7 - amount of days to show
	grid-template-rows: 40px 1fr;
	position: relative;
`;
ColumnsContainer.displayName = "ColumnsContainer";
