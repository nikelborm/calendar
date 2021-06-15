import React from "react";
import styled from "styled-components";
import { Service } from "../../../ServicePlaceholder";
import {DayPreview} from "./DayPreviewPlaceholder";

const PreviewHeader = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
`;
const EventName = styled.div``;
const EventTime = styled.div``;
const EventClass = styled.div``;
const EventDescription = styled.div``;
const EventTeacher = styled.div``;

const pad = v => ( "" + v ).padStart( 2, "0" );

export class EventInfoView extends React.Component {
    render() {
        let dateBegin = new Date(Service.getEventsInfoView().InfoView[0].eventDateBegin);
        let dateEnd = new Date(Service.getEventsInfoView().InfoView[0].eventDateEnd);
        console.log(dateBegin);
        return(
        <DayPreview>
            <PreviewHeader>
                Предосмотр
            </PreviewHeader>
            <EventName>{Service.getEventsInfoView().InfoView[0].eventName}</EventName>
            <EventClass>{Service.getEventsInfoView().InfoView[0].eventClassroom}</EventClass>
            <EventTime>
                { pad( dateBegin.getHours() ) }
                :
                { pad( dateBegin.getMinutes() ) }
                { " - " }
                { pad( dateEnd.getHours() ) }
                :
                { pad( dateEnd.getMinutes() ) }
            </EventTime>
            <EventDescription>{Service.getEventsInfoView().InfoView[0].eventDescription}</EventDescription>
            <EventTeacher>{Service.getEventsInfoView().InfoView[0].eventTeacher}</EventTeacher>
        </DayPreview>
        )
    }
}