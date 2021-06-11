import React from "react";
import styled from "styled-components";


const NotificationCard = styled.div`
	position: relative;
	margin-bottom: 10px;
`;

const Header = styled.div`
	
`;

const Name = styled.div`
	
`;

const EventDate = styled.div`
	
`;

const Classroom = styled.div`
	
`;
// dateBegin.getDay() + " "
// + dateBegin.getMonth() + ", "
// + new Intl.DateTimeFormat("ru-RU", options).format(dateBegin).toString() + ", "
// + dateBegin.getHours() + ":" + dateBegin.getMinutes() + " - "
// + dateEnd.getHours() + ":" + dateEnd.getMinutes()
export class Notification extends React.Component {
	render() {

		const dateBegin = new Date(this.props.eventDateBegin);
		const dateEnd = new Date(this.props.eventDateEnd);
		return (
			<NotificationCard>
				<Header>{this.props.notificationType}</Header>
				<Name>{this.props.eventName}</Name>
				<EventDate>{
					dateBegin.toLocaleDateString("ru",{weekday:"long", day:"2-digit", month:"long"}) +
					", " + dateBegin.getHours() + ":" + dateBegin.getMinutes() +
					" - " + dateEnd.getHours() + ":" + dateEnd.getMinutes()
				}
				</EventDate>
				<Classroom>{this.props.eventClassroom}</Classroom>
			</NotificationCard>
		);
	}
}
