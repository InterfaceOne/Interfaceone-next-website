import TestingCards from "./testingcards";
import * as S from "./testing.style";
import Head from "next/head";

const TestingServices = ({data}) => {
  return (
    <>
      <Head>
        <title>Testing Services : Interone Technologies</title>
        <link
          rel="canonical"
          href="https://interone.io/service/Testing%20Services"
        />
        <meta
          property="og:title"
          content="Testing Services : Interone Technologies"
        />
        <meta
          property="og:description"
          content="We expertise in ReactJs, NodeJS, UI/UX, Ruby on Rails, DevOps, Fullstack & Digital Transformation services: Interone Technologies"
        />
        <meta
          property="og:url"
          content="https://interone.io/service/Testing%20Services"
        />
        <meta
          name="keywords"
          content="Testing services,Interone, Interone Technologies, fullstack development, software solutions,web app development,testing web apps"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Interone Technologies" />
      </Head>
      <S.Main>
        <S.Container1>
          <S.Header>{data?.title1}</S.Header>
          <S.Paragraph>{data?.title1Content}</S.Paragraph>
        </S.Container1>
        <S.Container2>
          <S.Full>
            <S.Validate>
              <S.Header>{data?.title2}</S.Header>
              <S.Heading>{data?.title2SubContent}</S.Heading>
              <S.Paragraph>{data?.title2Content}</S.Paragraph>
            </S.Validate>
          </S.Full>

          <S.EnsureContainer>
            <S.Ensure>
              <S.Header>{data?.title3}</S.Header>
              <S.Heading>{data?.title3SubContent}</S.Heading>
              <S.Paragraph>{data?.title3Content}</S.Paragraph>
            </S.Ensure>
            {/* <S.Image src={data?.testingImage?.url} alt="" /> */}
          </S.EnsureContainer>
        </S.Container2>
        <S.Container3>
          {data?.testingCard.map((item, index) => (
            <TestingCards
              key={index}
              image={item.image}
              title={item.title}
              cont={item.cont}
            />
          ))}
        </S.Container3>
      </S.Main>
    </>
  );
};
export default TestingServices;
