import React from "react";
import add from "date-fns/add";
import sub from "date-fns/sub";
import startOfDay from "date-fns/startOfDay";

import { Service } from "../../ServicePlaceholder";
import { TopMenu } from "../../components/TopMenu";
import { RightSidebar } from "../../components/RightSidebar";
import { PageContentContainer } from "../../components/PageContentContainer";
import { WorkArea } from "../../components/WorkArea";
import { MainContent } from "./components/MainContent";
import { LoadingMessage } from "./components/LoadingMessage";

export class SchedulerDayPCPageContent extends React.Component {
    eventsLoadingController = new AbortController();
	state = {
		isEventsLoadingFinished: false,
        errorDuringEventsLoading: null,
        // want MapWithDatesOfDaysAndArraysOfItsEvents
		eventsInSelectedDay: null,
		idOfClickedEvent: "", // TODO: Подумать как организовать всплывающий тултип
        isAnEventExpanded: false,
        dayDate: startOfDay( new Date() ),
	}
    loadEventsForADay = async dayDate => {
        try {
            this.eventsLoadingController = new AbortController();
            const { events } = await Service.getEventsForADay(
                dayDate,
                this.eventsLoadingController.signal
            );
            this.setState( {
                isEventsLoadingFinished: true,
                eventsInSelectedDay: events
            } );
        } catch ( error ) {
            if ( error.name === "AbortError" ) return;
            this.setState( {
                isEventsLoadingFinished: true,
                errorDuringEventsLoading: error
            } );
        }
    };
    shiftDateAndLoadItsEvents = newDateBuilder => {
        this.eventsLoadingController.abort();
        this.setState( {
            isEventsLoadingFinished: false,
            errorDuringEventsLoading: null,
            eventsInSelectedDay: null,
        } );
        const dayDate = newDateBuilder( this.state.dayDate );
        this.setState( { dayDate } );
        this.loadEventsForADay( dayDate );
    };
    goToPreviousDayAndLoadItsEvents = () => this.shiftDateAndLoadItsEvents(
        date => sub( date, { days: 1 } )
    );
    goToNextDayAndLoadItsEvents = () => this.shiftDateAndLoadItsEvents(
        date => add( date, { days: 1 } )
    );
    goToDateAndLoadItsDayEvents = date => this.shiftDateAndLoadItsEvents(
        () => startOfDay( date )
    );
    goToCurrentDayAndLoadItsEvents = () => this.goToDateAndLoadItsDayEvents( new Date() );
	componentDidMount() {
		this.loadEventsForADay(
            this.state.dayDate
        );
	}
    componentWillUnmount() {
        this.eventsLoadingController.abort();
    }
    render() {
        const {
            eventsInSelectedDay,
            isEventsLoadingFinished,
            errorDuringEventsLoading,
            dayDate,
        } = this.state;
        return (
            <PageContentContainer>
                <TopMenu
                    previousSlideOnClick={ this.goToPreviousDayAndLoadItsEvents }
                    nextSlideOnClick={ this.goToNextDayAndLoadItsEvents }
                    goTodayOnClick={ this.goToCurrentDayAndLoadItsEvents }
                />
                <WorkArea
                    isEventsLoadingFinished={ isEventsLoadingFinished }
                    errorDuringEventsLoading={ errorDuringEventsLoading }
                    // errorDuringEventsLoading={ new Error( "АБОООБА" ) }
                    /* CurrentDayColumn, HourMarkersColumn, DayPreview */
                    gridTemplateString="40px 1fr / 50px 1fr 1fr"
                    dayDate={ dayDate }
                    eventsInSelectedDay={ eventsInSelectedDay }
                    LoadingMessage={ LoadingMessage }
                    MainContent={ MainContent }
				/>
				{/* <EventInfoTip/> */}
                <RightSidebar
                    goToDateAndLoadItsEvents={ this.goToDateAndLoadItsDayEvents }
                />
            </PageContentContainer>
        );
    }
}
