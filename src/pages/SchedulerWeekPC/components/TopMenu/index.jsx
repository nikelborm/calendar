import React from "react";

import { SwitchPresentationDropDown } from "./components/SwitchPresentationDropDown";
import { ReactComponent as ArrowRight } from "./components/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "./components/ArrowLeft.svg";
import { MenuWrapper } from "./components/MenuWrapper";
import { TodayButton } from "./components/TodayButton";
import { ArrowSwitchButtons } from "./components/ArrowSwitchButtons";
import { ArrowButton } from "./components/ArrowButton";

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
