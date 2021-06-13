import React from "react";
import { hourOfColumnTop, minutesInEventsColumn } from "../../../timeConstants";

import { CardContent } from "./CardContent";
import { CardLine, CardMainLine } from "./CardLine";

const pad = v => ( "" + v ).padStart( 2, "0" );

export class EventCard extends React.PureComponent {
    render() {
        // TODO: Добавить обработку ситуации когда-то всё таки как-то получилось такое мероприятие, которое больше 21:00
        const dateBegin = new Date( this.props.dateBegin );
        const dateEnd = new Date( this.props.dateEnd );

        const eventMarginTopInMinutes = ( dateBegin.getHours() - hourOfColumnTop ) * 60 + dateBegin.getMinutes();
        const eventMarginBottomInMinutes = ( dateEnd.getHours() - hourOfColumnTop ) * 60 + dateEnd.getMinutes();

        const ratioOfEventAndColumnHeights = ( eventMarginBottomInMinutes - eventMarginTopInMinutes ) / minutesInEventsColumn;
        const ratioOfEventTopMarginAndColumnHeight = eventMarginTopInMinutes / minutesInEventsColumn;

        let showEventClassroom = true;
        let showEventName = true;
        let showEventPeriod = true;

        let justify = "space-around";
        let indent = 0;
        let indentTop = 0;

        if ( ratioOfEventAndColumnHeights > 0.2 ) {
            justify = "flex-start";
            indent = 10;
            indentTop = 10;
        }
        if ( ratioOfEventAndColumnHeights < 0.1 ) {
            showEventPeriod = false;
        }
        if ( ratioOfEventAndColumnHeights < 0.05 ) {
            showEventClassroom = false;
        }

        return (
            <CardContent
                top={ ratioOfEventTopMarginAndColumnHeight }
                height={ ratioOfEventAndColumnHeights }
                justify={ justify }
            >
                <CardMainLine indent={ indent } indentTop={ indentTop } show={ showEventName }>
                    { this.props.name }
                </CardMainLine>
                <CardLine indent={ indent } show={ showEventPeriod }>
                    { pad( dateBegin.getHours() ) }
                    :
                    { pad( dateBegin.getMinutes() ) }
                    { " - " }
                    { pad( dateEnd.getHours() ) }
                    :
                    { pad( dateEnd.getMinutes() ) }
                </CardLine>
                <CardLine indent={ indent } show={ showEventClassroom }>
                    { this.props.classroom }
                </CardLine>
            </CardContent>
        );
    }
}

