import React from "react";

import { OneDaysEvents } from "./components/OneDayEvents";

export class EventList extends React.PureComponent {
	render() {
		return <> {
			Object.entries( this.props.events ).map(
				( [ dayDate, eventsForThatDay ] ) => (
					<OneDaysEvents
						key={ dayDate }
						dayDate={ dayDate }
						events={ eventsForThatDay }
					/>
				)
			)
		} </>;
	}
}
