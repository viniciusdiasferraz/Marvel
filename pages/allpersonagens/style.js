import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(2, 43, 95, 255);
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 40px;
  @media (max-width: 320px) {
    padding: 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  align-items: center;
  cursor: pointer;
  background-color: gray;
  border-radius: 20px;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 300px;
    height: 500px;
  }
  @media (max-width: 375px) {
    height: 405px;
  }
  @media (max-width: 320px) {
    height: 400px;
    justify-content: space-evenly;
  }
`;

export const Typography = styled.h1`
  padding: 20px;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 25px;
    padding: 12px;
  }
  @media (max-width: 425px) {
    font-size: 24px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
    padding: 16px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
    padding: 12px;
  }
`;

export const Imagem = styled.img`
  border-radius: 20px;
  padding: 0.5rem;
  @media (max-width: 768px) {
    width: 270px;
    height: 400px;
  }
  @media (max-width: 425px) {
    height: 350px;
  }
  @media (max-width: 375px) {
    height: 313px;
    width: 270px;
  }
  @media (max-width: 320px) {
    height: 300px;
    width: 260px;
  }
`;
