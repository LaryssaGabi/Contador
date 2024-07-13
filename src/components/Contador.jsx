import { useState } from "react";
import { StyledContainer, Container, Title, SubTitle, Content, ButtonStyle } from "./styles";

export default function Contador() {
    const [i, somador] = useState(0);


    function somarContador() {
        somador(i + 1);
    }
    function diminuirContador() {
        somador(i - 1);
    }
    function zerarContador() {
        somador(0)
    }

    return (
        <StyledContainer>
            <Container>
                <Title>Click no contador para aumentar o número</Title>
                <SubTitle>Vite Project</SubTitle>
                <Content>{i}</Content>
                <ButtonStyle onClick={somarContador}>Contador</ButtonStyle>
                <ButtonStyle onClick={diminuirContador}>Diminuir</ButtonStyle>
                <ButtonStyle onClick={zerarContador}>Zerar</ButtonStyle>
            </Container>
        </StyledContainer>
    );
}
