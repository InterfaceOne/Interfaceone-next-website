import styled from "styled-components";
import tw from "twin.macro";

// import bgimage from "../public/Ui-images/backyellow.png";
const Container = styled.div`
  position: relative;
  height: 100vh;
  /* background-image: url(${bgimage}); */
  background-repeat: repeat;
  background-blend-mode: lighten;
  background-size: 50px 50px;

  animation: animatedBackground 20s linear infinite;
  background-image: black;

  @keyframes animatedBackground {
    0% {
      background-position: 10 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }

  @media (max-width: 920px) {
    height: 60vh;
  }

  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    height: 100vh;
  }
`;
const MainPage = styled.div``;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  @media (max-width: 426px) {
    flex-direction: column;
    row-gap: 1rem;
    padding: 2rem;
  }
`;
const HeaderLogo = styled.img`
  height: 6rem;
`;
const ToggleMenu = styled.div``;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  position: relative;
  align-items: flex-start;

  padding: 2rem;

  margin-top: 20%;

  @media (max-width: 426px) {
    align-items: center;
  }
`;
const SideLine = styled.div``;
const Param = styled.div`
  font-size: 5rem;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 4rem;
  }
  @media (max-width: 550px) {
    font-size: 2.5rem;
  }
  /* @media (max-width:400px) {
font-size: 2rem;
    
  } */
`;
const HeroMenu = styled.div`
  font-size: 2.75rem;
  font-weight: 900;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: -11px;
  margin-left: 17px;

  color: rgb(255, 196, 0);
  animation-name: moveInRight;
  animation-duration: 3s;
  @keyframes moveInRight {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @media (max-width: 426px) {
  }
`;

const HeroText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  font-family: sans-serif;
  margin-left: 20px;
  transform: translateX(calc(100% + 30px));
  animation: leftSlide 1s cubic-bezier(0.68, -0.55, 0.265, 1.1) forwards;
  @keyframes leftSlide {
    0% {
      transform: translateX(calc(-100% + 30px));
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
const CardsWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 15%;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
  }
`;
const MenuWrapper = styled.div`
  ${tw`w-full -mr-14 `}
  height:100vh;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  position: absolute;
  z-index: 10;

  @media (max-width: 2000px) {
    margin-top: 5%;
  }

  @media (max-width: 1540px) {
    margin-top: 10%;
  }

  @media (max-width: 1024px) {
    margin-top: 5%;
  }
  @media (max-width: 550px) {
    margin-top: 80%;
  }
  @media (max-width: 430px) {
    margin-top: 90%;
  }
  .menu ul {
    margin-left: 4rem;
    @media (max-width: 769px) {
      margin-left: 0;
    }
  }
  .menu ul li :hover {
    animation-name: moveInleft;
    animation-duration: 2s;
    @keyframes moveInleft {
      from {
        opacity: 0;
        transform: translateX(-200px);
      }
      to {
        opacity: 1;
        transform: translateX(0%);
      }
    }
  }
`;
const MethodologyWrapper = styled.div`
  background: #1b1b1d;
  color: #fff;
  background-color: black;
  min-height: 650px;
  margin-bottom: 0.5rem;
  visibility: visible;
  animation-name: fade-in-bottom;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const MethodologyHeader = styled.h2`
  padding: 150px 0px 55px 20px;
  visibility: visible;
  animation-name: fade-in-bottom;
  font-size: 2rem;
  font-weight: 900;
  color: goldenrod;
  @media (max-width: 374px) {
    text-align: center;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: -5.2rem;
  /* margin-left: 50px; */
  padding: 3rem;
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 486px) {
    margin-left: 0px;
  }
`;
const SmoothScroll = styled.div`
background-color: black;
`;

const UnorderedList = styled.ul``;

const List = styled.li``;

const Heading = styled.h1``;

const TitleContainer = styled.div``;

export {
  Container,
  TitleContainer,
  Heading,
  List,
  UnorderedList,
  MainPage,
  Header,
  HeaderLogo,
  ToggleMenu,
  HeroContent,
  SideLine,
  MenuWrapper,
  HeroMenu,
  HeroText,
  CardsWrapper,
  MethodologyWrapper,
  MethodologyHeader,
  Wrapper,
  SmoothScroll,
  Param,
};
