import styled from "styled-components";
import tw from "twin.macro";

const BoldText = styled.div`
  ${tw`text-lg text-gold font-bold inline-block`}
`;
const Paragraph = styled.div`
  ${tw`text-lg text-white font-normal`}
`;
const Heading2 = styled.h2`
  ${tw`text-xl text-gold font-bold`}
`;
const UL = styled.ul`
  ${tw`text-lg text-white font-normal ml-5`};
  list-style: disc;
  color: gold;
`;
const OL = styled.ol`
  ${tw`text-lg text-white font-normal ml-5`};
  list-style: decimal;
  color: gold;
`;
const HyperLink = styled.a`
  text-decoration: underline;
  text-decoration-color: #ffc400;
  ${tw`text-gold`}
`;
const Container = styled.div`
  ${tw`text-white w-full h-full flex justify-start space-x-3 items-start flex-wrap px-20 relative`}
  background-color:black;
  @media (max-width: 768px) {
    ${tw`space-x-0 px-5 justify-center`}
  }
`;
const BlogWrapper = styled.div`
  flex-basis: 100%;
  margin-top: 15%;
  ${tw`space-y-6 `}
  @media(max-width:1024px) {
    margin-top: 20%;
  }

  @media (max-width: 768px) {
    flex-basis: 95%;
    ${tw`w-full`}
  }
  @media (max-width: 310px) {
    margin-top: 30%;
  }
`;
const Title = styled.h1`
  ${tw` text-gold font-bold leading-normal text-left`}
  font-size: clamp(2rem,calc(2rem + 1.2vw),3rem);

  @media (max-width: 768px) {
    ${tw``}
  }
`;
const ProfileWrapper = styled.div`
  ${tw`flex justify-between items-center`};
`;
const Profile = styled.div`
  ${tw`h-full flex justify-center items-center  `};
  @media (max-width: 768px) {
    ${tw`flex justify-start  items-center `}
  }
`;
const ProfileImage = styled.div`
  overflow: hidden;
  max-width: 5rem;
  max-height: 5rem;
  min-width: 5rem;
  min-height: 5rem;
  ${tw`h-full flex justify-center items-center`}
`;
const AuthorImage = styled.img`
  transform: scale(1);

  border-radius: 50%;
  ${tw`w-full h-full border-2 p-1 border-gold `}
  @media (max-width: 768px) {
    ${tw`-ml-0`}
  }
`;
const NameDate = styled.div`
  ${tw`h-full ml-4 space-y-2 w-full `}
`;
const Name = styled.h4`
  ${tw`h-full font-medium  text-gold`}
  @media (max-width: 360px) {
    ${tw`text-base`}
  }
`;
const Date = styled.p`
  ${tw`h-full`};
  @media (max-width: 360px) {
    ${tw`text-sm`}
  }
`;
const SocialMedia = styled.div`
  ${tw`flex justify-between items-center space-x-6 `};
  @media (max-width: 500px) {
    ${tw`flex-col justify-center items-center space-x-0 space-y-2`}
    display: contents;
  }
`;
const Icon = styled.div`
  ${tw``};
`;
const ImageWrapper = styled.div`
  ${tw` flex justify-center items-center rounded-lg`};
  /* max-height: 25rem; */
  max-width: 100%;
`;
const Image = styled.img`
  ${tw`w-auto rounded-lg  `};
  max-height: 25rem;
  max-width: 100%;
`;
const Content = styled.div`
  ${tw`w-full text-left border border-gold rounded-lg p-5`};
  font-size: min(max(1rem, 4vw), 22px);
`;

const ProfileIcon = styled.div`
  ${tw` flex items-center w-full justify-center space-x-6  `}
`;
const EmbeddedAssetImageWrapper = styled.div`
  max-height: 25rem;
  max-width: 100%;
  ${tw`flex justify-center items-center flex-col`}
`;
const EmbeddedAssetImage = styled.img`
  ${tw`h-auto  w-auto block`};
  max-height: 25rem;
  max-width: 100%;
`;
const Source = styled.a`
  ${tw`text-gold font-light underline hover:text-white  transition duration-300 ease-in-out`};
  font-size: min(max(1rem, 4vw), 22px);
`;

const QuestionWrapper = styled.div`
  width: 100%;
  margin: 2%;
`;
const Question = styled.div`
  ${tw`flex flex-col items-center `}
`;
const QuestionText = styled.div`
  ${tw`text-gold text-4xl font-semibold`}
  margin-bottom:1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
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
const LikeShare = styled.div`
  height: 28px;
`;

const RouteButton =styled.div`
&:hover{
  cursor:pointer;
}
`

export {
  BoldText,RouteButton,
  LikeShare,
  QuestionWrapper,
  QuestionText,
  Question,
  Paragraph,
  HyperLink,
  Container,
  BlogWrapper,
  Title,
  ProfileWrapper,
  Profile,
  ProfileImage,
  AuthorImage,
  NameDate,
  Name,
  Date,
  SocialMedia,
  Icon,
  ImageWrapper,
  Image,
  Content,
  ProfileIcon,
  EmbeddedAssetImage,
  EmbeddedAssetImageWrapper,
  Source,
  Heading2,
  UL,
  OL,
};
