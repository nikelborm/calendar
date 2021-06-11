import React from "react";
import { Header } from "./components/Header";
import { MarkAllAsReadButton } from "./components/MarkAllAsReadButton";
import { Notification } from "./components/Notification";
import { NotificationsArea } from "./components/NotificationsArea";
import { ScrollableNotificationList } from "./components/ScrollableNotificationList";

import { Service } from "../../../../../../ServicePlaceholder";

import styled from 'styled-components';

const NotificationContainer = styled.div`
  position: relative;
  top: 20px;
  border: 2px solid #000000;
  width: 300px;
  height: 475px;
  border-radius: 2px;
`;

NotificationContainer.displayName = "NotificationContainer";

export class EventUpdatesNotifications extends React.Component {
	render() {
		const service = Service.getNotification().notifications;
		return (
			<NotificationContainer>
				<Header/>
				{Service.getNotification().notifications.map((item, index) =>
						<Notification
							notificationType={Service.getNotification().notifications[index].notificationType}
							eventName={Service.getNotification().notifications[index].EventName}
							eventDateBegin={Service.getNotification().notifications[index].eventDateBegin}
							eventDateEnd={Service.getNotification().notifications[index].eventDateEnd}
							eventClassroom={Service.getNotification().notifications[index].eventClassroom}
						/>
					)}
				<MarkAllAsReadButton/>
				<NotificationsArea/>
				<ScrollableNotificationList/>
			</NotificationContainer>
		);
	}
}

