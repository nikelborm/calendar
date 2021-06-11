import React from "react";
import styled from "styled-components";


const NotificationCard = styled.div`
	position: relative;
	margin: 15px 5px 3px 5px;
	height: ${ props => props.height * 100 + "%" };
	background: #FF2800;
	width: auto;
	padding: 5px;
	border-radius: 10px;
	font-family: 'IBM Plex Sans', sans-serif;
	font-size: 13px;
	font-weight: 600;
`;

NotificationCard.displayName = "NotificationCard";

const HeaderNotification = styled.div`
	text-align: center;
	margin-bottom: 5px;
`;

HeaderNotification.displayName = "HeaderNotification";

const TextOfNotification = styled.div`
	margin-left: 5%;
	margin-bottom: 2px;
`;

TextOfNotification.displayName = "TextOfNotification";

// dateBegin.getDay() + " "
// + dateBegin.getMonth() + ", "
// + new Intl.DateTimeFormat('ru-RU', options).format(dateBegin).toString() + ", "
// + dateBegin.getHours() + ":" + dateBegin.getMinutes() + " - "
// + dateEnd.getHours() + ":" + dateEnd.getMinutes()
export class Notification extends React.Component {
	render() {

		const dateBegin = new Date(this.props.eventDateBegin);
		const dateEnd = new Date(this.props.eventDateEnd);
		return (
			<NotificationCard>
				<HeaderNotification>{this.props.notificationType}</HeaderNotification>
				<TextOfNotification>{this.props.eventName}</TextOfNotification>
				<TextOfNotification>{
					dateBegin.toLocaleDateString('ru',{weekday:'long', day:'2-digit', month:'long'}) +
					", " + dateBegin.getHours() + ":" + dateBegin.getMinutes() +
					" - " + dateEnd.getHours() + ":" + dateEnd.getMinutes()
				}
				</TextOfNotification>
				<TextOfNotification>{this.props.eventClassroom}</TextOfNotification>
			</NotificationCard>
		);
	}
}
