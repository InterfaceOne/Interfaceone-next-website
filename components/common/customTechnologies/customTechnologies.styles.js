import styled from "styled-components";

const Technologies = styled.div``;

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: black;
  width: inherit;
  align-items: center;
`;

const TransformationJourney = styled.div`
  position: relative;
  width: 42rem;
  height: 50rem;
  margin: 0 auto;

  @media (max-width: 1540px) {
    width: 23rem;
    height: 23rem;
  }

  @media (max-width: 1024px) {
    width: 23rem;
    height: 23rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
  @media (max-width: 550px) {
    /* width: 15rem;
    height: 20rem; */
    display: none;
  }
`;
const Circle = styled.div`
  position: absolute;
  width: 94%;
  height: 95%;
  border-radius: 50%;
  border: 5px solid goldenrod;
  cursor: pointer;

  @media (max-width: 1540px) {
    border: 3px solid goldenrod;
  }

  @media (max-width: 1024px) {
    border: 3px solid goldenrod;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
  }
`;
const Content = styled.div`
  margin-left: 5rem;
  margin-top: -39rem;
  width: 48rem;
  height: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(300px);
  opacity: 0;
  color: goldenrod;
  text-align: left;

  &:hover {
    display: none;
  }

  @media (max-width: 1540px) {
    width: 21rem;
    margin-left: 3rem;
    margin-top: -26rem;
  }

  @media (max-width: 1024px) {
    width: 21rem;
    margin-left: 3rem;
    margin-top: -26rem;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    width: 12rem;
    margin-left: 3rem;
  }
  @media (max-width: 400px) {
    width: 8rem;
  }
`;
const MobileDetails = styled.div`
  position: absolute;
  z-index: 1;
  background-color: black;
  top: -3rem;
  left: 17rem;

  @media (max-width: 1540px) {
    width: 3rem;
    height: 3rem;
    margin-left: -8rem;
    margin-top: 1rem;
  }

  @media (max-width: 1024px) {
    width: 3rem;
    height: 3rem;
    margin-left: -8rem;
    margin-top: 1rem;
  }
  @media (max-width: 550px) {
    width: 2rem;
    height: 3rem;
    margin-left: -12rem;
  }

  &:hover ${Content} {
    width: 46rem;
    height: 23.2rem;
    transform: translateY(0);
    opacity: 1;
    text-align: left;
    padding-top: 5%;
    margin-left: 11%;
    padding-left: 2%;
    margin-top: 4%;
    background-color: black;

    @media (max-width: 1540px) {
      width: 21rem;
      height: 10.4rem;
      margin-left: 3rem;
    }

    @media (max-width: 1024px) {
      max-width: 21rem;
      height: 11.4rem;
      margin-left: 3rem;
    }
    @media (max-width: 550px) {
      width: 12rem;
      height: 9.15rem;
      margin-left: 3.2rem;
      padding-top: 0.5rem;
    }

    @media (max-width: 400px) {
      width: 9rem;
      margin-left: 3rem;
      padding-top: 2rem;
    }
  }
`;
const IconJourney = styled.div`
  position: absolute;
  background-color: black;
  text-align: center;
  line-height: 50px;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 5rem;
  height: 6rem;

  @media (max-width: 1540px) {
    width: 45px;
    height: 45px;
    margin-left: 0rem;
    margin-top: 0rem;
  }

  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    width: 35px;
    margin-left: 1rem;
  }
  @media (max-width: 400px) {
    width: 32px;
  }
`;
const Icon = styled.img`
  width: 75px;
  height: 75px;

  @media (max-width: 1540px) {
    flex-basis: 100%;
    height: 50px;
  }
  @media (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    width: 30px;
    height: 35px;
  }
`;

const Heading = styled.div`
  font-size: 3rem;
  font-weight: 900;

  @media (max-width: 1540px) {
    font-size: 25px;
  }

  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    font-size: 13px;
  }
  @media (max-width: 400px) {
    font-size: 7px;
    padding-bottom: 0rem;
  }
`;
const Para = styled.div`
  line-height: 2rem;
  font-size: 1.3rem;
  padding-bottom: 4%;

  @media (max-width: 1540px) {
    font-size: 0.7rem;
    line-height: 1rem;
  }

  @media (max-width: 1024px) {
    font-size: 0.7rem;
    line-height: 1rem;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    font-size: 0.4rem;
    line-height: 0.7rem;
  }
  @media (max-width: 400px) {
    font-size: 6px;
    line-height: 0.5rem;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  background-color: goldenrod;
  padding: 1%;
  border-radius: 1rem;

  @media (max-width: 1540px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    width: 25px;
    height: 25px;
  }
`;

const Content1 = styled.div`
  margin-left: -46rem;
  margin-top: -26rem;
  background-color: black;
  width: 45rem;
  height: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(300px);
  opacity: 0;
  color: goldenrod;
  text-align: right;

  &:hover {
    display: none;
  }

  @media (max-width: 1540px) {
    margin-top: -24rem;
    max-width: 21rem;
    margin-left: -29rem;
    height: 10rem;
    padding-top: 0%;
  }
  @media (max-width: 1024px) {
    width: 19rem;
    margin-left: -28rem;
    margin-top: -24rem;
  }
  @media (max-width: 550px) {
    width: 12rem;
    margin-left: -24rem;
  }
  @media (max-width: 400px) {
    width: 9rem;
    margin-left: -20rem;
  }
`;

const DBDetails = styled.div`
  position: absolute;
  z-index: 1;
  background-color: black;
  top: -3rem;
  left: 17rem;

  &:hover ${Content1} {
    width: 46rem;
    height: 24rem;
    transform: translateY(0);
    opacity: 1;
    text-align: right;
    padding-top: 5rem;
    padding-right: 1rem;
    margin-top: 0rem;
    background-color: black;

    @media (max-width: 1540px) {
      max-width: 21rem;
      margin-left: -29rem;
      margin-top: 2rem;
      height: 10rem;
      padding-top: 0%;
    }
    @media (max-width: 1024px) {
      max-width: 21rem;
      margin-left: -29rem;
      margin-top: 2rem;
      height: 10rem;
      padding-top: 0%;
    }
    @media (max-width: 550px) {
      width: 13rem;
      margin-left: -24rem;
      height: 8rem;
      background-color: black;
    }
    @media (max-width: 400px) {
      width: 9rem;
      height: 7rem;
      padding-top: 0.5rem;
      margin-left: -20rem;
    }
  }
`;
const IconJourney1 = styled.div`
  position: absolute;
  background-color: black;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  z-index: 2;
  display: flex;
  align-items: center;
  top: 24rem;
  left: -20rem;
  width: 5rem;
  height: 6rem;

  @media (max-width: 1540px) {
    margin-top: -12rem;
    width: 4rem;
    height: 4rem;
    margin-left: 1.4rem;
  }
  @media (max-width: 1024px) {
    margin-top: -12rem;
    width: 4rem;
    height: 4rem;
    margin-left: 1.4rem;
  }
  @media (max-width: 550px) {
    margin-top: -14rem;
    width: 2rem;
    height: 3rem;
    margin-left: 2rem;
  }
`;
const BackendDetails = styled.div`
  position: absolute;
  z-index: 1;
  width: 45rem;
  height: 23rem;
  margin-left: -23rem;
  bottom: -4rem;

  @media (max-width: 1540px) {
    position: absolute;
    z-index: 1;
    width: 4rem;
    height: 5rem;
    margin-left: 9rem;
    bottom: -2rem;
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 1;
    width: 4rem;
    height: 5rem;
    margin-left: 9rem;
    bottom: -2rem;
  }
  @media (max-width: 550px) {
    width: 12rem;
  }
  @media (max-width: 400px) {
    width: 10rem;
    margin-left: -10rem;
    margin-top: -21rem;
  }
`;
const Heading2 = styled.div`
  font-size: 3rem;
  font-weight: 900;

  @media (max-width: 1540px) {
    font-size: 25px;
  }

  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 550px) {
    font-size: 13px;
  }
  @media (max-width: 400px) {
    font-size: 7px;
    padding-bottom: 0rem;
  }
`;
const Content2 = styled.div`
  margin-left: -47rem;
  text-align: right;
  margin-bottom: 22rem;
  margin-top: -22rem;
  width: 46rem;
  height: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(21rem);
  opacity: 0;
  color: goldenrod;

  :hover {
    display: none;
  }

  @media (max-width: 1540px) {
    max-width: 20rem;
    margin-left: -20.5rem;
    margin-top: -23rem;
    height: 10rem;
  }
  @media (max-width: 1024px) {
    width: 24rem;
    margin-left: -20.5rem;
  }
  @media (max-width: 550px) {
    width: 12rem;
    margin-left: -13rem;
  }
  @media (max-width: 400px) {
    width: 9rem;
    margin-left: -9rem;
    height: 9rem;
    padding-top: 0rem;
  }
`;
const IconJourney2 = styled.div`
  position: absolute;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  z-index: 2;
  width: 6rem;
  padding-left: 10px;
  padding-right: 10px;
  left: 40rem;
  background-color: black;
  bottom: 1rem;
  top: 16rem;

  @media (max-width: 1540px) {
    margin-left: -40rem;
    margin-top: -15rem;
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 1024px) {
    margin-left: -40rem;
    margin-top: -15rem;
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 550px) {
    margin-left: -44rem;
    margin-top: -14rem;
    width: 3rem;
    height: 3rem;
  }
  @media (max-width: 400px) {
    margin-left: -25rem;
  }
  &:hover ${Content2} {
    width: 47rem;
    height: 23rem;
    transform: translateY(-22rem);
    opacity: 1;
    text-align: right;
    background-color: black;
    margin-left: -47rem;
    margin-top: 0rem;
    padding-right: 1rem;
    padding-top: 1rem;

    @media (max-width: 1540px) {
      max-width: 21rem;
      margin: 0;
      margin-top: 12rem;
      margin-left: -21rem;
      height: 12rem;
      padding-top: 0rem;
    }

    @media (max-width: 1024px) {
      max-width: 21rem;
      margin: 0;
      margin-top: 12rem;
      margin-left: -21rem;
      height: 12rem;
      padding-top: 0rem;
    }
    @media (max-width: 550px) {
      width: 12rem;
      height: 10rem;
      margin-left: -12rem;
      margin-top: 12rem;
    }
    @media (max-width: 400px) {
      width: 9rem;
      margin-left: -9rem;
      height: 9rem;
      padding-top: 0rem;
    }
  }
`;

const FrontendDetails = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 28rem;
  height: 25rem;
  margin-left: 23rem;

  @media (max-width: 1540px) {
    width: 5rem;
    height: 5rem;
    margin-left: 19rem;
    margin-bottom: 8rem;
  }
  @media (max-width: 1024px) {
    width: 5rem;
    height: 5rem;
    margin-left: 19rem;
    margin-bottom: 12rem;
  }
  @media (max-width: 400px) {
    width: 3rem;
    height: 3rem;
    margin-left: 12rem;
    margin-bottom: 8rem;
  }
`;
const Content3 = styled.div`
  margin-left: 14rem;
  width: 44rem;
  height: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(100px);
  opacity: 0;
  color: goldenrod;
  background-color: black;
  text-align: left;

  &:hover {
    display: none;
  }

  @media (max-width: 1540px) {
    width: 19rem;
    margin-right: 11rem;
  }
  @media (max-width: 1300px) {
    margin-top: 0;
  }
  @media (max-width: 1024px) {
    width: 19rem;
    margin-right: 11rem;
  }
  @media (max-width: 550px) {
    width: 12rem;
  }
  @media (max-width: 400px) {
    margin-left: 8rem;
    width: 8rem;
  }
`;
const IconJourney3 = styled.div`
  position: absolute;
  background-color: black;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 5rem;
  padding-top: 2%;
  padding-bottom: 2%;
  right: 9rem;
  top: 0rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1540px) {
    margin-right: -9rem;
    padding: 0.5rem;
  }
  @media (max-width: 1024px) {
    margin-right: -9rem;
    margin-top: 5rem;
    padding: 0.5rem;
  }
  @media (max-width: 550px) {
    margin-right: -1.5rem;
    margin-top: 6rem;
  }
  @media (max-width: 400px) {
    margin-right: -9rem;
    width: 3rem;
    margin-top: 0rem;
  }

  &:hover ${Content3} {
    width: 47rem;
    height: 21rem;
    transform: translateY(0);
    opacity: 1;
    text-align: left;
    background-color: black;
    margin-left: 14rem;
    margin-top: 1rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    padding-right: 2rem;

    @media (max-width: 1540px) {
      width: 22rem;
      height: 14rem;
      margin-left: 8em;
      margin-top: 0;
      padding-top: 1rem;
    }
    @media (max-width: 1024px) {
      width: 22rem;
      height: 14rem;
      margin-left: 8em;
      margin-top: 0;
      padding-top: 1rem;
    }
    @media (max-width: 550px) {
      width: 14rem;
      height: 9.5rem;
      margin-left: 12rem;
    }
    @media (max-width: 400px) {
      width: 10rem;
      margin-left: 10rem;
      padding-right: 0rem;
      padding-left: 0.5rem;
    }
  }
`;

const MobileTransformation = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 550px) {
    display: block;
  }
`;
const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  text-align: center;
  margin-bottom: 2rem;
  width: 100%;

  @media (max-width: 550px) {
    box-shadow: 0px 3px 5px 2px goldenrod;
    border-radius: 17%;
    padding: 4%;
    margin-bottom: 15%;
  }
`;
const IconContainer = styled.div`
  padding: 1rem;
`;
const IconImage = styled.img`
  width: 120px;
  height: 100px;
`;
const CardContent = styled.div``;
const Header = styled.h4`
  color: goldenrod;
  font-size: 25px;
  font-weight: 900;
`;
const Paragraph = styled.p`
  color: goldenrod;
  font-size: 15px;
  margin-bottom: 1rem;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Images = styled.img`
  width: 30px;
  height: 30px;
  background-color: goldenrod;
  border-radius: 5px;
  padding: 3px;
`;

const AnimationCircle = styled.div`
  width: 30px;
  height: 30px;
  background: goldenrod;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  margin: auto;
  animation: circle 6s linear infinite;

  @keyframes circle {
    from {
      transform: rotate(0deg) translateX(170px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translateX(170px) rotate(-360deg);
    }
  }

  @media (min-width: 1540px) {
    display: none;
  }
`;

export {
  ImageContainer,
  AnimationCircle,
  Images,
  IconContainer,
  IconImage,
  CardContent,
  Header,
  Paragraph,
  CardDetails,
  MobileTransformation,
  IconJourney3,
  Heading2,
  Content3,
  Technologies,
  FrontendDetails,
  IconJourney2,
  BackendDetails,
  Main,
  TransformationJourney,
  Circle,
  DBDetails,
  MobileDetails,
  IconJourney,
  Icon,
  Content,
  Para,
  Heading,
  Container,
  Content1,
  Image,
  IconJourney1,
  Content2,
};
