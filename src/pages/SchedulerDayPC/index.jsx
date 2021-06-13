import React from "react";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import add from "date-fns/add";
import sub from "date-fns/sub";

import { Service } from "../../ServicePlaceholder";
import { TopMenu } from "../../components/TopMenu";
import { RightSidebar } from "../../components/RightSidebar";
import { PageContentContainer } from "../../components/PageContentContainer";
import { WorkArea } from "./WorkArea";
import { DayColumnList } from "../../components/DayColumnList";

export class SchedulerDayPCPageContent extends React.Component {
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
    goToDateAndLoadItsWeekEvents = date => this.shiftDateAndLoadItsEvents(
        () => startOfWeek( date, { weekStartsOn: 1 } ),
        () => endOfWeek( date, { weekStartsOn: 1 } )
    );
    goToCurrentWeekAndLoadItsEvents = () => this.goToDateAndLoadItsWeekEvents( new Date() );
	componentDidMount() {
		this.loadEventsForAWeekGroupedByDay(
            this.state.dateStartingTheWeek,
            this.state.dateFinishingTheWeek
        );
	}
    componentWillUnmount() {
        this.eventsLoadingController.abort();
    }
    render() {
        const {
            eventsInSelectedWeekGroupedByDay,
            isEventsLoadingFinished,
            errorDuringEventsLoading,
            dateStartingTheWeek,
            dateFinishingTheWeek,
        } = this.state;
        return (
            <PageContentContainer>
                <TopMenu
                    previousSlideOnClick={ this.goToPreviousWeekAndLoadItsEvents }
                    nextSlideOnClick={ this.goToNextWeekAndLoadItsEvents }
                    goTodayOnClick={ this.goToCurrentWeekAndLoadItsEvents }
                />
                <WorkArea
                    isEventsLoadingFinished={ isEventsLoadingFinished }
                    errorDuringEventsLoading={ errorDuringEventsLoading }
                    // errorDuringEventsLoading={ new Error( "АБОООБА" ) }
                    firstColumnDate={ dateStartingTheWeek }
                    lastColumnDate={ dateFinishingTheWeek }
                    renderWhenSuccessfullyLoaded={ () => (
                        <DayColumnList
                            firstColumnDate={ dateStartingTheWeek }
                            lastColumnDate={ dateFinishingTheWeek }
                            eventsGroupedByDay={ eventsInSelectedWeekGroupedByDay }
                        />
                    ) }
				/>
				{/* <EventInfoTip/> */}
                <RightSidebar
                    goToDateAndLoadItsWeekEvents={ this.goToDateAndLoadItsWeekEvents }
                />
            </PageContentContainer>
        );
    }
}
