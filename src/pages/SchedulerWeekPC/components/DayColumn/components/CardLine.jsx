import styled from "styled-components";

export const CardLine = styled.p`
    display: ${ props => props.show ? "block" : "none" };
    font-weight: bold;
    font-family: Arial;
    margin:
        ${ props => props.indentTop ? props.indentTop + "px" : "0" }
        0
        ${ props => props.indent ? props.indent + "px" : "0" }
        0
    ;
`;
CardLine.displayName = "CardLine";
