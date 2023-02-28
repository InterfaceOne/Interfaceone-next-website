import styled from "styled-components";
import tw from "twin.macro";
import TypedAnimation from "./common/typedAnimation/typedAnimation";
import { keyframes, css } from "styled-components";

const icon = keyframes`
  0% {
   opacity:0;
   transform: translateX(50%);
  }
   
  100% {
    opacity:1;
    transform: translateX(0%);
  }
  `;
const Container = styled.div`
  ${tw`flex justify-center items-start w-full h-full -mt-6 `};
  z-index: 10;
  margin-top: 7%;

  @media (max-width: 1024px) {
    margin-top: 9%;
  }
  @media (max-width: 768px) {
    ${tw`  `}
    margin-top:5%;
  }
`;
const ContentWrapper = styled.div`
  ${tw`w-full h-full text-white flex flex-col justify-center items-start  ml-2`};
  z-index: 10;
  @media (max-width: 987px) {
    ${tw`   `}
  }
  @media (max-width: 550px) {
    ${tw`  ml-0 px-6 `}
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 450px) {
    margin-top: 15%;
  }
`;

const HeaderWrapper = styled.div`
  ${tw` w-full flex justify-start items-center  `};

  @media (max-width: 520px) {
    ${tw`mt-2 h-auto `};
  }
`;
const MainHeading = styled.div`
  ${tw`  flex justify-start items-center  relative `};
  @media (max-width: 768px) {
    ${tw` text-white flex flex-col justify-center items-start relative p-0  `}
  }
`;
const Head = styled.div`
  ${tw` `}
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  @media (max-width: 1170px) {
    ${tw`text-7xl`}
  }
  @media (max-width: 768px) {
    ${tw`text-6xl`}
  }

  @media (max-width: 520px) {
    ${tw`text-5xl `}
  }
`;
const SecHeadLayer = styled(TypedAnimation)`
  position: relative;
  ${tw`text-7xl text-gold absolute bottom-0 left-0 font-bold w-full `};
  @media (max-width: 1170px) {
    ${tw`text-6xl`}
  }
  @media (max-width: 768px) {
    ${tw`text-5xl`}
  }
  @media (max-width: 520px) {
    ${tw`text-4xl `}
  }
`;

const TechnologyWrapper = styled.div`
  ${tw` w-full flex justify-center items-start      `}
  @media (max-width: 768px) {
    ${tw` w-full  h-auto  `}
  }
  @media (max-width: 520px) {
    ${tw` w-full  h-auto  `}
  }
`;

const MainWrapper = styled.div`
  ${tw` flex justify-between items-start  w-full h-full `};
  max-height: 335px;
  min-height: 335px;
  @media (max-width: 768px) {
    ${tw` `}
  }
  @media (max-width: 520px) {
    ${tw`  flex flex-col justify-start space-y-2 items-center flex-wrap `};
  }
`;

const TechnologyCardWrapper = styled.div`
  flex-basis: 62%;
  transform: translateX(0%);
  z-index: 1;
  transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${tw`h-full  `};
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  animation: ${(props) =>
    props.animation &&
    css`
      ${icon} 1s ease-in-out  1 forwards
    `};
  @media (max-width: 768px) {
    ${tw` `}
  }
  @media (max-width: 520px) {
    flex-basis: 55%;
    min-height: 55%;
    /* height:130%; */
  }
`;
const TechnologyList = styled.div`
  flex-basis: 37%;

  z-index: 1;

  ${tw`  flex flex-col justify-between items-center flex-wrap bg-transparent cursor-pointer  `};
  @media (max-width: 768px) {
    ${tw` `}
  }
  @media (max-width: 520px) {
    flex-basis: 30%;

    ${tw`h-full w-full `}
  }
`;
const Technology = styled.div`
  flex-basis: 30%;
  ${tw` w-full border border-gold flex justify-between items-center  py-2 px-3  `};

  &:nth-child(1) {
    ${tw`rounded-tr-xl`}
    @media  (max-width:520px) {
      ${tw`rounded-none`}
    }
  }
  &:nth-child(3) {
    ${tw`rounded-br-xl`}
    @media  (max-width:520px) {
      ${tw`rounded-br-xl rounded-bl-xl`}
    }
  }

  &:nth-child(4) {
    ${tw`hidden`}
  }
  @media (max-width: 500px) {
    flex-basis: 40%;
  }
`;
const Heading = styled.div`
  ${tw`text-2xl text-gold font-bold w-full`}
  @media (max-width: 987px) {
    ${tw` text-xl `}
  }
  @media (max-width: 965px) {
    ${tw` text-lg `}
  }
  @media (max-width: 880px) {
    ${tw` text-base `}
  }
  @media (max-width: 768px) {
    ${tw`text-base `}
  }
  @media (max-width: 336px) {
    ${tw`text-sm `}
  }
`;
const Icon = styled.div`
  ${tw``}
`;
const SideLine = styled.div`
  ${tw`-ml-0 mt-8  `}
  /* margin-top: -33%; */
  margin-top:5%;
  @media (max-width: 2000px) {
    margin-top: 3%;
  }

  @media (max-width: 1540px) {
    margin-top: 4%;
  }
  @media (max-width: 1400px) {
    /* margin-top: -37%; */
  }
  @media (max-width: 1280px) {
    margin-top: 5%;
  }
  @media (max-width: 1024px) {
    margin-top: 4%;
  }
  @media (max-width: 850px) {
    /* margin-top: -62%; */
  }

  @media (max-width: 768px) {
    ${tw` -ml-16  `};
    margin-top: 5%;
  }
  @media (max-width: 650px) {
    ${tw` -ml-28 `};
    /* margin-left: -3rem; */
  }
  @media (max-width: 550px) {
    ${tw` hidden `};
    display: none;
  }
`;

const TechnologyContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15%;
`;

export {
  Container,
  TechnologyContainer,
  HeaderWrapper,
  MainHeading,
  Head,
  FirstHeadLayer,
  SecHeadLayer,
  TechnologyWrapper,
  TechnologyCardWrapper,
  TechnologyList,
  Technology,
  Heading,
  Icon,
  SideLine,
  MainWrapper,
  ContentWrapper,
};
