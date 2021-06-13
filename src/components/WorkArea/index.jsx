import React from "react";

import { ColumnsContainer } from "./components/ColumnsContainer";
import { Loading } from "./components/Loading";

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
		if ( errorDuringEventsLoading ) accessoryСontent = <p>
			<p>Возник взлом жопы, пожалуйста простите нас</p>
			<p>Error name: { errorDuringEventsLoading.name }</p>
			<p>Error message: { errorDuringEventsLoading.message }</p>
		</p>;
		return (
			<ColumnsContainer
				gridTemplateString={ gridTemplateString }
			>
				{ accessoryСontent || <MainContent { ...this.props } /> }
			</ColumnsContainer>
		);
	}
}
