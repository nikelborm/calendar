import styled from "styled-components";

export const ColumnsContainer = styled.div`
	background: #efefef;
	display: grid;
	grid-area: 2 / 1 / 3 / 2;
	grid-template: ${ props => props.gridTemplateString };
`;
ColumnsContainer.displayName = "ColumnsContainer";
