import styled from "styled-components";
import tw from "twin.macro";
import TypedAnimation  from "../typedAnimation/typedAnimation";
const Container = styled.div`
  ${tw`py-4 pr-10 pl-20`}


  @media (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 550px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`;
const HeaderWrapper = styled.div`
  ${tw` w-full flex justify-start items-center`};
  @media(min-width:770px) {
    margin-top: 10%;
  }

  @media (max-width: 768px) {
    margin-top: 20%;
  }
`;

const MainHeading = styled.div`
  ${tw`  flex justify-start items-center  relative `};
  @media (max-width: 768px) {
    ${tw`  `}
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
const CardWrapper = styled.div`
  @media (min-width: 1300px) {
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 3rem;
    column-gap: 1%;
    margin-bottom:3%;
  }

  @media (max-width: 1280px) {
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 3rem;
    margin-bottom:3%;
  }
  @media (max-width: 768px) {
    /* margin-top:10%;
    display:flex;
    flex-direction:column;
    row-gap:2rem; */
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 135rem;
    row-gap: 2rem;
  }
  @media (max-width: 550px) {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    height: 100%;
  }
`;

const Main = styled.div`
  @media (min-width: 770px) {
    /* display: none; */
  }
`;
const QuestionWrapper = styled.div`
  padding-top: 0rem;
`;
const Question = styled.div`
  ${tw`flex flex-col items-center gap-y-4`}
`;
const QuestionText = styled.div`
  ${tw`text-gold text-4xl font-semibold`}

  @media (max-width:768px) {
    font-size: 2.3rem;
    font-weight: 900;
    padding-left: 1%;
    text-align: center;
  }

  @media (max-width: 550px) {
    text-align: center;
    padding-left: 2%;
    padding-right: 2%;
    font-size: 1.8rem;
  }
  @media (max-width: 430px) {
    text-align: center;
  }
`;

const QuestionButton = styled.div`
  @media (min-width: 770px) {
    /* display: none; */
  }
`;

const RouteButton =styled.div`
&:hover{
  cursor:pointer;
}
`

export {
  QuestionWrapper,RouteButton,
  QuestionButton,
  QuestionText,
  Question,
  Container,
  MainHeading,
  Main,
  Head,
  HeaderWrapper,
  FirstHeadLayer,
  SecHeadLayer,
  CardWrapper,
};
