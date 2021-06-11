import React from "react";
import styled from 'styled-components';

import { EventUpdatesNotifications } from "./components/EventUpdatesNotifications";
import { WeekChooser } from "./components/WeekChooser";

const Sidebar = styled.div`
	
`;

export class RightSidebar extends React.Component {
	render() {
		return (
			<Sidebar>
				Что-то тут точно будет<br/>
				dfdfsdfsdfsdf<br/>

				<WeekChooser/>
				<EventUpdatesNotifications/>
			</Sidebar>
		);
	}
}
