import React from "react";
import styled from "styled-components";

const MarkAllAsReadButtonText = styled.button`
	width:300px;
	padding: 5px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
	font-size: 15px;
	line-height: 16px;
	text-align: center;
	background:#efefef;
	border: 2px solid #5F5F5F;
	border-style: solid none solid none;
	cursor: pointer;
`;
MarkAllAsReadButtonText.displayName = "MarkAllAsReadButtonText";

export class MarkAllAsReadButton extends React.Component {
	render() {
		return (
			<MarkAllAsReadButtonText>
				Очистить уведомления
			</MarkAllAsReadButtonText>
		);
	}
}
