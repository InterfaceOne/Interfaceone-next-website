import React, { useEffect } from "react";
import * as S from "../components/industries.style";
import Parallax from "parallax-js";
import { SideLine } from "../public/svgicon/svgIcons";
import IndusSwiper from "../components/common/IndusSwiper";
import { useRouter } from "next/router";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

const Industries=({ data }) =>{

  useEffect(() => {
    var scene = document.getElementById("industriesHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  }, []);

  const { asPath } = useRouter();

  useEffect(() => {
    const loca = asPath;

    if (loca.includes("/industry")) {
      document.getElementById("industry") &&
        document.getElementById("industry").scrollIntoView();
    }
  }, [data, asPath]);

  return (
    <S.Container>
      <S.SideLine>
        <SideLine />
      </S.SideLine>
      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.MainHeading>
            <S.Head data-relative-input="true" id="industriesHead">
              {data && (
                <S.FirstHeadLayer data-depth="0.6">
                  {data[0].image.title}
                </S.FirstHeadLayer>
              )}
            </S.Head>
            {data && (
              <S.SecHeadLayer strings={[data[0].image.title]}></S.SecHeadLayer>
            )}
          </S.MainHeading>
        </S.HeaderWrapper>
        <S.IndustriesWrapper>
          <IndusSwiper data={data} />
        </S.IndustriesWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default Industries;