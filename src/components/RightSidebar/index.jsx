import React from "react";
import { EventUpdatesNotifications } from "./components/EventUpdatesNotifications";
import { WeekChooser } from "./components/WeekChooser";
import { SidebarContent } from "./components/SidebarContent";

export class RightSidebar extends React.Component {
	render() {
		return (
			<SidebarContent>
				<WeekChooser goToDateAndLoadItsWeekEvents={this.props.goToDateAndLoadItsWeekEvents}/>
				<EventUpdatesNotifications/>
			</SidebarContent>
		);
	}
}
