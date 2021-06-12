import styled from "styled-components";

export const CardLine = styled.p`
    display: ${ props => props.show ? "block" : "none" };
    font-weight: bold;
    font-family: Arial;
    margin: 0;
    ${ props => props.indent ?? `margin-bottom: ${ props.indent }px;` }
    ${ props => props.indentTop ?? `margin-top: ${ props.indentTop }px;` }
`;
CardLine.displayName = "CardLine";
