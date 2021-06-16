import React, { Component } from "react";

import { DayHeader } from "./components/DayHeader";
import { DayEvents } from "./components/DayEvents";

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
                <DayEvents
                    columnNumber={ columnNumber }
                    events={ events }
                />
            </>
        )
    }
}
