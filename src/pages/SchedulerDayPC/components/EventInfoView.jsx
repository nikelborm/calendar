import React from "react";
import styled from "styled-components";

import {DayPreview} from "./DayPreviewPlaceholder";

const PreviewHeader = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    font-size: 30px;
    text-align: center;
`;


export class EventInfoView extends React.Component {
    render() {
        return(
        <DayPreview>
            <PreviewHeader>
                Предосмотр
            </PreviewHeader>
        </DayPreview>
        )
    }
}