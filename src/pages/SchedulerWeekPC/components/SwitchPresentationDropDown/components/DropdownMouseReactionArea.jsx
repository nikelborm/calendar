import styled from "styled-components";

const DropdownMouseReactionArea = styled.div`
    --expand-button-height: 40px;
    --expand-button-width: 230px;
    height: var(--expand-button-height);
    width: var(--expand-button-width);
    position: relative;
    text-align: center;
    margin-left: 80%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    cursor: pointer;
`;
DropdownMouseReactionArea.displayName = "DropdownMouseReactionArea";

export { DropdownMouseReactionArea };
