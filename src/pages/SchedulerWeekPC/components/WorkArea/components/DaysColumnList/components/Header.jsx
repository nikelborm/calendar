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
const Header = styled.div`
	background-color: green;
	grid-row-start: 1;
	place-self: center center;
	grid-column-start: ${ props => props.dayOfWeek || 7 };
`;
Header.displayName = "Header";

export { Header };
