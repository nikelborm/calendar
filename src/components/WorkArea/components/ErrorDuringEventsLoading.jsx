import styled from "styled-components";
import React from "react";


export const ErrorContainer = styled.div`
	grid-area: 1 / 1 / -1 / -1;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	background: #EFEFEF;
`;

const Image = styled.div`
    width: 300px;
    border: none; 
`;

ErrorContainer.displayName = "ErrorContainer";

export class ErrorDuringEventsLoading extends React.PureComponent {
	render() {
		return (
			<ErrorContainer>				
					<Image>
						<img src="https://zbots.me/quan/f/250050.jpg"/>
					</Image>				
                    <p>
			            <p><h2>Возник взлом жопы, пожалуйста простите нас</h2></p>
			            <p>Попробуйте перезагрузить страницу</p>
			            <p>Error name: { this.props.errorDuringEventsLoading.name }</p>
			            <p>Error message: { this.props.errorDuringEventsLoading.message }</p>
		            </p>;
			</ErrorContainer>
		);
	}
}
