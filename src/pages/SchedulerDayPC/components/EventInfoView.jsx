import React from "react";
import styled from "styled-components";
import { Service } from "../../../ServicePlaceholder";
import {DayPreview} from "./DayPreviewPlaceholder";

const PreviewHeader = styled.div`
    font-size: 30px;
    text-align: center;
`;
const EventName = styled.div`
    font-size: 25px;
    margin: 20px auto 20px 15%;
`;

const EventTime = styled.div`
    font-size: 20px;
    margin: 20px auto 20px 15%;
`;

const EventClass = styled.div`
    font-size: 20px;
    margin: 20px auto 20px 15%;
`;

const EventDescription = styled.div`
    font-size: 20px;
    margin: 20px auto 20px 15%;
    max-width:600px;
`;

const EventTeacher = styled.div`
    font-size: 20px;
    margin: 20px auto 20px 15%;
`;


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
            <EventTeacher>{Service.getEventsInfoView().InfoView[0].eventTeacher}</EventTeacher>
            <EventDescription>{Service.getEventsInfoView().InfoView[0].eventDescription}</EventDescription>
        </DayPreview>
        )
    }
}