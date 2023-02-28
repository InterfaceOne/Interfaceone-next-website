import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`flex flex-col `}
`;
const Header = styled.div`
  ${tw`text-white flex text-4xl  justify-center`}
  padding: 10px 0px 30px;
`;
const Content = styled.div`
  ${tw`flex w-full justify-evenly items-center p-8`}
  @media (max-width:426px) {
    flex-direction: column;
    row-gap: 2rem;
    align-items: baseline;
  }
  @media (max-width: 769px) {
    flex-direction: column;
    row-gap: 2rem;
    align-items: baseline;
  }
`;
const RecentImage = styled.img`
  ${tw`w-1/2 h-80`}
  @media(max-width: 426px) {
    ${tw`w-full`}
  }
  @media (max-width: 769px) {
    ${tw`w-full`}
  }
`;
const ContentText = styled.div`
  ${tw`flex flex-col gap-y-6 `}
  width: 30%;
  @media (max-width: 426px) {
    ${tw`w-full text-center `}
  }
  @media (max-width: 769px) {
    ${tw`w-full`}
  }
`;
const ImageHeader = styled.p`
  ${tw`text-gold font-bold text-5xl `}
`;
const ImageText = styled.p`
  ${tw`text-white font-bold text-3xl`}
  line-height: 2.75rem;
`;
const SubText = styled.div`
  ${tw`text-gold text-xl gap-x-4 hover:text-gold  hover:font-bold flex items-center `}
  @media (max-width:430px) {
    justify-content: center;
  }
  svg {
    cursor: pointer;
    font-size: 2rem;
    :hover {
      animation-name: moveInleft;
      animation-duration: 2s;
      @keyframes moveInleft {
        0% {
          transform: translateX(0px);
        }

        80% {
          transform: translateX(30px);
        }
        100% {
          opacity: 1;
          transform: translate(50px);
        }
      }
    }
  }
`;
const QuestionWrapper = styled.div`
  padding-top: 0rem;
  margin-top:1.5rem;
  margin-bottom:1rem;
`;
const Question = styled.div`
  ${tw`flex flex-col items-center gap-y-4`}
`;
const QuestionText = styled.div`
  ${tw`text-white text-4xl font-semibold`}
  margin-bottom:1rem;

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
const Button = styled.button`
  ${tw`flex items-center text-black bg-gold p-3 rounded  gap-x-2 hover:text-gold hover:border hover:border-gold hover:bg-black`}/* svg{
     cursor: pointer;
     font-size: 1.2rem;
     :hover{

     animation-name: move;
      animation-duration: 2s;
      @keyframes move {
        0% {
          transform: translateX(0);
        }

        80% {
          transform: translateX(10px);
        }
        100% {
          opacity: 1;
          transform: translate(0);
        }
      }
    }
 } */
`;

const RouteButton =styled.div`
&:hover{
  cursor:pointer;
}
`

export {
  Wrapper,RouteButton,
  Header,
  Content,
  RecentImage,
  ContentText,
  ImageHeader,
  ImageText,
  SubText,
  QuestionWrapper,
  Question,
  QuestionText,
  Button,
};
