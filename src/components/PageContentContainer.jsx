import styled from "styled-components";

export const PageContentContainer = styled.div`
    display: grid;
    grid-template-rows: 65px 1fr;
    grid-template-columns: 1fr 350px;
    height: calc(100% - 30px);
    width: 100%;
    padding-bottom: 30px;
    background-color: #efefef;
`;
PageContentContainer.displayName = "PageContentContainer";
