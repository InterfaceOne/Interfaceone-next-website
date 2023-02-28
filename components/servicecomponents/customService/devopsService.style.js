import styled from "styled-components";

const Main = styled.div`
  margin-left: 2%;
  margin-right: 2%;

  @media screen and (max-width: 768px) {
    margin: 8%;
  }
`;

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-top: 2%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
  @media screen and (max-width: 486px) {
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0%;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: goldenrod;
  margin-top:2%;
  margin-bottom: 2%;

  @media screen and (max-width: 768px) {
  }
`;
const Para = styled.p`
  width: 100%;
  color: white;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    font-size: 15px;
    font-weight: 600;
  }
`;
const Image = styled.img`
  border-radius: 1%;
  min-width: 38vw;
`;
const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  @media screen and (max-width: 550px) {
  }
`;
const ThirdContainer = styled.div`
  margin-top: 5%;
`;
const FourthContainer = styled.div`
  margin-top: 5%;
`;
const FifthContainer = styled.div`
  margin-top: 5%;
`;
const SixthContainer = styled.div`
  margin-top: 5%;
`;
const SeventhContainer = styled.div`
  margin-top: 5%;
`;

const Container = styled.div`
  flex-basis: 48%;
`;
const SecondImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 4%;
`;

const ThirdImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;
const Wrapper = styled.div`
  color: goldenrod;
  flex-basis: 30%;
  display: flex;
  justify-content: center;
  margin: 0px 0 1rem;

  @media screen and (max-width: 768px) {
    flex-basis: 30%;
  }
  @media screen and (max-width: 550px) {
    flex-basis: 30%;
  }
`;
const Figure = styled.figure`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1%;

  &:hover {
    box-shadow: 0px 0px 40px 6px #daa520;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 70%;
  height: 50%;
  background-color: black;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const UnorderedList = styled.ul`
  margin-left: 2%;
  font-weight: 600;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const FigCaption = styled.figcaption``;
export {
  UnorderedList,
  CardImage,
  FigCaption,
  Wrapper,
  Figure,
  Main,
  ImageContainer,
  ThirdImageContainer,
  SecondImageContainer,
  Container,
  SixthContainer,
  SeventhContainer,
  Para,
  Image,
  FirstContainer,
  FifthContainer,
  ThirdContainer,
  FourthContainer,
  SecondContainer,
  Content,
  Heading,
};
