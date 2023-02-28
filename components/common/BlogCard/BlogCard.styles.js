import styled from "styled-components";
import tw from "twin.macro";

const Card = styled.div`
  /* ${tw` grid h-full justify-items-start items-center  border border-gold p-3  rounded-lg hover:bg-gold hover:bg-opacity-30 transition duration-300 ease-in-out overflow-hidden`};
  z-index: 10;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  max-width: 90%;
  max-height: 90%;
  & > p > :not(:first-child) {
    display: none;
  } */
  @media(min-width: 770px){
    ${tw` grid h-full justify-items-start items-center  border border-gold p-3  rounded-lg hover:bg-gold hover:bg-opacity-30 transition duration-300 ease-in-out overflow-hidden`};
    z-index: 10;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1fr;
    max-width: 350px;
    min-height: 332px;
    max-height: 332px;
    & > p > :not(:first-child) {
      display: none;
    }
    border:1px solid goldenrod
  }

  @media (max-width: 768px) {
    ${tw` grid h-full justify-items-start items-center  border border-gold p-3  rounded-lg hover:bg-gold hover:bg-opacity-30 transition duration-300 ease-in-out overflow-hidden`};
    z-index: 10;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1fr;
    max-width: 350px;
    min-height: 332px;
    max-height: 332px;
    & > p > :not(:first-child) {
      display: none;
    }
  }
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 100%;
    ${tw`p-3`}
  }
`;

const ImageWrapper = styled.div`
  ${tw`w-full mb-1`};
`;

const Image = styled.img`
  ${tw`w-full rounded-lg `};
  z-index: 10;
  height: 12em;

  @media (max-width: 768px) {
    max-height: 200px;
    min-height: 200px;
  }
`;
const Title = styled.h1`
  ${tw`text-lg text-gold`};
  z-index: 10;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  position: relative;
  font-weight: 700;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
  }

`;
const Description = styled.p`
  ${tw`text-white w-full`};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  position: relative;

  @media (max-width: 768px) {
    ${tw`text-white w-full h-full`};
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    position: relative;
  }
`;

const Details = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  position: relative;
  width: 100%;

  @media (max-width: 770px) {
    overflow: hidden;
  }
`;

export { Card, ImageWrapper, Description, Image, Details, Title };
