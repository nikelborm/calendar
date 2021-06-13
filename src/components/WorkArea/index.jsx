import React from "react";

import { ColumnsContainer } from "./components/ColumnsContainer";
import { ReportWrapper } from "./components/ReportWrapper";

export class WorkArea extends React.Component {
	render() {
		const {
			renderWhenSuccessfullyLoaded,
			isEventsLoadingFinished,
			errorDuringEventsLoading,
			gridTemplateString,
		} = this.props;
		let report;
		if ( !isEventsLoadingFinished ) report = "Пожалуйста подождите, идёт загрузка данных";
		if ( errorDuringEventsLoading ) report = <p>
			<p>Возник взлом жопы, пожалуйста простите нас</p>
			<p>Error name: { errorDuringEventsLoading.name }</p>
			<p>Error message: { errorDuringEventsLoading.message }</p>
		</p>;
		return (
			<ColumnsContainer
				gridTemplateString={ gridTemplateString }
			>
				{ report
					? <ReportWrapper children={ report }/>
					: renderWhenSuccessfullyLoaded()
				}
			</ColumnsContainer>
		);
	}
}
