import styled from "styled-components";

export const CardLine = styled.p`
    display: ${ props => props.show ? "block" : "none" };
    font-family: 'IBM Plex Sans', sans-serif;
    margin:
        ${ props => props.indentTop ? props.indentTop + "px" : "0" }
        0
        ${ props => props.indent ? props.indent + "px" : "0" }
        0
    ;
`;
CardLine.displayName = "CardLine";

export const CardMainLine = styled( CardLine )`
    font-weight: 700;
    font-style: italic;
    letter-spacing: 1px;
`;
CardLine.displayName = "CardLine";
