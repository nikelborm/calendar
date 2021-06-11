import React from 'react';

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";

export class WeekChooser extends React.Component {
	state = {
		date: new Date(),
	}

	onChange = date => this.props.shiftDateAndLoadItsEvents(
		() => startOfWeek( date, { weekStartsOn: 1 } ),
		() => endOfWeek( date, { weekStartsOn: 1 } )
	);

	render() {
		return (
			<div>
				<Calendar
					onChange={this.onChange}
					value={this.state.date}
				/>
			</div>
		);
	}
}
