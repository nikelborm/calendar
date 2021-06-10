import styled from "styled-components";

const ExpandButton = styled.div`
    height: var(--expand-button-height);
    width: var(--expand-button-width);
    background-color: #FF2800;
    display: grid;
    place-items: center;
    color: #efefef;
    border-radius: 6px;
`;
ExpandButton.displayName = "ExpandButton";

export { ExpandButton };
