import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDownMenuPoint = styled( Link )`
    display: grid;
    place-items: center;
    color: white;
    text-decoration: none;
    outline: black solid 1px;
    height: var(--expand-button-height);
    width: var(--expand-button-width);
`;
DropDownMenuPoint.displayName = "DropDownMenuPoint";

export { DropDownMenuPoint };
