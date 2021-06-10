import React from "react";
import styled from "styled-components";
import { SwitchPresentationDropDown } from "./SwitchPresentationDropDown";
import { ReactComponent as ArrowRight } from "./ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "./ArrowLeft.svg";

const TodayButton = styled.button`
	--expand-button-height: 60px;
	--expand-button-width: 200px;
	height: var(--expand-button-height);
    width: var(--expand-button-width);
	position:relative;
	margin-left:7%;
	margin-top: 1%;
	background-color:#FF2800;
	border: none;
	border-radius:6px;
	color: #FFFFFF;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 30px;
`;

const ArrowSwitchButtonLeft = styled.div`
	height: var(--expand-arrowbutton-height);
    width: var(--expand-arrowbutton-width);
	background-color:#000000;
	border: none;
	color: #ffffff;
	margin-top: 8px;
`;

const ArrowSwitchButtonRight = styled.div`
	height: var(--expand-arrowbutton-height);
    width: var(--expand-arrowbutton-width);
	background-color:#000000;
	border: none;
	color: #ffffff;
	margin-top: 8px;
`;

const ArrowSwitchButtons = styled.button`
	--expand-arrowbutton-height: 40px;
	--expand-arrowbutton-width: 40px;
	display: flex;
	position: absolute;
	top: 2.5%;
	left: 25%;
	border: none;
	background-color:#000000;
`;

TodayButton.displayName = "TodayButton";
ArrowSwitchButtonRight.displayName = "ArrowSwitchButtonRight";
ArrowSwitchButtonLeft.displayName = "ArrowSwitchButtonLeft";
ArrowSwitchButtons.displayName = "ArrowSwitchButtons";

export class TopMenu extends React.PureComponent {
	render() {
		return (
			<div>
				<ArrowSwitchButtons>
					<ArrowSwitchButtonLeft onClick={ this.props.previousSlideOnClick }>
						<ArrowLeft/>
					</ArrowSwitchButtonLeft>
					<ArrowSwitchButtonRight onClick={ this.props.nextSlideOnClick }>
						<ArrowRight/>
					</ArrowSwitchButtonRight>
				</ArrowSwitchButtons>
				<TodayButton onClick={ this.props.goTodayOnClick }>
					Сегодня
				</TodayButton>
				{/* Тут компонент будет рендерить много react-router`овских Link`ов
				и кликая на них можно будет перемещаться на другие страницы */}
				<SwitchPresentationDropDown/>
			</div>
		);
	}
}
