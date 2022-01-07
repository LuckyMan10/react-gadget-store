import Styled from "styled-components";

const StyledList = Styled.div`
    ul {
        list-style: none;
        padding: 0;
        line-height: 35px;
        li {
            min-width: 65%;
            cursor: pointer;
            padding-left: 20px;
            margin: 10px 0px;
            font-size: 20px;
            color: white;
            transition: 0.3s;
        }
    }
    .active {
        background: white;
        color: black;
        transition: 0.3s;
    }
`;

export { StyledList };
