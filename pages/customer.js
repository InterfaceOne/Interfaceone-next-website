import React, { useEffect } from "react";
import * as S from "../components/customers.styles";
import Parallax from "parallax-js";
// import { Swiper } from "../../components/common/Swiper/Swiper";
import { SideLine } from "../public/svgicon/svgIcons";
import { useRouter } from "next/router";
import ReviewCards from "../components/common/ReviewCards";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;

const  Customers=({ data, animateCursor, mouseLeave })=>{


  useEffect(() => {
    var scene = document.getElementById("customers");
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
      calibrate: (true, true),
    });
  }, []);

  const { asPath } = useRouter();
  useEffect(() => {
    const loca = asPath;
    if (loca.includes("/customer")) {
      document.getElementById("customer").scrollIntoView();
    }
  }, [data, asPath]);

  return (
    <>
      <S.ContentWrapper>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.Container>
          <S.MainHeading>
            <S.Head data-relative-input="true" id="customers">
              {data && (
                <S.FirstHeadLayer data-depth="0.6">
                  {data.customers}
                </S.FirstHeadLayer>
              )}
            </S.Head>
            {data && (
              <S.SecHeadLayer strings={[data.customers]}></S.SecHeadLayer>
            )}
          </S.MainHeading>

          {data && (
            <S.Content>
              <S.LeftContainer>
                <S.HeaderWrapper>
                  <S.HeaderText>
                    <p>{data.heading}</p>
                  </S.HeaderText>
                  <S.CustomContent>
                    <p>{data.customContent}</p>
                    <S.Clints>
                      {data?.projects.map((item, index) => (
                        <S.Project key={index}>
                          <S.clintNumber>
                            <div className="number">{item.bignumber}</div>
                            <div className="num">{item.smallnumber}</div>
                          </S.clintNumber>
                          <S.ProjectCompleted>{item.title}</S.ProjectCompleted>
                        </S.Project>
                      ))}
                    </S.Clints>
                  </S.CustomContent>
                </S.HeaderWrapper>
              </S.LeftContainer>
              <S.CardWrapper>
                <S.ReviewContainer>
                  <ReviewCards data={data} />
                </S.ReviewContainer>
              </S.CardWrapper>
            </S.Content>
          )}
        </S.Container>
      </S.ContentWrapper>
    </>
  );
}
export default Customers;
