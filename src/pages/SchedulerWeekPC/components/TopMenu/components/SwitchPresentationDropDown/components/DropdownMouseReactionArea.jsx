import styled from "styled-components";

export const DropdownMouseReactionArea = styled.div`
    --expand-button-height: 40px;
    --expand-button-width: 230px;
    height: var(--expand-button-height);
    width: var(--expand-button-width);
    position: relative;
    text-align: center;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    cursor: pointer;
    z-index: 999;
`;
DropdownMouseReactionArea.displayName = "DropdownMouseReactionArea";
