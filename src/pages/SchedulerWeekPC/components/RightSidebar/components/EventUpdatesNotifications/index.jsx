import React from "react";
import { Header } from "./components/Header";
import { MarkAllAsReadButton } from "./components/MarkAllAsReadButton";
import { Notification } from "./components/Notification";
import { NotificationsArea } from "./components/NotificationsArea";
import { ScrollableNotificationList } from "./components/ScrollableNotificationList";

export class EventUpdatesNotifications extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<MarkAllAsReadButton/>
				<Notification/>
				<NotificationsArea/>
				<ScrollableNotificationList/>
			</div>
		);
	}
}
