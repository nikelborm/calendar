import React from "react";

import { DropdownMouseReactionArea } from "./components/DropdownMouseReactionArea";
import { ExpandButton } from "./components/ExpandButton";
import { ExpandablePart } from "./components/ExpandablePart";
import { DropDownMenuPoint } from "./components/DropDownMenuPoint";

export class SwitchPresentationDropDown extends React.Component {
    state = {
        isOpened: false
    };
    onMouseEnter = () => this.setState({ isOpened: true });
    onMouseLeave = () => this.setState({ isOpened: false });
    render() {
        return (
            <DropdownMouseReactionArea
                onMouseEnter={ this.onMouseEnter }
                onMouseLeave={ this.onMouseLeave }
            >
                <ExpandButton /* onClick={ this.onMouseEnter } */ >
                    Выбрать представление
                    { this.state.isOpened ? "▲" : "▼" }
                </ExpandButton>
                { this.state.isOpened && (
                    <ExpandablePart>
                        <DropDownMenuPoint to="/monthPC/asd" children="Месяц"/>
                        <DropDownMenuPoint to="/weekPC/asd"  children="Неделя"/>
                        <DropDownMenuPoint to="/dayPC/asd"   children="День"/>
                    </ExpandablePart>
                ) }
            </DropdownMouseReactionArea>
        );
    }
}
