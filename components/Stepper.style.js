import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;

  width: 100%;
  cursor: pointer;
`;
const ColMd2 = styled.div`
  @media (min-width: 1445px) {
    /* flex: 0 0 16.666667%;
    max-width: 16.666667%; */
  }
`;
const Main = styled.div`
  @media (min-width: 1445px) {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
`;
const Column = styled.div`
  @media (min-width: 1445px) {
    flex: 0 0 auto;
    width: auto;
    max-width: 100%;
  }
`;
const NoGutters = styled.div`
  margin-right: 0;
  margin-left: 0;
`;

const MethodologyPulsatebck = styled.div`
  animation: pulsate-bck 0.5s ease-in-out infinite both;
  background: rgb(255, 196, 0);
  border-color: rgb(255, 196, 0);

  @keyframes pulsate-bck {
    0% {
      transform: translateX(-50%) scale(1);
    }

    50% {
      transform: translatex(-50%) scale(0.9);
    }

    to {
      transform: translateX(-50%) scale(1);
    }
  }
`;

// const MethodologyWrapper h2[data-v-18c432d0] {
//   margin-bottom: 0.5rem;
// }

const MethodologyCaption = styled.div`
  color: hsla(0, 0%, 100%, 0.6);
  width: 70%;
`;

const MethodologystepsWrapper = styled.div`
  padding: 50px 0;
  @media (max-width: 769px) {
    padding: 50px;
  }
  @media (max-width: 374px) {
    margin-top: 4rem;
  }
`;

const StepWrapper = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 300px;
  @media (max-width: 769px) {
    height: auto;
  }

  &:before {
    content: "";
    position: absolute;
    left: -64px;
    right: 0;
    top: 50px;
    height: 1px;
    background: #3c3c3c;
    
    @media (min-width: 1440px) {
      left: -85px;
    }
    @media (max-width: 768px) {
      left: -10px;
    }
    
  }
`;
const CoreCircle = styled.div`
  width: 18px;
  height: 20px;
  border-radius: 50%;
  background: rgb(255, 196, 0);
  border: rgb(255, 196, 0);
  transition: all 0.3s;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;

  margin: auto;
  animation: pulse 2s infinite;
  ${StepWrapper}:hover & {
    display: block;
    animation: none;
  }
  ${StepWrapper}:hover & {
    background: white !important;
    border: 4px solid rgb(255, 196, 0);
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    14% {
      transform: scale(1.2);
    }
    28% {
      transform: scale(1);
    }
    42% {
      transform: scale(1.2);
    }
    70% {
      transform: scale(1);
    }
  }
`;

const CentricCircle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  ${StepWrapper}:hover & {
    display: block;
  }
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: 0 0;
  border: 1px solid rgb(204, 204, 204);

  animation-name: myPulse1;

  animation-duration: 0.5s;

  animation-fill-mode: both;

  animation-timing-function: ease-in-out;
  @keyframes myPulse1 {
    0% {
      width: 0;
      height: 0;
    }

    50% {
      width: 40px;
      height: 40px;
    }

    to {
      width: 40px;
      height: 40px;
    }
  }
`;

const CentricCircle2 = styled.div`
  position: absolute;
  left: -11px;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  ${StepWrapper}:hover & {
    display: block;
  }
  display: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: 0 0;
  border: 1px solid rgb(204, 204, 204);
  animation-duration: 0.5s;

  animation-fill-mode: both;

  animation-timing-function: ease-in-out;
  animation-delay: 0.3ms;
  animation-name: myPulse2;
  @keyframes myPulse2 {
    0% {
      width: 0;
      height: 0;
    }

    50% {
      width: 60px;
      height: 60px;
    }

    to {
      width: 60px;
      height: 60px;
    }
  }
`;

const CentricCircle3 = styled.div`
  position: absolute;
  left: -11px;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  ${StepWrapper}:hover & {
    display: block;
  }
  display: none;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: 0 0;
  border: 1px solid rgb(204, 204, 204);
  /* animation: none; */
  animation-duration: 0.5s;

  animation-fill-mode: both;

  animation-timing-function: ease-in-out;
  animation-delay: 0.6ms;

  animation-name: myPulse3;
  @keyframes myPulse3 {
    0% {
      width: 0;
      height: 0;
    }

    50% {
      width: 80px;
      height: 80px;
    }

    to {
      width: 80px;
      height: 80px;
    }
  }
`;

const stepalwaysCenterWrapper = styled.div`
  position: relative;
  margin: 20px auto;
`;

const StepNumber = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 50%;
  transform: translateY(-50%);
  font-size: 4.5rem;
  font-weight: 700;
  color: rgb(89, 89, 89);
  transition: all 0.5s ease-in-out;
  ${StepWrapper}:hover & {
    margin-top: -1rem;
    transform: translateY(-110%);
  }
`;

const CenterSquare = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background: 0 0;
  left: 0;
  right: 0;
  margin: 20px auto;
  display: flex;
  transition: all 0.3s;
  ${StepWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const StepHeader = styled.div`
  font-size: 18px;
  font-weight: 300;
  position: relative;
  padding: 10px;
  margin: 10px auto;
  transition: all 0.3s ease-in-out;
  color: white;
  font-family: sans-serif;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 0;
    height: 2px;
    transition: all 0.5s;
  }
  ${StepWrapper}:hover & {
    font-weight: bold;
    color: rgb(255, 196, 0);
  }
  /* ${StepWrapper}:hover & :before {
    width: 20%;
  } */
`;

const StepContent = styled.div`
  display: none;
  font-weight: 300;
  line-height: 1.5rem;
  font-family: sans-serif;

  ${StepWrapper}:hover & {
    display: block;
  }
`;

const StepContentWrapper = styled.div`
  margin-top: -20px;
  width: 12rem;
`;
export {
  Row,
  NoGutters,
  Main,
  ColMd2,
  Column,
  MethodologyPulsatebck,
  MethodologyCaption,
  MethodologystepsWrapper,
  StepWrapper,
  CoreCircle,
  CentricCircle,
  CentricCircle2,
  CentricCircle3,
  stepalwaysCenterWrapper,
  StepNumber,
  CenterSquare,
  StepHeader,
  StepContent,
  StepContentWrapper,
};
