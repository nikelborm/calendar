import React from "react";
import { SwitchPresentationDropDown } from "./SwitchPresentationDropDown";

export class TopMenu extends React.PureComponent {
	render() {
		return (
			<div>
				<div>
					<button
						onClick={ this.props.previousSlideOnClick }
						children="<"
					/>
					<button
						onClick={ this.props.nextSlideOnClick }
						children=">"
					/>
				</div>
				<button onClick={ this.props.goTodayOnClick }>
					MOVE TODAY
				</button>
				{/* Тут компонент будет рендерить много react-router`овских Link`ов
				и кликая на них можно будет перемещаться на другие страницы */}
				<SwitchPresentationDropDown/>
			</div>
		);
	}
}
