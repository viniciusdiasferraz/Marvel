import styled from "styled-components";

export const Container = styled.div`
  background-image: url(https://www.photomural.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/I/A/IADX10-065.jpg);
  width: 100%;
  height: 1007px;
  background-position: center;
`;
export const Img = styled.img`
  position: absolute;
  border-radius: 20px;
  width: 250px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 0px;
  align-items: flex-end;
`;

export const Imput = styled.input`
  height: 33px;
  border-radius: 5px 0 0 5px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  height: 35px;
  background-color: red;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
`;
