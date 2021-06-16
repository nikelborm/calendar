import React from "react";

import { ColumnsContainer } from "./components/ColumnsContainer";
import { Loading } from "./components/Loading";
import { ErrorDuringEventsLoading } from "./components/ErrorDuringEventsLoading";

export class WorkArea extends React.Component {
	render() {
		const {
			MainContent,
			LoadingMessage,
			isEventsLoadingFinished,
			errorDuringEventsLoading,
			gridTemplateString,
		} = this.props;
		let accessoryСontent;
		if ( !isEventsLoadingFinished ) accessoryСontent = (
			<Loading>
				<LoadingMessage { ...this.props } />
			</Loading>
		);
		if ( errorDuringEventsLoading ) accessoryСontent = 
		<div>
			<ErrorDuringEventsLoading errorDuringEventsLoading = { errorDuringEventsLoading } />
		</div>;
		return (
			<ColumnsContainer
				gridTemplateString={ gridTemplateString }
			>
				{ accessoryСontent || <MainContent { ...this.props } /> }
			</ColumnsContainer>
		);
	}
}
