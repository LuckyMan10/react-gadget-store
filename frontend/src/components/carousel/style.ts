import Styled from "styled-components";

const StyledCarousel = Styled.div`
    display: flex;
    width: 40%;
    padding: 20px;
    border-radius: 10px;
    min-width: 490px;
    background: white;
    .thumbs-wrapper {
        display: flex;
        justify-content: center;
    }
`;

const StyledSlide = Styled.div`
    padding: 20px;
    img {
        max-width: 400px;
    }
`

const StyledArrow = Styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 78px;
    button {
        cursor: pointer;
        background: transparent;
        border: none;
    }
`

export { StyledCarousel, StyledSlide, StyledArrow };
