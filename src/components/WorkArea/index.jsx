import React from "react";

import { ColumnsContainer } from "./components/ColumnsContainer";
import { Loading } from "./components/Loading";

export class WorkArea extends React.Component {
	render() {
		const {
			renderWhenSuccessfullyLoaded,
			renderLoadingMessage,
			isEventsLoadingFinished,
			errorDuringEventsLoading,
			gridTemplateString,
		} = this.props;
		let report;
		if ( !isEventsLoadingFinished ) report = <Loading>{ renderLoadingMessage() }</Loading>;
		if ( errorDuringEventsLoading ) report = <p>
			<p>Возник взлом жопы, пожалуйста простите нас</p>
			<p>Error name: { errorDuringEventsLoading.name }</p>
			<p>Error message: { errorDuringEventsLoading.message }</p>
		</p>;
		return (
			<ColumnsContainer
				gridTemplateString={ gridTemplateString }
			>
				{ report || renderWhenSuccessfullyLoaded() }
			</ColumnsContainer>
		);
	}
}
