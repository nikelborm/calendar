import eachDayOfInterval from "date-fns/eachDayOfInterval";
import React from "react";

import { Header } from "./Header";

export class Headers extends React.PureComponent {
	render() {
		return <> {
			eachDayOfInterval( this.props ).map( dayDate => (
				<Header
					key={ dayDate.getDay() }
					dayDate={ dayDate }
					children={ dayDate.toLocaleDateString( "ru" ) }
					dayOfWeek={ dayDate.getDay() }
				/>
			) )
		} </>;
	}
}
