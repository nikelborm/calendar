import styled from "styled-components";

export const CardContent = styled.div`
    position: absolute;
    box-sizing: border-box;
    padding: 15px 0 5px 20px;
    left:5px;
    right:5px;
    top: ${props => props.top * 100 + "%"};
    background: #FF2800;
    border-radius: 15px;
    height:${props => props.height * 100 + "%"};
`;
CardContent.displayName = "CardContent";
