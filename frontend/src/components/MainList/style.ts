import Styled from "styled-components";

type propsType = {
  isOpen: boolean;
};

const StyledList = Styled.article<propsType>`
    position: absolute;
    left: 0;
    top: 20vh;
    height: 100%;
    transform: ${(props) => (props.isOpen ? "translateX(-100%)" : "none")};
    transition: 0.3s;
    .content {
        display: flex;
        gap: 40px;
    }
    .ant-checkbox-wrapper {
        display: flex;
        align-items: center;
    }
    .ant-checkbox-wrapper span:nth-child(2) {
        color: white;
        font-size: 20px;
        padding-top: 5px;
    }
`;

const CompanyList = Styled.div`
    .ant-checkbox-group{
        display: flex;
        flex-direction: column;
    }
    min-width: 260px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-right: 20px;
`;

const Main = Styled.div`
    display: flex;
    gap: 40px;
`;
const MainListWrapper = Styled.div`
    h1 {
        color: white;
        font-size: 28px;
        text-align: center;
    }
    position: relative;
    z-index: 5;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background: rgba(0,0,0,0.8);
    backdrop-filter: blur(5px);
    min-width: 350px;
    height: 500px;
`;

export { StyledList, CompanyList, Main, MainListWrapper };
