import styled from "styled-components";
import "./ReportWarpper.css";
import React from "react";

export const Report = styled.div`
	grid-area: 1 / 1 / -1 / -1;
	display: grid;
	place-items: center;
	background: #EFEFEF;
`;

Report.displayName = "Report";

  export class ReportWrapper extends React.PureComponent {
	render() {
		
		return (
			<Report>
				
				<div class="windows8">
					<div class="wBall" id="wBall_1">
						<div class="wInnerBall"></div>
					</div>
					<div class="wBall" id="wBall_2">
						<div class="wInnerBall"></div>
					</div>
					<div class="wBall" id="wBall_3">
						<div class="wInnerBall"></div>
					</div>
					<div class="wBall" id="wBall_4">
						<div class="wInnerBall"></div>
					</div>
					<div class="wBall" id="wBall_5">
						<div class="wInnerBall"></div>
					</div>
					
				</div>

				<div class="text">Идёт загрузка мероприятий с {new Date(this.props.startWeek).getDate()}.{new Date(this.props.startWeek).getMonth()} по <no br/> 
				{new Date(this.props.finishWeek).getDate()}.{new Date(this.props.finishWeek).getMonth()}
				</div>
				
			</Report>
			
		);
	}
}

