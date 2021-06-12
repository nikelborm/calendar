import React from "react";

import { Service } from "../../../../../../ServicePlaceholder";

import { Header } from "./components/Header";
import { MarkAllAsReadButton } from "./components/MarkAllAsReadButton";
import { Notification } from "./components/Notification";
import { NotificationContainer } from "./components/NotificationContainer";
import { ScrollableArea } from "./components/ScrollableArea";

export class EventUpdatesNotifications extends React.Component {
	render() {
		const { notifications } = Service.getNotification();
		return (
			<NotificationContainer>
				<Header/>
				<ScrollableArea>
					{ notifications.map( info =>
						<Notification
							{ ...info }
						/>
					) }
				</ScrollableArea>
				<MarkAllAsReadButton/>
			</NotificationContainer>
		);
	}
}

