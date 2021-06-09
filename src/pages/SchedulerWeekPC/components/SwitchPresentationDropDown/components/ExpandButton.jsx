import styled from "styled-components";

const ExpandButton = styled.div`
    height: var(--expand-button-height);
    width: var(--expand-button-width);
    background-color: tomato;
    display: grid;
    place-items: center;
`;
ExpandButton.displayName = "ExpandButton";

export { ExpandButton };
