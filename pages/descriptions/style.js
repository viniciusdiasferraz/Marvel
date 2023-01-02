import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(2, 43, 95, 255);
  background-size: 100vh;
  padding: 20px;
`;

export const Typography = styled.h1`
  padding: 2rem;
  display: flex;
  justify-content: center;
  font-size: 20px;

`;

export const Imagem = styled.img`
border-radius: 20px 0 0 20px;
  @media(max-width:1024px){
    margin-bottom: 10px;
    border-radius: 20px;
  }
  @media(max-width:768px){
    margin-top: 10px; 
    border-radius: 20px;
  }
  @media(max-width:425px){
    margin-top: 10px;
    border-radius: 20px;
  }
  @media(max-width:375px){
    width: 250px;
    height: 250px;
    margin-bottom: 0;
    border-radius: 20px 20px 0 0;
  }
  @media(max-width:320px){
    width: 280px;
    margin-bottom: 0px;
    border-radius: 20px 20px 0 0;
  }

`;

export const BoxInformation = styled.div`
  display: flex;
  @media(max-width:1024px){
    flex-direction: column;
  }
  @media(max-width:768px){
    background: black;
    border-radius: 20px;
  }
  @media(max-width:425px){
    background: black;
    border-radius: 20px;
  }
  @media(max-width:320px){
    background: none; 
  }
`;

export const Box = styled.div`
  color: white;
  background-color: black;
  width: 100%;
  border-radius: 0 20px 20px 0;
  @media(max-width:1024px){
    border-radius: 20px;
    width: 97%;
  }
  @media(max-width:768px){
    border-radius: 0 0 20px 20px
  }
  @media(max-width:425px){
    border-radius: 0 0 20px 20px;
  }
  @media(max-width:375px){
    width: 290px;
    border-radius: 0 0 20px 20px
  }
  @media(max-width:320px){
    border-radius: 0 0 20px 20px;
    width: 280px;
  }
`;

export const BoxDescriptions = styled.div`
  display: flex;
  padding: 20px;
  @media(max-width:1024px){
    width: 97%;
  }
  @media(max-width:768px){
    flex-wrap: wrap;
    padding: 0;
    margin-top: 20px;
    gap: 30px;
    justify-content: space-between;
  }
  @media(max-width:425px){
    padding: 0;
    width: 95%;
    margin-top: 20px;
  }
  @media(max-width:375px){
    width: 96%;
    padding: 0;
    margin-top: 20px;
  }
  @media(max-width:320px){
    width: 96%;
    padding: 0;
    margin-top: 20px;
  }
`;

export const BoxItens = styled.div`
  width: 20%;
  background-color: gray;
  padding: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  height: fit-content;
  @media(max-width:1024px){
    margin-bottom: 20px;
    margin-right: 20px;
}
@media(max-width:768px){
  margin-right: 0;
  width: 34%;
  margin-left: 0;
  display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
@media(max-width:425px){
  margin-right: 0;
  width: 100%;
}
@media(max-width:375px){
  margin: 0;
}
@media(max-width:320px){
  margin: 0;
  margin-bottom: 20px;
}
`;

export const Text = styled.p`
  margin-bottom: 10px;
  border: solid;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
`;
