import styled from "styled-components";

const DropdownMouseReactionArea = styled.div`
    --expand-button-height: 40px;
    --expand-button-width: 200px;
    height: var(--expand-button-height);
    width: var(--expand-button-width);
    position: relative;
    text-align: center;
`;
DropdownMouseReactionArea.displayName = "DropdownMouseReactionArea";

export { DropdownMouseReactionArea };
