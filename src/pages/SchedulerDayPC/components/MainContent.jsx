import React from "react";
import { DayColumn } from "../../../components/DayColumn";
import { CurrentMomentRedLine } from "../../../components/DayColumnList/components/CurrentMomentRedLine";
import { HourLines } from "../../../components/DayColumnList/components/HourLines";
import { HourMarkersColumn } from "../../../components/DayColumnList/components/HourMarkersColumn";
import { DayPreview } from "./DayPreviewPlaceholder";

export function MainContent({ dayDate, eventsInSelectedDay }) {
    return (
        <>
            <CurrentMomentRedLine />
            <HourLines />
            <HourMarkersColumn />
            <DayColumn
                dayDate={dayDate}
                columnNumber={2}
                events={eventsInSelectedDay} />
            <DayPreview />
        </>
    );
}
