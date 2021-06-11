import React from "react";

import { Service } from "../../../../../../ServicePlaceholder";

import { Header } from "./components/Header";
import { MarkAllAsReadButton } from "./components/MarkAllAsReadButton";
import { Notification } from "./components/Notification";
import { NotificationsArea } from "./components/NotificationsArea";
import { ScrollableNotificationList } from "./components/ScrollableNotificationList";
import { NotificationContainer } from "./components/NotificationContainer";

export class EventUpdatesNotifications extends React.Component {
	render() {
		const { notifications } = Service.getNotification();
		return (
			<NotificationContainer>
				<Header/>
				<MarkAllAsReadButton/>
				{ notifications.map( info =>
					<Notification
						{ ...info }
					/>
				) }
				<NotificationsArea/>
				<ScrollableNotificationList/>
			</NotificationContainer>
		);
	}
}

