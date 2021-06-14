import React from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export class WeekChooser extends React.PureComponent {
	state = {
		date: new Date(),
	}

	render() {
		return (
			<div>
				<Calendar
					onChange={ this.props.goToDateAndLoadItsEvents }
					value={ this.state.date }
				/>
			</div>
		);
	}
}
