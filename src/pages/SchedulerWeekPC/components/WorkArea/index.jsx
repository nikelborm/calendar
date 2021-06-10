import React from "react";
import { DaysColumnList } from "./components/DaysColumnList";
import { EventInfoTip } from "./components/EventInfoTip";

export class WorkArea extends React.Component {
	render() {
		const {
			eventsGroupedByDay,
			isEventsLoadingFinished,
			errorDuringEventsLoading,
			dateStartingTheWeek,
			dateFinishingTheWeek,
		} = this.props;
		return (
			<div>
				<DaysColumnList
					eventsGroupedByDay={ eventsGroupedByDay }
					isEventsLoadingFinished={ isEventsLoadingFinished }
					errorDuringEventsLoading={ errorDuringEventsLoading }
					dateStartingTheWeek={ dateStartingTheWeek }
					dateFinishingTheWeek={ dateFinishingTheWeek }
				/>
				<EventInfoTip/>
			</div>
		);
	}
}
