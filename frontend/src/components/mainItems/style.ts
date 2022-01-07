import Styled from "styled-components";

const StyledMainItems = Styled.article`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    padding: 40px 0px;
    .ant-card-meta-title {
        font-size: 22px;
    }
    .ant-card-meta-description {
        font-size: 22px;
    }
`;

const MainItemsWrapper = Styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    width: 90%;
`;

export { StyledMainItems, MainItemsWrapper };
