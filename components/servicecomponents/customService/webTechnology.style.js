import styled from "styled-components";

const Main = styled.div`
  margin-left: 2%;
  margin-right: 2%;
`;
const FirstContainer = styled.div`
  display: flex;
  @media (max-width: 486px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;
const SecondContainer = styled.div`
  margin-top: 5%;
`;
const ContentContainer = styled.div`
  flex-basis: 50%;
`;
const ImageContainer = styled.div`
  flex-basis: 50%;
`;
const Image = styled.img`
  width: 35rem;
  height: 30rem;
`;
const Image1 = styled.img`
  width: 17rem;
  height: 17rem;
  padding: 4%;
  @media (max-width: 486px) {
    width: 12rem;
    height: 12rem;
  }
  @media (max-width: 768px) {
    width: 12rem;
    height: 11rem;
    padding-bottom: 10%;
  }
`;

const Header = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color:goldenrod;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 900;
  color:goldenrod;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Content = styled.p`
color:white;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 65%;
  font-size: 20px;
  font-weight: 400;
  line-height: 2.2rem;
  @media (max-width: 486px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5rem;
    margin-left: 5%;
    &:nth-child(even) {
      margin-right: 5%;
    }
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  border-bottom: 2px solid goldenrod;
  &:nth-child(even) {
    flex-direction: row;
  }
  @media (max-width: 486px) {
    display: flex;
    flex-direction: column;
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

const Webcards = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  flex-basis: 30%;
  row-gap: 1rem;
`;

const Paragraph = styled.p`
  padding-top: 2%;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 65%;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  @media (max-width: 486px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.5rem;
    margin-left: 5%;
    &:nth-child(even) {
      margin-right: 5%;
    }
  }
`;

export {
  Title,
  Paragraph,
  Card,
  Content,
  Header,
  Image,
  Image1,
  Webcards,
  SecondContainer,
  ImageContainer,
  Main,
  FirstContainer,
  ContentContainer,
};
