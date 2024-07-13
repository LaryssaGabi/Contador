import styled from "styled-components";



export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;


export const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);
    text-align: center;
    padding: 20px; 
    z-index: 1; 
`

export const Title = styled.h2`
    padding-top: 8px;
`;
export const SubTitle = styled.h3`
    padding-top: 8px;
    color: #CAD9E0;
`;

export const Content = styled.p`
    margin: 4px 0;
`;

export const ButtonStyle = styled.button`
    display: inline-block;
    font-size: 16px;
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #4CAF50; 
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-bottom: 8px;
    width: 110px;
    margin-left: 8px;

    &:hover {
        background-color: #45a049; 
    }
`;
