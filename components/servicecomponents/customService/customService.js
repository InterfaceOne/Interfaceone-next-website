import { customService } from "@/queries";
import Head from "next/head";
import * as S from "./customService.style";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

const CustomService = ({ data }) => {
  return (
    <>
      <Head>
        <title>UI & UX Design : Interone Technologies</title>
        <link
          rel="canonical"
          href="https://interone.io/service/UI%20&%20UX%20Design"
        />
        <meta
          property="og:title"
          content="UI & UX Design : Interone Technologies"
        />
        <meta
          property="og:description"
          content="We expertise in ReactJs, NodeJS, UI/UX, Ruby on Rails, DevOps, Fullstack & Digital Transformation services: Interone Technologies"
        />
        <meta
          property="og:url"
          content="https://interone.io/service/UI%20&%20UX%20Design"
        />
        <meta
          name="keywords"
          content="UI and UX interone technologies,Fullstack development,Reactjs,MERN,MEAN,FullStack React Projects,RoR,javascript"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Interone Technologies" />
      </Head>
      <S.Main id="customService">
        <S.FirstContainer>
          <S.LeftContent>
            <S.Heading>{data?.uiTitle}</S.Heading>
            <S.Paragraph>{data?.uiContent}</S.Paragraph>
          </S.LeftContent>
          <S.RightImage>
            <S.Image src={data?.uximage.url} alt="" />
          </S.RightImage>
        </S.FirstContainer>
        <S.SecondContainer>
          <S.LeftContainer>
            <S.SubContent>
              <S.Heading>{data?.methodology}</S.Heading>
              <S.Paragraph>{data?.methodologyContent}</S.Paragraph>
            </S.SubContent>
            <S.SubContent>
              <S.Image src={data?.methodologyImage.url} alt="" />
            </S.SubContent>
          </S.LeftContainer>
          <S.RightContainer>
            {data?.uiCards.map((item, index) => (
              <S.ContentContainer key={index}>
                <S.ImageContainer>
                  <S.Imagecard src={item.image} alt="" />
                </S.ImageContainer>
                <S.SubContent>
                  <S.Heading>{item.header}</S.Heading>
                  <S.Paragraph>{item.para}</S.Paragraph>
                </S.SubContent>
              </S.ContentContainer>
            ))}
          </S.RightContainer>
        </S.SecondContainer>
        <S.ThirdContainer></S.ThirdContainer>
      </S.Main>
    </>
  );
};
export default CustomService;
