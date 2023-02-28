import Head from "next/head";
import WebCard from "./webCard";
import * as S from "./webTechnology.style";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

export default function WebTechnology({ data }) {
  return (
    <S.Main>
      <Head>
        <title>Web Development : Interone Technologies</title>
        <link
          rel="canonical"
          href="https://interone.io/service/Web%20Development"
        />
        <meta
          property="og:title"
          content="Web development : Interone Technologies"
        />
        <meta
          property="og:description"
          content="We expertise in Web Development, ReactJs, NodeJS, UI/UX, Ruby on Rails, DevOps, Fullstack & Digital Transformation services: Interone Technologies"
        />
        <meta
          name="keywords"
          content="Fullstack web development,MERN,MEAN ,RoR,Javascript,Interone, Interone Technologies web development,Interone Technologies software development"
        />
        <meta
          property="og:url"
          content="https://interone.io/service/Web%20Development"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Interone Technologies" />
      </Head>
      <S.FirstContainer>
        <S.ContentContainer>
          <S.Header>{data?.title1}</S.Header>
          <S.Paragraph>{data?.title1Content}</S.Paragraph>
        </S.ContentContainer>
        <S.ImageContainer>
          <S.Image src={data?.title1Image.url} alt="" />
        </S.ImageContainer>
      </S.FirstContainer>
      <S.Header>{data?.title2}</S.Header>
      <S.SecondContainer>
        {data?.title2Content?.map((item, index) => (
          <WebCard
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </S.SecondContainer>
    </S.Main>
  );
}
