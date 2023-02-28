import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 3%;

  @media (max-width: 450px) {
    height: 80%;
  }
`;
const Header = styled.h3`
  font-size: 5rem;
  color: Black;
  font-weight: 900;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Paragraph = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  z-index: 1;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  flex-basis: 100%;
  height: -webkit-fill-available;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  z-index: -1;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h3`
  font-size: 5rem;
  color: Black;
  font-weight: 900;
  z-index: 1;
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    font-size: 8rem;
    color: goldenrod;
  }
  @media (max-width: 550px) {
    font-size: 6rem;
  }
  @media (max-width: 450px) {
    font-size: 7rem;
  }
`;
const MainContainer = styled.div`
  height: 100vh;
`;
export {
  Container,
  MainContainer,
  Content,
  Heading,
  Header,
  ImageContainer,
  Image,
  Paragraph,
};
