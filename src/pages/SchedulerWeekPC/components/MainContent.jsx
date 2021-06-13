import React from "react";
import { DayColumnList } from "../../../components/DayColumnList";

export function MainContent({ dateStartingTheWeek, dateFinishingTheWeek, eventsInSelectedWeekGroupedByDay }) {
    return (
        <DayColumnList
            firstColumnDate={dateStartingTheWeek}
            lastColumnDate={dateFinishingTheWeek}
            eventsGroupedByDay={eventsInSelectedWeekGroupedByDay} />
    );
}
