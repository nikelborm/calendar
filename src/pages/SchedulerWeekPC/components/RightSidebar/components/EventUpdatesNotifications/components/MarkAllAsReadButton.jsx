import React from "react";
import styled from "styled-components";

const MarkAllAsReadButtonText = styled.button`
	position: fixed;
	margin-top: 449px;
	width:300px;
	padding: 5px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 500;
	font-size: 15px;
	line-height: 16px;
	text-align: center;
	background:#ffffff;
	border: 2px solid #5F5F5F;
	border-style: solid none solid none;
	z-index: 999;
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
