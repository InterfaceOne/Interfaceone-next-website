import styled from "styled-components";
import tw from "twin.macro";
import TypedAnimation from "./common/typedAnimation/typedAnimation";

const Container = styled.div`
  ${tw`w-full text-white flex flex-col justify-center items-center h-full pr-6  `}
  z-index: 10;
  @media (max-width: 768px) {
    ${tw`   `}
    margin-top: 5rem;
  }
  @media (max-width: 550px) {
    ${tw`pr-7   `}
    margin-top:0;
  }
  @media (max-width: 450px) {
    margin-top: 25%;
  }
`;
const ContentWrapper = styled.div`
  ${tw` w-full h-full text-white flex  justify-center items-center `};
  margin-top: 5%;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  @media (max-width: 1290px) {
    /* margin-top: 0; */
  }

  @media (max-width: 768px) {
    ${tw`h-full    `}
  }
  @media (max-width: 550px) {
    ${tw`h-full    `}/* margin-top:3rem; */
  }
  @media (max-width: 400px) {
    ${tw`h-full   mt-0 `}
  }
`;
const Main = styled.div`
  ${tw` w-full h-full text-white flex flex-col justify-center items-center ml-2  space-y-0 `}
  @media (max-width: 927px) {
    ${tw`space-y-6   `}
  }
  @media (max-width: 768px) {
    ${tw`  mt-0  pr-6  `}
  }
  @media (max-width: 550px) {
    ${tw`space-y-0  h-auto pt-0 pl-4 pr-0 mt-0`}
  }
`;
const HeaderWrapper = styled.div`
  ${tw` w-full   flex justify-start items-end pb-6  `};

  @media (max-width: 768px) {
    ${tw`mt-0 justify-start items-center pb-0 `};
  }
`;
const MainHeading = styled.div`
  ${tw`  flex justify-start items-center  relative mb-10`};
  @media (max-width: 768px) {
    ${tw` text-white flex flex-col justify-center items-start relative p-0  `}
  }
  @media (max-width: 550px) {
    ${tw`mb-0 mt-10 `}
  }
`;
const Head = styled.div`
  ${tw` `}
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full  `}
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  @media (max-width: 1170px) {
    ${tw`text-7xl`}
  }
  @media (max-width: 768px) {
    ${tw`text-6xl`}
  }

  @media (max-width: 550px) {
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
  @media (max-width: 550px) {
    ${tw`text-4xl `}
  }
`;

const CompanyInfoWrapper = styled.div`
  ${tw`w-full flex justify-start items-center   `}
  @media (max-width: 768px) {
    ${tw`mt-0 justify-between  `}
  }
  @media (max-width: 550px) {
    ${tw` mt-0 h-auto flex flex-col justify-between items-start space-y-6  `}
  }
`;
const AddressContactWrapper = styled.div`
  flex-basis: 40%;
  ${tw`h-full   flex flex-col justify-between items-start flex-wrap   `}
  @media (max-width: 768px) {
    ${tw` justify-between   `}
  }
  @media (max-width: 550px) {
    flex-basis: 20%;

    ${tw`mt-8 w-full flex flex-row flex-wrap justify-between items-center `}
  }
`;
const AddressWrapper1 = styled.div`
  ${tw`w-full`}
  @media (max-width: 768px) {
    ${tw`   `};
  }
  @media (max-width: 550px) {
    flex-basis: 50%;
    ${tw`w-full hidden `}
  }
`;
const AddressWrapper2 = styled.div`
  ${tw`hidden  w-full`}
  @media (max-width: 768px) {
    ${tw`   `};
  }
  @media (max-width: 550px) {
    flex-basis: 45%;
    ${tw`block space-y-2`}
  }
`;
const Heading = styled.h1`
  ${tw`text-3xl text-gold text-left w-full  font-extrabold`}
  @media (max-width: 768px) {
    ${tw`  text-xl   `};
  }
  @media (max-width: 550px) {
    ${tw`  text-lg  w-auto `};
  }
  @media (max-width: 425px) {
    ${tw`  text-lg mt-2 `};
  }
`;

const Ptag = styled.p`
  ${tw`w-8/12 text-left`}
  @media (max-width: 927px) {
    ${tw`text-sm   `}
  }
  @media (max-width: 768px) {
    ${tw`    w-10/12 text-sm `};
    @media (max-width: 550px) {
      ${tw`  text-xs w-full   `};
    }
  }
  @media (max-width: 550px) {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    position: relative;
    z-index: 50;
  }
`;
const ContactWrapper1 = styled.div`
  ${tw`w-full`}
  @media (max-width: 768px) {
    ${tw` w-full `};
  }
  @media (max-width: 550px) {
    flex-basis: 33%;

    ${tw`  space-y-2 `};
  }
`;

const FormWrapper = styled.div`
  flex-basis: 58%;

  ${tw` h-full   flex flex-col justify-start space-y-4 items-start `}
  @media (max-width: 768px) {
    ${tw` justify-center  space-y-0  `}
  }
  @media (max-width: 550px) {
    flex-basis: 45%;

    ${tw`w-full h-auto `}
  }
`;
const SideLine = styled.div`
  ${tw`-ml-0 mt-20  `}

  margin-top:5%;

  @media (max-width: 850px) {
    ${tw` -ml-16  -mt-10`};
    margin-top: -20rem;
  }
  @media (max-width: 768px) {
    ${tw` -ml-16  -mt-10`};
    margin-top: -16rem;
  }
  @media (max-width: 650px) {
    ${tw` -ml-28 `};
    display:none;
  }
  @media (max-width: 650px) {
    ${tw` hidden `};
  }
`;

const Form = styled.div`
  ${tw`h-full   w-full`};
  @media (max-width: 768px) {
    ${tw`  h-full   `};
  }
  @media (max-width: 550px) {
    ${tw`  w-full h-auto  `};
  }
`;
const TextFieldWrapper = styled.div`
  ${tw`flex w-full space-x-10`};
  @media (max-width: 500px) {
    ${tw`flex-col space-x-0`}
  }
`;

const Message = styled.p`
  color: green;
  font-weight: 600;
  padding-top: 1%;
`;

export {
  Message,
  Container,
  Main,
  HeaderWrapper,
  Head,
  CompanyInfoWrapper,
  AddressContactWrapper,
  AddressWrapper1,
  AddressWrapper2,
  Heading,
  Ptag,
  ContactWrapper1,
  FormWrapper,
  FirstHeadLayer,
  SecHeadLayer,
  SideLine,
  Form,
  MainHeading,
  ContentWrapper,
  TextFieldWrapper,
};
