import React from "react";
import styled from 'styled-components';

import {SwitchPresentationDropDown} from "./SwitchPresentationDropDown";

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
`;

const LeftPart = styled.div`
	display: flex;
	justify-content: flex-start;
		
`;

const NowDate = styled.div`
	
`;

export class TopMenu extends React.PureComponent {
	render() {
		return (
			<Menu>
				<LeftPart>
					<button onClick={this.props.goTodayOnClick}>
						MOVE TODAY
					</button>

					<NowDate>
						Июнь 2021
					</NowDate>
					<button
						onClick={this.props.previousSlideOnClick}
						children="<"
					/>
					<button
						onClick={this.props.nextSlideOnClick}
						children=">"
					/>
				</LeftPart>
				{/* Тут компонент будет рендерить много react-router`овских Link`ов
				и кликая на них можно будет перемещаться на другие страницы */}
				<SwitchPresentationDropDown/>
			</Menu>
		);
	}
}
