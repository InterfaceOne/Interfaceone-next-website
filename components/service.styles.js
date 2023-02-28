import styled from "styled-components";
import tw from "twin.macro";
import TypedAnimation  from "../components/common/typedAnimation/typedAnimation";

const Container = styled.div`
  ${tw` flex justify-center items-center w-full h-full `};
  margin-top: 7%;
  background-color: black;
  z-index: 10;
  @media (max-width: 1024px) {
    margin-top: 9%;
  }
  @media (max-width: 768px) {
    ${tw` `}
  }
`;
const ServiceContainer = styled.div`
${tw` flex justify-center items-start w-full h-full `};
  background-color: black;
  z-index: 10;
  @media (max-width: 768px) {
    ${tw` `}
  }
`;
const ContentWrapper = styled.div`
  ${tw` w-full h-full text-white flex flex-col justify-center items-center   ml-2 `};

  @media (max-width: 768px) {
    ${tw` space-y-12 `};
  }
  @media (max-width: 650px) {
    ${tw`ml-0 px-6 space-y-0`};
  }
  @media (max-width: 425px) {
    margin-top: 20%;
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
const HeaderWrapper = styled.div`
  ${tw` w-full  flex justify-start items-end     `};
  margin-bottom: 3%;

  @media (max-width: 768px) {
    ${tw` w-full flex justify-start items-center mt-0 `};
  }
  @media (max-width: 550px) {
    ${tw`  justify-start items-end  `};
    margin-bottom: 5%;
  }
`;
const MainHeading = styled.div`
  ${tw`  flex justify-start items-center  relative `};
  @media (max-width: 768px) {
    ${tw` text-white flex flex-col justify-center items-start relative p-0  `}
  }
  @media (max-width: 550px) {
    margin-bottom: 1rem;
    margin-left: 2%;
  }
`;
const Head = styled.div`
  ${tw` `}
`;

const FirstHeadLayer = styled.div`
  z-index: -1;
  ${tw`text-8xl   opacity-40 w-full font-extrabold `}
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
  ${tw`text-7xl text-gold absolute bottom-0 left-0 font-extrabold w-full `};
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

const ServiceListContainer = styled.div`
  ${tw` flex justify-between items-center w-full  flex-wrap   pr-9      `};
  margin-top: 1%;
  row-gap: 2rem;

  @media (max-width: 1024px) {
    margin-top: 1%;
    row-gap: 2rem;
  }
  @media (max-width: 768px) {
    row-gap: 2rem;
    margin-top: 5%;
  }
  @media (max-width: 550px) {
    padding-right: 0;
  }
  @media (max-width: 486px) {
    margin-top: 5%;
    row-gap: 2rem;
    margin-top: 3rem;
  }
`;
const ServiceList = styled.div`
  position: relative;
  text-align: center;
  z-index: 4;
  background: black;
  border-radius: 20px;
  overflow: hidden;
  display: block;
  width: 30%;
  box-shadow: 0px 0px 10px 0px #daa52091;
  border: 1px solid #daa52070;
  padding-left: 1%;
  padding-right: 1%;

  :hover {
    box-shadow: 0px 0px 40px 6px #daa520;

    @media (max-width: 486px) {
      box-shadow: none;
    }
  }

  ${tw`flex flex-col justify-center items-start m-0 ml-0 space-y-2 mb-0 p-0 rounded border-opacity-40  hover:border-opacity-100 transition duration-500 ease-in-out cursor-pointer `};
  border-radius: 20px;
  @media (max-width: 768px) {
    ${tw`flex flex-col justify-center items-start m-2 ml-0 space-y-2 `};
    min-height: 375px;
  }
  @media (max-width: 1024px) {
    width: 47%;
    ${tw`m-1  p-2 mt-0 `};
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 486px) {
    width: 100%;
    box-shadow: none;
    border: none;
    display: none;
  }
`;
const ServiceList_1 = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 48%;
  }
  @media (max-width: 486px) {
    display: flex;
    width: 100%;
  }
`;

const IconHeadingWrapper = styled.div`
  ${tw`flex justify-start items-end space-x-2 space-y-0   w-full h-full`};
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  transition: all 0.5s;
  opacity: 1;

  @media (max-width: 1024px) {
    margin-bottom: 15%;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 486px) {
    padding: 0%;
    margin-bottom: 0%;
    display: none;
  }
`;

const IconHeadingWrapper_1 = styled.div`
  ${tw`flex justify-start items-end space-x-2 space-y-0   w-full h-full`};
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  transition: all 0.5s;
  opacity: 1;
  width: 100%;

  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 0%;
    margin-bottom: 0%;
    box-shadow: 0px 0px 10px 0px #daa52091;
    border: 1px solid #daa52070;
    border-radius: 15px;
    padding: 4%;
  }
  @media (max-width: 486px) {
    display: flex;
    padding: 0%;
    margin-bottom: 0%;
    box-shadow: 0px 0px 10px 0px #daa52091;
    border: 1px solid #daa52070;
    border-radius: 15px;
    padding: 4%;
  }
`;
const IconWrapper = styled.div`
  ${tw``};

  animation-duration: 1s;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 2%;
  }
  @media (max-width: 768px) {
    padding: 2%;
  }
  @media (max-width: 486px) {
    padding: 2%;
  }
`;

const IconWrapper_1 = styled.div`
  ${tw``};
  animation-duration: 1s;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 2%;
  }
  @media (max-width: 768px) {
    padding: 2%;
  }
  @media (max-width: 486px) {
    padding: 2%;
  }
`;

const Heading = styled.div`
  ${tw`text-gold font-bold text-center`};
  animation-duration: 1s;
  font-size: 2rem;
  font-weight: 900;

  @media (max-width: 768px) {
    ${tw`text-sm h-full`}
  }
  @media (max-width: 425px) {
    ${tw`text-xs`}
  }
  @media (max-width: 320px) {
    font-size: 9px;
    ${tw``}
  }
`;
const Content = styled.p`
  ${tw` text-left text-sm font-light w-full leading-normal `};

  text-align: left;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
  text-align: center;
  opacity: 2;
  margin-top: 10%;
  flex-direction: column;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;

  @media (max-width: 768px) {
    opacity: 2;
    margin-top: 5%;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
  }
  @media (max-width: 486px) {
    margin-top: 8%;
    margin-bottom: 0;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
const SideLine = styled.div`
  ${tw`-ml-0 mt-8  `}
  margin-top:5%;
  /* margin-top: -40rem; */
  @media (max-width: 2000px) {
   margin-top:3%;
  }
  @media (max-width: 1540px) {
   margin-top:4%;
  }
  @media (max-width: 1400px) {
    /* margin-top: -41rem; */
  }
  @media (max-width: 1280px) {
    margin-top:5%;
  }
  @media (max-width: 1024px) {
    margin-top:4%;
  }

  @media (max-width: 850px) {
    margin-top:5%;
  }
  @media (max-width: 768px) {
    ${tw` -ml-16  mt-10`};
    margin-top:5%;
  }
  @media (max-width: 650px) {
    ${tw` -ml-28 `};
  }
  @media (max-width: 650px) {
    ${tw` hidden `};
  }
`;



const Cont = styled.data`
  -moz-transition: all 0.5s;
  transition: all 0.15s;
`;

const mmm = styled.div`
  @media (max-width: 1024px) {
    opacity: 2;
  }
  @media (max-width: 768px) {
    transition: none;
    opacity: 2;
  }

  @media (max-width: 486px) {
    transition: none;
    font-weight: 300;
  }

  @media (max-width: 486px) {
    -webkit-transform: none;
    -moz-transform: none;
    transform: none;
    -moz-transition: none;
    transition: none;
  }
`;
const mmmm = styled.div`
  -webkit-transform: translateY(22%);
  -moz-transform: translateY(22%);
  transform: translateY(22%);
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  :hover {
    transform: translateY(0);

    @media (max-width: 768px) {
      transform: none;
      transition: none;
    }

    @media (max-width: 486px) {
      transform: none;
    }
  }
  &:hover ${Content} {
    opacity: 2;
    transition: 0.5s;
    font-weight: 500;

    @media (max-width: 1024px) {
      opacity: 2;
    }
    @media (max-width: 768px) {
      transition: none;
      opacity: 2;
    }

    @media (max-width: 486px) {
      transition: none;
      font-weight: 300;
    }
  }
  @media (max-width: 768px) {
    -webkit-transform: none;
    -moz-transform: none;
    transform: none;
    -moz-transition: none;
    transition: none;
  }

  @media (max-width: 486px) {
    -webkit-transform: none;
    -moz-transform: none;
    transform: none;
    -moz-transition: none;
    transition: none;
  }
`;

const Image = styled.img`
  margin-left: -15px;
  width: 135px;
  height: 100px;
  padding: 0 1rem;
  object-fit: contain;
`;

const Title = styled.div`
  font-size: 1.4rem;
`;
export {
  Title,
  Cont,
  Image,
  mmm,
  Container,
  ServiceContainer,
  ContentWrapper,
  HeaderWrapper,
  ServiceListContainer,
  ServiceList,
  IconHeadingWrapper,
  IconWrapper,
  Heading,
  Content,
  Head,
  SecHeadLayer,
  FirstHeadLayer,
  SideLine,
  MainHeading,
  IconHeadingWrapper_1,
  mmmm,
  IconWrapper_1,
  ServiceList_1,
};
