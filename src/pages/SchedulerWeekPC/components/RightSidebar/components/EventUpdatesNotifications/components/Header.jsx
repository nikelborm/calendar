import React from "react";

import styled from "styled-components";

const HeaderNotificationCard = styled.div`
	position: relative;
	font-size: 15px;
	line-height: 16px;
	text-align: center;
	border-bottom: 2px solid #000000;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 15px;
	font-weight: 600;
`;
HeaderNotificationCard.displayName = "HeaderNotificationCard";

export class Header extends React.Component {
	render() {
		return (
			<HeaderNotificationCard>
				Уведомление
			</HeaderNotificationCard>
		);
	}
}
