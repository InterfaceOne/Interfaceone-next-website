import Head from "next/head";
import * as S from "./eCommerce.style";

const ECommerce = ({ data }) => {
  return (
    <S.Main>
      <Head>
        <title>E-Commerce Services : Interone Technologies</title>
        <link
          rel="canonical"
          href="https://interone.io/service/E-Commerce%20Services"
        />
        <meta
          property="og:title"
          content="E-Commerce Services: Interone Technologies"
        />
        <meta
          property="og:description"
          content="We expertise in ReactJs, NodeJS, UI/UX, Ruby on Rails, DevOps, Fullstack & Digital Transformation services: Interone Technologies"
        />
        <meta
          property="og:url"
          content="https://interone.io/service/E-Commerce%20Services"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Interone Technologies" />
        <meta
          name="keywords"
          content="E-commerce website development,fullstack ecommerce app,reactjs,Interone, Interone Technologies e-commerce solutions , Interone Technologies IT consulting, Interone Technologies software development, e-commerce website development services by Interone Technologies"
        />
      </Head>
      <S.Heading>{data?.title1}</S.Heading>
      <S.ImageContainer>
        <S.Image src={data?.title2Image.url} alt="" />
      </S.ImageContainer>
      <S.Para>{data?.title1Content}</S.Para>
      <S.Para>{data?.title1Cont1}</S.Para>
      <S.FirstContainer>
        <S.Heading>{data?.title2}</S.Heading>
        <S.Container1>
          {data?.title2Json.map((el, index) => (
            <S.Card1 key={index}>
              <S.Title>{el.name}</S.Title>
              <S.Para>{el.para}</S.Para>
            </S.Card1>
          ))}
        </S.Container1>
      </S.FirstContainer>

      <S.SecondContainer>
        <S.Heading>{data?.title3}</S.Heading>
        <S.Container2>
          {data?.title3Json.map((item, index) => (
            <S.Card2 key={index}>
              <S.Img src={item.image} />
              <S.Title>{item.title}</S.Title>
            </S.Card2>
          ))}
        </S.Container2>
      </S.SecondContainer>
    </S.Main>
  );
};
export default ECommerce;
