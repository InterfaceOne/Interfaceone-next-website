import React from "react";
import * as S from "../components/notFound.style";
import AnimatedButton from "../components/common/button/animatedButton";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const NotFound = () => {
  return (
    <S.MainContainer>
      <Head>
        <title>Page Not Found : Interone Technologies</title>
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Page Not Found : Interone Technologies"
        />
        <meta property="og:site_name" content="Interone Technologies" />
        <link rel="canonical" href="https://interone.io/" />
      </Head>
      <S.ImageContainer>
        <S.Image
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 page not found"
        />
      </S.ImageContainer>
      <S.Container>
        <S.Content>
          <S.Header>404 page not found</S.Header>
          <S.Heading>404</S.Heading>
          <S.Paragraph>
            We are sorry but the page you are looking for does not exist.
          </S.Paragraph>
        </S.Content>
        <Link href={`/`}>
          <AnimatedButton buttonname="Go to Home"></AnimatedButton>
        </Link>
      </S.Container>
    </S.MainContainer>
  );
};

export default NotFound;
