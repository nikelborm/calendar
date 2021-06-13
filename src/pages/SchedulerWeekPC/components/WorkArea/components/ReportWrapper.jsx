import styled from "styled-components";
import "./ReportWrapper.css";
import React from "react";

export const ReportContainer = styled.div`
	grid-area: 1 / 1 / -1 / -1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background: #EFEFEF;
`;
ReportContainer.displayName = "ReportContainer";

export class ReportWrapper extends React.PureComponent {
	render() {
		return (
			<ReportContainer>
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
				<div class="text">
					Идёт загрузка мероприятий с
					{ new Date( this.props.startWeek ).getDate() }.{ new Date( this.props.startWeek ).getMonth() }
					по
					{ new Date( this.props.finishWeek ).getDate() }.{ new Date( this.props.finishWeek ).getMonth() }
				</div>
			</ReportContainer>
		);
	}
}
