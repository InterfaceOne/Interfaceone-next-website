import styled from "styled-components";
import tw from "twin.macro";
import TypedAnimation  from "./common/typedAnimation/typedAnimation";
const Container = styled.div`
  ${tw`text-white w-full h-full flex justify-start items-start pr-10`};
  z-index: 10;
  @media (max-width: 520px) {
    ${tw`pr-6`}
  }
`;
const MainWrapper = styled.div`
  ${tw` w-full h-full flex justify-start items-start   `};
  z-index: 10;
  @media (max-width: 520px) {
    ${tw`  flex flex-col  justify-center items-center pl-6   `};
  }
`;

const MainHeading = styled.div`
  ${tw`  relative`};
  margin-bottom: 5%;
  @media (max-width: 550px) {
    ${tw`mt-0`}
  }
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full  font-bold `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  transition: transform 0.1s linear;

  @media (max-width: 768px) {
    font-size: 100px;
  }
  @media (max-width: 590px) {
    font-size: 80px;
  }
  @media (max-width: 520px) {
    font-size: 60px;
  }
`;
const SecHeadLayer = styled(TypedAnimation)`
  ${tw`text-7xl text-gold font-bold w-full absolute top-4 left-0 `};

  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 590px) {
    font-size: 50px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
  }
`;

const SideLine = styled.div`
  margin-left: 0;
  /* margin-top: -24%; */
  margin-top: 5%;
  @media (max-width: 2000px) {
    margin-top: 3%;
  }

  @media (max-width: 1540px) {
    margin-top: 3.5%;
  }

  @media (max-width: 1400px) {
    /* margin-top: -35%; */
  }

  @media (max-width: 1280px) {
    margin-left: 0;
    margin-top: 4%;
  }
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 5%;
  }
  @media (max-width: 850px) {
    margin-left: 0;
    /* margin-top: -61%; */
  }
  @media (max-width: 768px) {
    /* margin-left: 5%; */
  }
  @media (max-width: 550px) {
    display: none;
  }
`;
const CardWrapper = styled.div`
  ${tw` space-x-2 ml-3 flex justify-start items-start w-full `};
  margin-bottom: 2rem;
  height: 34rem;
  display: flex;
  flex-direction: column;
  margin-left: 0;

  @media (max-width: 1540px) {
    margin-top: 0rem;
    margin-left: 0.5%;
    > * {
      &:nth-child(4) {
        display: none;
      }
    }
  }
  @media (max-width: 995px) {
    > * {
      &:nth-child(3) {
        display: none;
      }
    }
  }
  @media (max-width: 660px) {
    ${tw`ml-0 `}
    > * {
      &:nth-child(2) {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: 520px) {
    ${tw`ml-0 space-x-0  w-full`}
    > * {
      &:nth-child(1) {
        ${tw`w-full `}
      }
    }
  }
`;
const ButtonWrapper = styled.div`
  ${tw`absolute `};
  width: 89%;
  display: flex;
  justify-content: center;
  @media (max-width: 550px) {
    width: 90%;
  }
`;

const ContentWrapper = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-start space-y-10`};

  @media (max-width: 350px) {
    ${tw`space-y-3`}
  }
`;

const SecondContainer = styled.div`
  @media (min-width: 770px) {
    display: none;
  }
  @media (max-width: 768px) {
    margin-top: 6%;
  }

  @media (max-width: 550px) {
  }
`;

const FirstContainer = styled.div`
  margin-top: 7%;
  @media (max-width: 1024px) {
    margin-top: 9%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const CardWrapper1 = styled.div`
  ${tw`  `};

  @media (max-width: 768px) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-left: 0.5%;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: 450px) {
    margin-top: 15%;
  }
`;

const Container1 = styled.div`
  ${tw`text-white w-full h-full flex justify-start items-start `};
  z-index: 10;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const MainWrapper1 = styled.div`
  ${tw` w-full h-full flex items-start   `};
  z-index: 4;

  @media (max-width: 520px) {
    ${tw`  flex flex-col  justify-center items-center    `};
  }
`;

const MainHeading1 = styled.div`
  ${tw`  relative`};
  @media (max-width: 550px) {
    ${tw`mt-0`}
  }
  @media (max-width: 450px) {
  }
`;

const FirstHeadLayer1 = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full  font-bold `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  transition: transform 0.1s linear;
  @media (max-width: 768px) {
    font-size: 100px;
  }
  @media (max-width: 590px) {
    font-size: 80px;
  }
  @media (max-width: 520px) {
    font-size: 60px;
    margin-left: -2%;
  }
`;
const SecHeadLayer1 = styled(TypedAnimation)`
  ${tw`text-7xl text-gold font-bold w-full absolute top-4 left-0 `};
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 590px) {
    font-size: 50px;
  }
  @media (max-width: 520px) {
    font-size: 40px;
  }
`;

const ButtonWrapper1 = styled.div`
  ${tw`absolute -bottom-16 left-1/2 `};
  @media (max-width: 768px) {
    ${tw` left-1/3`}
  }
`;

const ContentWrapper1 = styled.div`
  ${tw`w-full h-full flex flex-col justify-center items-start space-y-10`};
`;
const SideLine1 = styled.div`
  ${tw`-ml-0  `}
  margin-top: 7%;

  @media (max-width: 768px) {
    ${tw` -ml-16`};
  }
  @media (max-width: 550px) {
    display: none;
    margin-left: 0;
  }
`;

const Cards = styled.div`
  margin-top: 1%;
  display: flex;
  @media (max-width: 550px) {
    margin-top: 5%;
  }
`;

const HorizontalContainer = styled.div``;
const CardContainer = styled.div`
  @media (max-width: 550px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export {
  Container,
  HorizontalContainer,
  CardContainer,
  Cards,
  SideLine1,
  SecHeadLayer1,
  ContentWrapper1,
  ButtonWrapper1,
  Container1,
  FirstContainer,
  SecondContainer,
  MainHeading1,
  MainWrapper,
  MainHeading,
  FirstHeadLayer,
  FirstHeadLayer1,
  MainWrapper1,
  SideLine,
  SecHeadLayer,
  CardWrapper,
  ButtonWrapper,
  ContentWrapper,
  CardWrapper1,
};
