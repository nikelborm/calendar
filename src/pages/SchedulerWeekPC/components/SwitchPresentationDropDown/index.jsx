import React from "react";

import { DropdownMouseReactionArea } from "./components/DropdownMouseReactionArea";
import { ExpandButton } from "./components/ExpandButton";
import { ExpandablePart } from "./components/ExpandablePart";
import { DropDownMenuPoint } from "./components/DropDownMenuPoint";

export class SwitchPresentationDropDown extends React.Component {
    state = {
        isOpened: false
    };
    close = () => this.setState( { isOpened: false } );
    open = () => this.setState( { isOpened: true } );
    render() {
        return (
            <DropdownMouseReactionArea
                onMouseEnter={ this.open }
                onMouseLeave={ this.close }
            >
                <ExpandButton>
                    Выбрать представление
                    { this.state.isOpened ? "▲" : "▼" }
                </ExpandButton>
                { this.state.isOpened && (
                    <ExpandablePart
                        onClick={ this.close }
                    >
                        <DropDownMenuPoint to="/monthPC/asd" children="Месяц"/>
                        <DropDownMenuPoint to="/weekPC/asd"  children="Неделя"/>
                        <DropDownMenuPoint to="/dayPC/asd"   children="День"/>
                    </ExpandablePart>
                ) }
            </DropdownMouseReactionArea>
        );
    }
}
