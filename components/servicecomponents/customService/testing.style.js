import styled from "styled-components";

const Header = styled.h1`
  line-height: 1;
  margin-bottom: 1%;
  font-size: 26px;
  font-weight: 900;
  color:goldenrod;
`;
const Heading = styled.h2`
  color: grey;
  margin-bottom: 1%;
  font-size: 22px;
  font-weight: 800;
  line-height: 1;
`;

const Paragraph = styled.p`
  font-size: 17px;
  font-weight: 500;
  color:white;
`;

const Main = styled.div`
  margin-left: 5%;
  margin-right: 5%;
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2%;
`;
const Container2 = styled.div`
  display: flex;
  column-gap: 0.5%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 486px) {
    flex-direction: column;
  }
  @media screen and (max-width: 250px) {
    flex-direction: column;
  }
`;
const Container3 = styled.div`
  color: goldenrod;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4%;
  margin-top: 10%;
  justify-content: center;
`;

const Image = styled.img``;
const Image1 = styled.img`
  width: 60px;
  height: 60px;
`;

const Validate = styled.div`
  margin-bottom: "10%";
`;
const Ensure = styled.div``;

const Full = styled.div`
  flex-basis: 50%;
  padding: 1%;
  border-right: groove;
`;

const EnsureContainer = styled.div`
  flex-basis: 50%;
  padding: 1%;
  border-left: groove;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 900;
`;
const Content = styled.div`
  font-size: 17px;
  font-weight: 500;
  color: white;
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 30%;
  margin-bottom: 4%;
  border-radius: 10px;
  padding: 8px;
  cursor: auto;
  border: 1px solid goldenrod;
  padding: 2rem;

  &:hover {
    transition: 1s;
    background-color: rgba(225, 166, 18, 0.419);
  }

  @media screen and (max-width: 1024px) {
    flex-basis: 45%;
  }
  @media screen and (max-width: 768px) {
    flex-basis: 48%;
  }
  @media screen and (max-width: 550px) {
    flex-basis: 100%;
  }
`;

export {
  Card,
  Title,
  Content,
  Full,
  EnsureContainer,
  Validate,
  Ensure,
  Header,
  Image,
  Image1,
  Container1,
  Heading,
  Container2,
  Main,
  Container3,
  Paragraph,
};
