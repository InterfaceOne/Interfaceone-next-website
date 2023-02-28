import styled from "styled-components";
import tw from "twin.macro";
import { keyframes } from "styled-components";

const icon = keyframes`
  0% {
    transform:translateX(-100%);
  }
  100% {
    transform:translateX(0%);
    
  }`;
const Container = styled.div`


  ${tw`  w-full  flex  items-center pb-2  `}
  animation:  ${icon} 2s ease-in-out 1 forwards;

  display: block;
  @media (max-width: 768px) {
    ${tw`  `}
  }
  @media (max-width: 650px) {
    ${tw`  w-full  py-0 flex  flex-col justify-center items-center -mt-10 space-y-2 `}
  }
  @media (max-width: 550px) {
    ${tw` w-full px-6  `}
    margin-top: 2%;
  }
`;
const IconWrapper = styled.div`
  ${tw` flex justify-between items-center  space-x-8 ml-20 `};
  margin-left: ${(props) => (props.marginLeftZero ? "0" : "5rem")};

  @media (max-width: 768px) {
    ${tw` `}
  }
  @media (max-width: 650px) {
    ${tw`w-full `}
  }
  @media (max-width: 520px) {
    ${tw` hidden`}
  }
`;
const SvgIcon = styled.div`
  ${tw`hover:text-gold self-start`}
`;
const Rights = styled.p`
  ${tw`font-light pr-5 text-sm text-center ml-auto	`}
  margin-top: 2%;

  @media(max-width:2000px){
    margin-bottom: 0;
    margin-top: 2%;
  }
  @media (max-width:650px) {
    ${tw` w-full`}
  }
  @media (max-width: 550px) {
    ${tw`  text-center w-8/12 ml-14`}
  }
`;
export { SvgIcon, Container, IconWrapper, Rights };
