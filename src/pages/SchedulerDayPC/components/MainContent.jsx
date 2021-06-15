import React from "react";

import { HourMarkersColumn } from "../../../components/HourMarkersColumn";
import { CurrentMomentRedLine } from "../../../components/CurrentMomentRedLine";
import { HourLines } from "../../../components/HourLines";
import { DayColumn } from "../../../components/DayColumn";
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
            <DayPreview/>
        </>
    );
}
