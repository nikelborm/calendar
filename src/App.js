import { Component, StrictMode } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import { SchedulerWeekPCPageContent } from "./pages/SchedulerWeekPC";
import { SchedulerDayPhonePageContent } from "./pages/SchedulerDayPhone";
import { SchedulerDayPCPageContent } from "./pages/SchedulerDayPC";
import { SchedulerWeekPhonePageContent } from "./pages/SchedulerWeekPhone";
import { EventFullscreenPhonePageContent } from "./pages/EventFullscreenPhone";

class App extends Component {
    render() {
        return (
            <StrictMode>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/weekPC/:userID"
                            component={ SchedulerWeekPCPageContent }
                        />
                        <Route
                            // не приоритетно
                            path="/monthPC/:userID"
                            component={ /* поменять */ SchedulerWeekPCPageContent }
                        />
                        <Route
                            // не приоритетно
                            path="/monthPhone/:userID"
                            component={ /* поменять */ SchedulerWeekPhonePageContent }
                        />
                        <Route
                            path="/dayPhone/:userID"
                            component={ SchedulerDayPhonePageContent }
                        />
                        <Route
                            path="/dayPC/:userID"
                            component={ SchedulerDayPCPageContent }
                        />
                        <Route
                            path="/weekPhone/:userID"
                            component={ SchedulerWeekPhonePageContent }
                        />
                        <Route
                            path="/phoneEvent/:userID"
                            component={ EventFullscreenPhonePageContent }
                        />
                        <Route path="*">
                            <Redirect to="/weekPC/anonymous"/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </StrictMode>
        );
    }
}

export default App;
