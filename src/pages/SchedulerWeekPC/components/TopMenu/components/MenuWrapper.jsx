import styled from "styled-components";

export const MenuWrapper = styled.div`
	grid-area: 1 / 1 / 2 / 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 65px;
    min-width: 500px;
	padding: 0 20px;
	background-color: #000000;
`;
MenuWrapper.displayName = "MenuWrapper";
