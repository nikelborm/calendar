import React from "react";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import add from "date-fns/add";
import sub from "date-fns/sub";

import { Service } from "../../ServicePlaceholder";
import { TopMenu } from "../../components/TopMenu";
import { RightSidebar } from "../../components/RightSidebar";
import { PageContentContainer } from "../../components/PageContentContainer";
import { WorkArea } from "../../components/WorkArea";
import { LoadingMessage } from "./components/LoadingMessage";
import { MainContent } from "./components/MainContent";

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
            const { eventsGroupedByDay } = await Service.getEventsBetweenDatesGroupedByDay(
                dateStartingTheWeek,
                dateFinishingTheWeek,
                this.eventsLoadingController.signal
            );
            this.setState( {
                isEventsLoadingFinished: true,
                eventsInSelectedWeekGroupedByDay: eventsGroupedByDay
            } );
        } catch ( error ) {
            if ( error.name === "AbortError" ) return;
            this.setState( {
                isEventsLoadingFinished: true,
                errorDuringEventsLoading: error
            } );
        }
    };
    changeDateAndLoadItsEvents = (
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
    goToPreviousWeekAndLoadItsEvents = () => this.changeDateAndLoadItsEvents(
        date => sub( date, { weeks: 1 } )
    );
    goToNextWeekAndLoadItsEvents = () => this.changeDateAndLoadItsEvents(
        date => add( date, { weeks: 1 } )
    );
    goToDateAndLoadItsWeekEvents = date => this.changeDateAndLoadItsEvents(
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
            isEventsLoadingFinished,
            errorDuringEventsLoading,
            eventsInSelectedWeekGroupedByDay,
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
                    gridTemplateString="40px 1fr / 50px repeat( 7, 1fr )"
                    eventsInSelectedWeekGroupedByDay={ eventsInSelectedWeekGroupedByDay }
                    dateStartingTheWeek={ dateStartingTheWeek }
                    dateFinishingTheWeek={ dateFinishingTheWeek }
                    LoadingMessage={ LoadingMessage }
                    MainContent={ MainContent }
				/>
				{/* <EventInfoTip/> */}
                <RightSidebar
                    goToDateAndLoadItsEvents={ this.goToDateAndLoadItsWeekEvents }
                />
            </PageContentContainer>
        );
    }
}
