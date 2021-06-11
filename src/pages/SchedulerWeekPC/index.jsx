import React from "react";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import add from "date-fns/add";
import sub from "date-fns/sub";

import { WorkArea } from "./components/WorkArea";
import { TopMenu } from "./components/TopMenu";
import { RightSidebar } from "./components/RightSidebar";
import { Service } from "../../ServicePlaceholder";
import styled from "styled-components";

const PageContentWrapper = styled.div`
    display: grid;
    grid-template-rows: 65px 1fr 20px;
    grid-template-columns: 1fr 300px;
    height: 100%;
    width: 100%;
`;
PageContentWrapper.displayName = "PageContentWrapper";

export class SchedulerWeekPCPageContent extends React.Component {
    eventsLoadingController = new AbortController();
	state = {
		isEventsLoadingFinished: false,
        errorDuringEventsLoading: null,
        // want MapWithDatesOfDaysAndArraysOfItsEvents
		eventsInSelectedWeekGroupedByDay: null,
		idOfClickedEvent: "", // TODO: Подумать как организовать всплывающий тултип
        isAnEventExpanded: false,
        dateStartingTheWeek: startOfWeek( new Date(), { weekStartsOn: 1 } ),
        dateFinishingTheWeek: endOfWeek( new Date(), { weekStartsOn: 1 } ),
	}
    loadEventsForAWeekGroupedByDay = async (
        dateStartingTheWeek,
        dateFinishingTheWeek
    ) => {
        try {
            this.eventsLoadingController = new AbortController();
            const { events } = await Service.getEventsBetweenDatesGroupedByDay(
                dateStartingTheWeek,
                dateFinishingTheWeek,
                this.eventsLoadingController
            );
            this.setState( {
                isEventsLoadingFinished: true,
                eventsInSelectedWeekGroupedByDay: events
            } );
        } catch ( error ) {
            if ( error.name === "AbortError" ) return;
            this.setState( {
                isEventsLoadingFinished: true,
                errorDuringEventsLoading: error
            } );
        }
    };
    shiftDateAndLoadItsEvents = (
        newStartDateBuilder,
        newFinishDateBuilder = newStartDateBuilder
    ) => {
        this.eventsLoadingController.abort();
        this.setState( {
            isEventsLoadingFinished: false,
            errorDuringEventsLoading: null,
            eventsInSelectedWeekGroupedByDay: null,
        } );
        const dateStartingTheWeek = newStartDateBuilder( this.state.dateStartingTheWeek );
        const dateFinishingTheWeek = newFinishDateBuilder( this.state.dateFinishingTheWeek );
        this.setState( { dateStartingTheWeek, dateFinishingTheWeek } );
        this.loadEventsForAWeekGroupedByDay( dateStartingTheWeek, dateFinishingTheWeek );
    };
    goToPreviousWeekAndLoadItsEvents = () => this.shiftDateAndLoadItsEvents(
        date => sub( date, { weeks: 1 } )
    );
    goToNextWeekAndLoadItsEvents = () => this.shiftDateAndLoadItsEvents(
        date => add( date, { weeks: 1 } )
    );
    goToCurrentWeekAndLoadItsEvents = () => this.shiftDateAndLoadItsEvents(
        () => startOfWeek( new Date(), { weekStartsOn: 1 } ),
        () => endOfWeek( new Date(), { weekStartsOn: 1 } )
    );
	componentDidMount() {
		// TODO: Здесь надо как-то получать дату начала и конца текущей недели и передавать её в загрузчик
		this.loadEventsForAWeekGroupedByDay(
            this.state.dateStartingTheWeek,
            this.state.dateFinishingTheWeek
        );
	}
    componentWillUnmount() {
        this.eventsLoadingController.abort();
    }
    render() {
        return (
            <PageContentWrapper>
                <TopMenu
                    previousSlideOnClick={ this.goToPreviousWeekAndLoadItsEvents }
                    nextSlideOnClick={ this.goToNextWeekAndLoadItsEvents }
                    goTodayOnClick={ this.goToCurrentWeekAndLoadItsEvents }
                />
                <WorkArea
                    // userID={ this.props.match.params.userID }
                    eventsGroupedByDay={ this.state.eventsInSelectedWeekGroupedByDay }
                    isEventsLoadingFinished={ this.state.isEventsLoadingFinished }
                    errorDuringEventsLoading={ this.state.errorDuringEventsLoading }
                    dateStartingTheWeek={ this.state.dateStartingTheWeek }
                    dateFinishingTheWeek={ this.state.dateFinishingTheWeek }
                />
                <RightSidebar/>
            </PageContentWrapper>
        );
    }
}
