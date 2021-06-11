import React from "react";
import styled from "styled-components";

const MarkAllAsReadButtonText = styled.button`
	position: relative;
	width:100%;
	padding: 5px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
	font-size: 15px;
	line-height: 16px;
	text-align: center;
`;

export class MarkAllAsReadButton extends React.Component {
	render() {
		return (
			<MarkAllAsReadButtonText>
				Очистить Уведомление
			</MarkAllAsReadButtonText>
		);
	}
}
