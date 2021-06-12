import React from "react";

import { Service } from "../../../../../../ServicePlaceholder";

import { Header } from "./components/Header";
import { MarkAllAsReadButton } from "./components/MarkAllAsReadButton";
import { Notification } from "./components/Notification";
import { EventUpdatesNotificationsWrapper } from "./components/EventUpdatesNotificationsWrapper";
import { ScrollableArea } from "./components/ScrollableArea";

export class EventUpdatesNotifications extends React.Component {
	render() {
		const { notifications } = Service.getNotification();
		return (
			<EventUpdatesNotificationsWrapper>
				<Header/>
				<ScrollableArea>
					{ notifications.map( info =>
						<Notification
							{ ...info }
						/>
					) }
				</ScrollableArea>
				<MarkAllAsReadButton/>
			</EventUpdatesNotificationsWrapper>
		);
	}
}

