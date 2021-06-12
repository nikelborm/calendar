import React, { Component } from "react";

import { DayHeader } from "./components/DayHeader";
import { OneDayEvents } from "./components/OneDayEvents";

export class DayColumn extends Component {
    render() {
        const {
            dayDate,
            columnNumber,
            events
        } = this.props;
        return (
            <>
                <DayHeader
                    columnNumber={ columnNumber }
                    children={ dayDate.toLocaleDateString(
                        "ru",
                        {
                            weekday: "short",
                            day: "2-digit",
                            month: "long"
                        }
                    ) }
                />
                <OneDayEvents
                    columnNumber={ columnNumber }
                    events={ events }
                />
            </>
        )
    }
}
