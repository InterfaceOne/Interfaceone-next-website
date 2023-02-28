import styled from "styled-components";

const FirstContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5%;
  }

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5%;
  }
`;

const LeftContent = styled.div`
  flex-basis: 40%;

  @media (max-width: 768px) {
    flex-basis: 90%;
  }

  @media (max-width: 540px) {
    flex-basis: 90%;
  }
`;
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: goldenrod;
  /* @media (max-width: 1300px) {
    font-size: 2rem;
    font-weight: 900;
    color: goldenrod;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 540px) {
    font-size: 1.8rem;
  } */
`;
const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  color: white;
  padding: 1%;

  /* @media (max-width: 1300px) {
    line-height: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 500;
  } */
  @media (max-width: 540px) {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.5rem;
  }
`;
const RightImage = styled.div`
  flex-basis: 40%;

  @media (max-width: 768px) {
    flex-basis: 90%;
  }
  @media (max-width: 540px) {
    flex-basis: 90%;
  }
`;
const Image = styled.img`


`;

const Imagecard = styled.img`

width:6rem;
 @media (max-width: 1024px) {
    width:7rem;
  }
   @media (max-width: 768px) {
    width:7rem;
  }
 @media (max-width: 486px) {
    width:8rem;
  }
`;
const SecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5%;
  }
`;
const LeftContainer = styled.div`
  flex-basis: 40%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5%;
  }
  @media (max-width: 540px) {
    flex-basis: 90%;
  }
`;
const SubContent = styled.div``;
const RightContainer = styled.div`
  flex-basis: 40%;
  row-gap: 1rem;

  @media (max-width: 768px) {
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
    margin: 5%;
  }

  @media (max-width: 540px) {
    flex-basis: 90%;
  }
`;
const ContentContainer = styled.div`
  border: 2px solid goldenrod;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
  border-radius: 2rem;

  @media (max-width: 768px) {
  }
`;
const ImageContainer = styled.div`
  padding: 1rem;
`;
const ThirdContainer = styled.div``;
const SecondImage = styled.img`
  width: 43rem;
`;
const Card = styled.div`
  display: flex;
  width: 98%;
  height: 80%;
  align-items: center;
  border-radius: 15px;
`;
const Main = styled.div`
  margin-bottom: 1%;
`;
const ThirdImage = styled.img`
  transition: transform 2.05s ease-in-out;

  &:hover {
    transform: scale(1.5, 1.5);
    cursor: pointer;
  }
`;

export {
  ThirdImage,
  FirstContainer,
  Main,
  Card,
  SubContent,
  RightContainer,
  ContentContainer,
  ImageContainer,
  ThirdContainer,
  SecondImage,
  RightImage,
  LeftContent,
  SecondContainer,
  LeftContainer,
  Image,
  Paragraph,
  Heading,
  Imagecard
};
