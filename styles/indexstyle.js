import styled from "styled-components";

export const Container = styled.div`
  background-image: url(https://www.photomural.com/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/I/A/IADX10-065.jpg);
  width: 100%;
  height: 1007px;
  background-position: center;

  @media (max-width: 768px) {
    background-image: url(https://i.pinimg.com/originals/56/a9/04/56a904ec375d24a9a9433960ccd51d20.jpg);
    background-repeat: no-repeat;
    background-color: black;
  }
  @media (max-width: 425px) {
    background-image: url(https://thypix.com/wp-content/uploads/2022/04/marvel-phone-wallpaper-thypix-84-394x700.jpg);
    background-color: rgba(236, 50, 55, 255);
    height: 100vh;
    background-position-y: -75px;
  }
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
  @media (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    height: 94%;
    width: 68%;
  }
`;

export const Imput = styled.input`
  height: 33px;
  border-radius: 5px 0 0 5px;
  outline: none;
  border: none;
  @media (max-width: 425px) {
    width: 285px;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  height: 35px;
  background-color: red;
  border: none;
  border-radius: 0 5px 5px 0;
  color: white;
  cursor: pointer;
  @media (max-width: 425px) {
    width: 200px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: rgba(2, 43, 95, 255);
  }
`;
