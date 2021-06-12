import React from "react";

import { DayHeaders } from "./components/DayHeaders";
import { EventList } from "./components/EventList";
import { ColumnsContainer } from "./components/ColumnsContainer";
import { ReportWrapper } from "./components/ReportWrapper";
import { HourMarkersColumn } from "./components/HourMarkersColumn";
import { CurrentMomentRedLine } from "./components/CurrentMomentRedLine";
import { HourLines } from "./components/HourLines";

export class DaysColumnList extends React.Component {
	render() {
		const {
			eventsGroupedByDay,
			isEventsLoadingFinished,
			errorDuringEventsLoading,
			dateStartingTheWeek,
			dateFinishingTheWeek,
		} = this.props;
		// errorDuringEventsLoading = new Error();
		let report;
		if ( !isEventsLoadingFinished ) report = "Пожалуйста подождите, идёт загрузка данных";
		if ( errorDuringEventsLoading ) report = <p>
			<p>Возник взлом жопы, пожалуйста простите нас</p>
			<p>Error name: { errorDuringEventsLoading.name }</p>
			<p>Error message: { errorDuringEventsLoading.message }</p>
		</p>;
		return (
			<ColumnsContainer>
				{ report
					? <ReportWrapper children={ report }/>
					: <>
						<HourMarkersColumn/>
						<CurrentMomentRedLine/>
						<HourLines/>
						<DayHeaders
							start={ dateStartingTheWeek }
							end={ dateFinishingTheWeek }
						/>
						<EventList
							events={ eventsGroupedByDay }
						/>
					</>
				}
			</ColumnsContainer>
		);
	}
}
