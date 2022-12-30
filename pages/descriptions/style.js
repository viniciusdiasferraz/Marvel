import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(2, 43, 95, 255);
  background-size: 100vh;
`;

export const Typography = styled.h1`
  padding: 2rem;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

export const Imagem = styled.img``;

export const BoxInformation = styled.div`
  display: flex;
`;

export const Box = styled.div`
  color: white;
  background-color: black;
  width: 100%;
`;

export const BoxDescriptions = styled.div`
  display: flex;
  padding: 20px;
`;

export const BoxItens = styled.div`
  width: 250px;
  background-color: gray;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  height: fit-content;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  border: solid;
  border-radius: 5px;
  padding: 10px;
`;
