import React from "react";

import { CardContent } from "./CardContent";
import { CardLine } from "./CardLine";

const pad = v => ( "" + v ).padStart( 2, "0" );

export class EventCard extends React.PureComponent {
    render() {
        const hourOfColumnBottom = 21;
        const hourOfColumnTop = 8;
        const minutesInEventsColumn = ( hourOfColumnBottom - hourOfColumnTop ) * 60;

        const dateBegin = new Date( this.props.dateBegin );
        const dateEnd = new Date( this.props.dateEnd );

        const eventMarginTopInMinutes = ( dateBegin.getHours() - hourOfColumnTop ) * 60 + dateBegin.getMinutes();
        const eventMarginBottomInMinutes = ( dateEnd.getHours() - hourOfColumnTop ) * 60 + dateEnd.getMinutes();

        const ratioOfEventAndColumnHeights = ( eventMarginBottomInMinutes - eventMarginTopInMinutes ) / minutesInEventsColumn;
        const ratioOfEventTopMarginAndColumnHeight = eventMarginTopInMinutes / minutesInEventsColumn;


        let justify = "space-around";
        let indent = 0;
        let indentTop = 0;

        if (ratioOfEventAndColumnHeights * 100 > 20) {
            justify = "flex-start";
            indent = 10;
            indentTop = 10;
        }
        console.log(ratioOfEventAndColumnHeights * 1000);

        return (
            <CardContent
                top={ ratioOfEventTopMarginAndColumnHeight }
                height={ ratioOfEventAndColumnHeights }
                justify={ justify }
            >
                <CardLine indent={ indent } indentTop={ indentTop }>
                    { this.props.name }
                </CardLine>
                <CardLine indent={ indent }>
                    { pad( dateBegin.getHours() ) }
                    :
                    { pad( dateBegin.getMinutes() ) }
                    { " - " }
                    { pad( dateEnd.getHours() ) }
                    :
                    { pad( dateEnd.getMinutes() ) }
                </CardLine>
                <CardLine indent={ indent }>
                    { this.props.classroom }
                </CardLine>
            </CardContent>
        );
    }
}

