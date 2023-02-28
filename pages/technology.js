import React, { useEffect } from "react";
import Parallax from "parallax-js";
import * as S from "../components/technologies.styles";
import CustomTechnologies from "../components/common/customTechnologies/customTechnologies";
import { SideLine } from "../public/svgicon/svgIcons";
import { useRouter } from "next/router";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

function Technologies({ data1 }) {
  useEffect(() => {
    var scene = document.getElementById("technologyHead");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
  }, []);

  const { asPath } = useRouter();

  useEffect(() => {
    const loca = asPath;

    if (loca.includes("/technology")) {
      document.getElementById("technology") &&
        document.getElementById("technology").scrollIntoView();
    }
  }, [asPath]);

  return (
    <S.Container>
      <S.SideLine>
        <SideLine />
      </S.SideLine>

      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.MainHeading>
            <S.Head data-relative-input="true" id="technologyHead">
              <S.FirstHeadLayer data-depth="0.6">Technologies</S.FirstHeadLayer>
            </S.Head>
            <S.SecHeadLayer strings={["Technologies"]}></S.SecHeadLayer>
          </S.MainHeading>
        </S.HeaderWrapper>
        <S.TechnologyContainer>
          <CustomTechnologies data={data1} />
        </S.TechnologyContainer>
      </S.ContentWrapper>
    </S.Container>
  );
}

export default Technologies;
