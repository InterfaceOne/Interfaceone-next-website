import Head from "next/head";
import * as S from "./mobileDevelop.style";

export default function MobileDevelop({ data }) {
  return (
    <>
      <Head>
        <title>Mobile Development : Interone Technologies</title>
        <link
          rel="canonical"
          href="https://interone.io/service/Mobile%20Development"
        />
        <meta
          property="og:title"
          content="Mobile Development : Interone Technologies"
        />
        <meta
          property="og:description"
          content="We expertise in ReactJs, NodeJS, UI/UX, Ruby on Rails, DevOps, Fullstack & Digital Transformation services: Interone Technologies"
        />
        <meta
          property="og:url"
          content="https://interone.io/service/Mobile%20Development"
        />
        <meta
          name="keywords"
          content="Mobile app development, software web app, fullstack interone app,interone technologies,bangalore software company,MERN,MEAN,reactjs"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Interone Technologies" />
      </Head>
      <S.Main>
        <S.FirstContainer>
          <S.Heading>{data?.headding1}</S.Heading>
          <S.ImageContainer>
            <S.Image1 src={data?.image1?.url} alt="" />
          </S.ImageContainer>
        </S.FirstContainer>

        <S.SecondContainer>
          <S.Heading>{data?.title2}</S.Heading>
          <S.Container>
            <S.Paragraph>{data?.title2Content}</S.Paragraph>
            <S.Paragraph>{data?.title2Cont1}</S.Paragraph>
          </S.Container>
        </S.SecondContainer>
        <S.ThirdContainer>
          <S.Heading>{data?.title3}</S.Heading>
          <S.ImageContainer>
            <S.Image1 src={data?.imageKey.url} alt="" />
          </S.ImageContainer>
        </S.ThirdContainer>
        <S.FourthContainer>
          <S.Heading>{data?.title4}</S.Heading>
          <S.Paragraph>{data?.title4Content}</S.Paragraph>
        </S.FourthContainer>
        <S.FifthContainer>
          <S.Heading>{data?.title5}</S.Heading>
          <S.Paragraph>{data?.title5Content}</S.Paragraph>
          <S.CardContainer>
            {data?.mobileappJson.map((item, index) => (
              <S.Card key={index}>
                <S.Image src={item.image} alt="" />
                <S.Title>{item.title}</S.Title>
                <S.Content>{item.content}</S.Content>
              </S.Card>
            ))}
          </S.CardContainer>
        </S.FifthContainer>
        <S.SixthContainer>
          <S.Heading>{data?.title6}</S.Heading>
          <S.Paragraph>{data?.title6Content}</S.Paragraph>
          <S.Heading>{data?.title7}</S.Heading>
          <S.ImageContainer>
            <S.Image1 src={data?.title7Image.url} alt="" />
          </S.ImageContainer>
        </S.SixthContainer>
        <S.SeventhContainer>
          <S.Heading>{data?.title8}</S.Heading>
          <S.Paragraph>{data?.title8Content}</S.Paragraph>
          <S.ImageContainer>
            <S.Image2 src={data?.title8Image?.url} alt="" />
          </S.ImageContainer>
        </S.SeventhContainer>
      </S.Main>
    </>
  );
}
