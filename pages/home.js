import React from "react";
// import { SideLine } from "../public/svgicon/svgIcons";

import * as S from "../components/hero.styles";
// import Cube from "../components/common/cube";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { SideLine } from "@/public/svgicon/svgIcons";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

const Cube = dynamic(() => import("../components/common/cube"), {
  ssr: false,
});

const Hero = (props) => {
  const { data } = props;

  return (
    <S.Container>
      <S.Cubediv>
        <Cube />
      </S.Cubediv>
      <S.MainWrapper>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.LeftContainer>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="heroHead"></S.Head>
              <S.SecHeadLayer
                strings={[data?.heading, data?.heading2, data?.heading3]}
              ></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>
          <S.Content>
            <S.TextTranslate>
              <S.Translate>
                <S.ContentText>{data?.subtext}</S.ContentText>
                <S.ContentText>{data?.caption}</S.ContentText>
              </S.Translate>
            </S.TextTranslate>
          </S.Content>
        </S.LeftContainer>
        <S.RightContainer>
          <Image
            src="https://images.ctfassets.net/7q3wfja5yi7p/511s6iTO42fmjCDdEDz2xv/1d61d00e44f26b664d1dd15470103742/good_Firms_interone.png?h=250"
            alt="good firms"
            width={150}
            height={150}
          />
          <Image
            src="https://images.ctfassets.net/7q3wfja5yi7p/34IAXaBGT7cnQGXNVLTsee/187024292431940a907cb51aa1f98690/top_app_dev.png?h=250"
            alt="top web developers"
            width={150}
            height={150}
          />
          <Image
            src="https://images.ctfassets.net/7q3wfja5yi7p/4UUvCrt0gZqY24TnSlcaw6/98cbf9c4a29a1e687c643a1aeb9ba33f/topdev.png?h=250"
            alt="top developers"
            width={150}
            height={150}
          />
          <Image
            src="https://images.ctfassets.net/7q3wfja5yi7p/1Yf0Qcmth8wvoSi4fusL0p/03296734cfca5529154843bf4f4dca98/reliable.png?h=250"
            alt="reliable company"
            width={150}
            height={150}
          />
          <Image
            src="https://images.ctfassets.net/7q3wfja5yi7p/shBoJ2C9kVYc6cj67lnh6/13676fc383a398024f43b80c8bfb45ad/top.png?h=250"
            alt="top software developers"
            width={100}
            height={100}
          />
        </S.RightContainer>
      </S.MainWrapper>
    </S.Container>
  );
};

export default Hero;
