import React from "react";

import styled from "styled-components";

const HeaderNotification = styled.div`
  position: relative;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  border-bottom: 1px solid #000000;
`;

export class Header extends React.Component {
	render() {
		return (
			<HeaderNotification>
				Уведомление
			</HeaderNotification>
		);
	}
}
