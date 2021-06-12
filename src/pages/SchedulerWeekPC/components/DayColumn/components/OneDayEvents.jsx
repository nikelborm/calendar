import React from "react";
import styled from "styled-components";

import { EventCard } from "./EventCard";

const EventsContainer = styled.div`
	grid-row-start: 2;
	position: relative;
	background: #efefef;
	/* 1 - hours marks column */
	grid-column-start: ${ props => props.columnNumber };
`;
EventsContainer.displayName = "EventsContainer";

export class OneDayEvents extends React.Component {
	render() {
		return (
			<EventsContainer columnNumber={ this.props.columnNumber }>
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
			</EventsContainer>
		);
	}
}
