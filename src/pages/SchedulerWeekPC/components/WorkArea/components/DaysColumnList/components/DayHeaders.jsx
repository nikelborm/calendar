import eachDayOfInterval from "date-fns/eachDayOfInterval";
import React from "react";

import { DayHeader } from "./DayHeader";

export class DayHeaders extends React.PureComponent {
	render() {
		return <> {
			eachDayOfInterval( this.props ).map( dayDate => (
				<DayHeader
					key={ dayDate.getDay() }
					dayDate={ dayDate }
					children={ dayDate.toLocaleDateString( "ru", {weekday:'short', day:'2-digit', month:'long'}) }
					dayOfWeek={ dayDate.getDay() }
				/>
			) )
		} </>;
	}
}
