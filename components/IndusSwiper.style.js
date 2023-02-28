import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const SwiperCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 21rem;
`;
const Image = styled.img`
  width: 100%;
  height: 21rem;
  border-radius: 20px;

  @media screen and (max-width: 486px) {
    width: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    height: 19rem;
  }
`;
const ImageContainer = styled.div`
  flex-basis: 25%;

  @media screen and (max-width: 1280px) {
    flex-basis: 25%;
  }
  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    filter: brightness(0.5);
    position: absolute;
    height: -webkit-fill-available;
  }

  @media screen and (max-width: 486px) {
    flex-basis: 100%;
    filter: brightness(0.5);
    position: absolute;
    height: -webkit-fill-available;
  }
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 65%;
  border: 2px solid gold;
  padding: 1%;
  border-radius: 18px;

  @media screen and (max-width: 1024px) {
    flex-basis: 60%;
    height: 21rem;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    flex-basis: 90%;
    border: none;
    padding: 2%;
  }
  @media screen and (max-width: 486px) {
    position: relative;
    flex-basis: 99%;
    border: none;
    padding: 2%;
  }
`;
const Number = styled.div`
  display: flex;
`;
const BigNum = styled.div`
  font-size: 65px;
  color: goldenrod;
  font-weight: 600;

  background: linear-gradient(130deg, #daa520, #100303, #daa520);
  background-size: 80%;
  -webkit-animation: animate 1.5s linear infinite;
  animation: animate 3.5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
  @media screen and (max-width: 1300px) {
    font-size: 65px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 55px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 50px;
  }

  @media screen and (max-width: 768px) {
    font-size: 45px;
  }
  @media screen and (max-width: 486px) {
    font-size: 30px;
  }
`;
const SmallNum = styled.div`
  font-size: 26px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.01px;
  color: #c6c6c6;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1300px) {
    font-size: 30px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 28px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 486px) {
    font-size: 15px;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: goldenrod;
  background: linear-gradient(90deg, #ffffff, #daa520, #ffffff);
  background-size: 80%;
  -webkit-animation: animate 2.5s linear infinite;
  animation: animate 3.5s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 44px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 38px;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 486px) {
    font-size: 1.8rem;
    font-weight: 700;
  }
`;
const Content = styled.div`
  font-size: 17px;
  font-weight: 800;
  margin-top: 3%;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 486px) {
    font-size: 12px;
  }
`;

const Paragraph = styled.span`
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }
  @media screen and (max-width: 486px) {
    font-size: 15px;
    font-weight: 500;
  }
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    padding-left: 2%;
  }
`;
export {
  Container,
  SwiperCard,
  Image,
  Card,
  Number,
  BigNum,
  SmallNum,
  Title,
  Content,
  ImageContainer,
  Paragraph,
};
