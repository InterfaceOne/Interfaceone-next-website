import styled from "styled-components";

const Main = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;

const Heading = styled.h1`
  font-size: 34px;
  font-weight: 900;
  color:goldenrod;

  @media (max-width: 550px) {
    font-size: 28px;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img``;

const FirstContainer = styled.div`
  margin-top: 5%;
`;

const SecondContainer = styled.div`
  margin-top: 5%;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 900;
  color:goldenrod;

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;
const Para = styled.p`
  font-size: 18px;
  font-weight: 500;
  color:white;

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

const Img = styled.img``;

const Container1 = styled.div`
  padding: 2%;
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: space-around;
`;

const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2%;
  row-gap: 2rem;
`;

const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  border: 1px solid goldenrod;
  row-gap: 1rem;
  padding: 1%;
  border-radius: 5%;
  line-height:1.2;


  @media (max-width: 550px) {
    flex-basis: 100%;
    padding: 2%;
  }
`;

const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  flex-basis: 15%;
  padding: 1%;

  @media (max-width: 550px) {
    flex-basis: 40%;
  }
`;

export {
  Main,
  Card1,
  Card2,
  Container2,
  Container1,
  Title,
  Img,
  FirstContainer,
  SecondContainer,
  Para,
  Image,
  ImageContainer,
  Heading,
};
