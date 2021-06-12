import React from "react";
import styled from "styled-components";

const Line = styled.div`

justify-content:space-between;
grid-area: 2 / 2 / -1 / -1;
`;

export class HourLines extends React.Component {
	 
	render() {
		const lines = [<hr/>, <hr/>, <hr/>,<hr/>, <hr/>, <hr/>,<hr/>, <hr/>, <hr/>];
		// for (let idx = 0; idx < 15; idx++){
		// 	lines.push(<div>{idx}</div>);
		// }
		return (
			<Line>
				{lines}
				{/* { this.hours.map( itemLines =>
					<span key={ itemLines }>
						{ itemLines }
					</span>
				) } */}
			</Line>
		);
	}
}
