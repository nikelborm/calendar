import styled from "styled-components";

const ColumnsContainer = styled.div`
	height: 700px;
	width: 1700px;
	background: #efefef;
	display: grid;
	grid-template-columns: 50px repeat( 7, 1fr ); // 7 - amount of days to show
	grid-template-rows: 40px 1fr;
`;
ColumnsContainer.displayName = "ColumnsContainer";

export { ColumnsContainer };
