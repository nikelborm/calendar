import styled from "styled-components";

const ColumnsContainer = styled.div`
	background: #efefef;
	display: grid;
	grid-area: 2 / 1;
	grid-template-columns: 50px repeat( 7, 1fr ); // 7 - amount of days to show
	grid-template-rows: 40px 1fr;
`;
ColumnsContainer.displayName = "ColumnsContainer";

export { ColumnsContainer };
