import styled from "styled-components";

export const CardLine = styled.p`
    display: block;
    font-weight: bold;
    font-family: Arial;
    margin: 0;
    margin-bottom: ${ props => props.indent + "px"};
    margin-top: ${ props => props.indentTop + "px"};
`;
CardLine.displayName = "CardLine";
