import styled from "styled-components";

const Main = styled.div`
  margin-left: 2%;
  margin-right: 2%;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  row-gap: 1rem;
  padding: 1%;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color:goldenrod;
`;

const Content = styled.p`
  text-align: center;
  color:white;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 1%;
  border: 1px solid goldenrod;
  flex: 0 0 30%;
  align-items: center;
  padding: 1%;

  &:hover {
    box-shadow: 0px 0px 40px 6px #daa520;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex: 0 0 45%;
  }
  @media (max-width: 550px) {
    flex: 0 0 90%;
  }
`;

const Image1 = styled.img`
  background-color: goldenrod;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Image2 = styled.img`
  width: 50%;
  margin-bottom: 1%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FirstContainer = styled.div`
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
const Heading = styled.h1`
margin-bottom: 2%;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 900;
  color:goldenrod;
`;

const Paragraph = styled.p`
font-size:18px;
color:white;
`;

const SecondContainer = styled.div`
margin-top: 5%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    
  }
`;
const ThirdContainer = styled.div`
margin-top: 5%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    
  }
`;
const FourthContainer = styled.div`
  margin-top: 5%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
  
  }
`;
const FifthContainer = styled.div`
margin-top: 5%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    
  }
`;
const SixthContainer = styled.div`
 margin-top: 5%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
   
  }
`;
const SeventhContainer = styled.div`
 margin-top: 5%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
  }
`;

const Container = styled.div``;

export {
  Card,
  Container,
  SecondContainer,
  ThirdContainer,
  FourthContainer,
  FifthContainer,
  SixthContainer,
  SeventhContainer,
  Heading,
  Paragraph,
  FirstContainer,
  Main,
  Image,
  CardContainer,
  Title,
  Content,
  ImageContainer,
  Image1,
  Image2,
};
