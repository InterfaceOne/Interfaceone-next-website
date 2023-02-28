import styled from "styled-components";
import tw from "twin.macro";
import { Swiper } from "swiper/react";

const Container = styled.div`
  ${(props) => (props.direction ? tw`h-96` : tw`h-auto`)};
  height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 65%;
    justify-content: space-around;
    border: 2px solid goldenrod;
    border-radius: 15px;
    margin-left: 28%;
    box-shadow: -1px 0px 40px -7px goldenrod;

    @media (max-width: 1850px) {
      width: 70%; 
      margin-left: 20%;
}

  @media (max-width: 1024px) {
    width: 80%;
    margin-left: 10%;
    justify-content: center;
    margin-top: 7%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0%;
    margin-top: 7%;
    justify-content: center;
  }
  @media (max-width: 486px) {
   width:100%
  }
`;

const SwiperContainer = styled(Swiper)`
  ${tw`w-full h-full `}

  & .swiper-pagination-bullet {
    background-color: ${(props) =>
      props.bulletBgColor ? props.bulletBgColor : "red"};
  }

  & .swiper-pagination-bullet-active {
    background-color: ${(props) =>
      props.bulletActiveBgColor ? props.bulletActiveBgColor : "blue"};
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 87%;
  }
  & .swiper-button-prev {
    color: ${(props) =>
      props.arrowLeftColor ? props.arrowLeftColor : "yellow"};
    ::after {
      font-size: 2rem;
    }
  }
  & .swiper-button-next {
    color: ${(props) =>
      props.arrowRightColor ? props.arrowRightColor : "yellow"};
    ::after {
      font-size: 2rem;
    }
  }
  .swiper-pagination-bullets {
    @media (max-width: 520px) {
      right: 2px;
    }
  }
`;

export { Container, SwiperContainer };
