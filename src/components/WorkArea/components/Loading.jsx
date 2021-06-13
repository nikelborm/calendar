import styled from "styled-components";
import React from "react";
import "./Loading.css";

export const LoadingContainer = styled.div`
	grid-area: 1 / 1 / -1 / -1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background: #EFEFEF;
`;
LoadingContainer.displayName = "LoadingContainer";

export class Loading extends React.PureComponent {
	render() {
		return (
			<LoadingContainer>
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
					{ this.props.children }
				</div>
			</LoadingContainer>
		);
	}
}
