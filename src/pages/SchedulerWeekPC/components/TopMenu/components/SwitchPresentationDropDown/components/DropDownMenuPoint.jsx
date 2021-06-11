import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropDownMenuPoint = styled( Link )`
    display: grid;
    margin-left: 28px;
    margin-top: 18px;
    place-items: left;
    color: white;
    text-decoration: none;
    outline: black solid 1px;
    height: var(--expand-button-height);
    width: var(--expand-button-width);
    background-color: #efefef;
    color: #000000;
    outline: 0;
    border-radius: 6px;
`;
DropDownMenuPoint.displayName = "DropDownMenuPoint";
