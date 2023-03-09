import React, { useEffect, useState, useRef } from "react";
import * as S from "../customers.styles";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import Image from "next/image";

export default function ReviewCards(props) {
  const { tittle } = props;

  const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [isFlipped, setIsFlipped] = useState(false);
  const [rand, setRand] = useState(0);

  const ref = useRef();

  const flipRef = useRef(isFlipped);
  flipRef.current = isFlipped;

  const randomNumberRef = useRef(rand);
  randomNumberRef.current = rand;

  const imageFlip = props.data.frontImages.length - 1;

  useEffect(() => {
    const Interval = setInterval(() => {
      const rnInt = randomInteger(0, imageFlip);
      setIsFlipped(!flipRef.current);
      setRand(rnInt);
    }, 1500);

    return () => {
      clearInterval(Interval);
    };
  }, [imageFlip]);

  return (
    <>
      <S.LogoWrapper>
        {props?.data?.frontImages.map((item, index) => (
          <Flippy
            key={index}
            isFlipped={rand === index && isFlipped}
            flipDirection="horizontal"
            ref={ref}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "black",
            }}
          >
            <FrontSide
              style={{
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "0",
                borderRadius: "5px",
              }}
            >
              <Image
                width={100}
                height={100}
                src={item.img}
                alt="front image"
                unoptimized={true}
                priority
              />
            </FrontSide>
            <BackSide
              style={{
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "0",
                borderRadius: "5px",
              }}
            >
              <Image
                width={100}
                height={100}
                src={props.data.backImages[index].pic}
                alt="back image"
                unoptimized={true}
                priority
              />
            </BackSide>
          </Flippy>
        ))}
      </S.LogoWrapper>
    </>
  );
}
