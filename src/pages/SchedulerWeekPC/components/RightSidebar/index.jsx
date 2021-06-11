import React from "react";
import { EventUpdatesNotifications } from "./components/EventUpdatesNotifications";
import { WeekChooser } from "./components/WeekChooser";

export class RightSidebar extends React.Component {
	render() {
		return (
			<div>
				<WeekChooser shiftDateAndLoadItsEvents={this.props.shiftDateAndLoadItsEvents}/>
				<EventUpdatesNotifications/>
			</div>
		);
	}
}
