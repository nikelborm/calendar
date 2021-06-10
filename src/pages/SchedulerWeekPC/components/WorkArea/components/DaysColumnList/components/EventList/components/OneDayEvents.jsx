import React from "react";
import styled from "styled-components";

import { EventCard } from "./EventCard";

const OneDayEventList = styled.div`
	grid-row-start: 2;
	position: relative;
	background: linear-gradient(90deg,blanchedalmond,lightgrey);
	/* 1 - hours marks column */
	grid-column-start: ${ props => ( props.dayOfWeek || 7 ) + 1 };
`;
OneDayEventList.displayName = "OneDayEventList";

export class OneDaysEvents extends React.Component {
	render() {
		const dayOfWeek = new Date( this.props.dayDate ).getDay();
		return (
			<OneDayEventList dayOfWeek={ dayOfWeek }>
				{/* TODO: Сделать рендеринг этих временных полосочек */}
				{ this.props.events.map( item =>
					<EventCard
						key={ item.lessonDateBegin }
						name={ item.lessonName }
						classroom={ item.lessonClassroom }
						dateBegin={ item.lessonDateBegin }
						dateEnd={ item.lessonDateEnd }
					/>
				) }
			</OneDayEventList>
		);
	}
}
