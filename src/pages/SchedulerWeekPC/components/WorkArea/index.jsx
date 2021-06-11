import React from "react";
import { CurrentMomentRedLine } from "./components/CurrentMomentRedLine";
import { DaysColumnList } from "./components/DaysColumnList";
import { EventInfoTip } from "./components/EventInfoTip";
import { HourMarkersColumn } from "./components/HourMarkersColumn";
import styled from "styled-components";

const Area = styled.div`
		position: relative;
`;

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
			<Area>
				<HourMarkersColumn/>
				<CurrentMomentRedLine/>
				<DaysColumnList
					eventsGroupedByDay={ eventsGroupedByDay }
					isEventsLoadingFinished={ isEventsLoadingFinished }
					errorDuringEventsLoading={ errorDuringEventsLoading }
					dateStartingTheWeek={ dateStartingTheWeek }
					dateFinishingTheWeek={ dateFinishingTheWeek }
				/>
				<EventInfoTip/>
			</Area>
		);
	}
}
