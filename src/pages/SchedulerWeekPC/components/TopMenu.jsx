import React from "react";
import styled from "styled-components";
import { SwitchPresentationDropDown } from "./SwitchPresentationDropDown";
import { ReactComponent as ArrowRight } from "./ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "./ArrowLeft.svg";

const MenuWrapper = styled.div`
	grid-area: 1 / 1 / 1 / 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 65px;
    min-width: 500px;
	padding: 0 20px;
`;
MenuWrapper.displayName = "MenuWrapper";

const TodayButton = styled.button`
	height: 38px;
    width: 150px;
	background-color:#FF2800;
	border: none;
	border-radius: 6px;
	color: #FFFFFF;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 20px;
`;
TodayButton.displayName = "TodayButton";

const ArrowSwitchButtons = styled.div`
	display: flex;
	border: none;
	border-radius: 6px;
	overflow: hidden;
`;
ArrowSwitchButtons.displayName = "ArrowSwitchButtons";

const ArrowButton = styled.button`
	height: 40px;
    width: 40px;
	background-color:#000000;
	border: none;
	color: #ffffff;
	padding: 0;
`;
ArrowButton.displayName = "ArrowButton";

export class TopMenu extends React.PureComponent {
	render() {
		return (
			<MenuWrapper>
				<TodayButton onClick={ this.props.goTodayOnClick }>
					Сегодня
				</TodayButton>
				<ArrowSwitchButtons>
					<ArrowButton onClick={ this.props.previousSlideOnClick }>
						<ArrowLeft/>
					</ArrowButton>
					<ArrowButton onClick={ this.props.nextSlideOnClick }>
						<ArrowRight/>
					</ArrowButton>
				</ArrowSwitchButtons>
				{/* Тут компонент будет рендерить много react-router`овских Link`ов
				и кликая на них можно будет перемещаться на другие страницы */}
				<SwitchPresentationDropDown/>
			</MenuWrapper>
		);
	}
}
