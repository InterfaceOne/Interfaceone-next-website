import React, { useEffect } from "react";
import * as S from "../../components/service.styles";
import Parallax from "parallax-js";
import { SideLine } from "../../public/svgicon/svgIcons";
import { useRouter } from "next/router";
import Image from "next/image";

function ServiceList({ data }) {
  useEffect(() => {
    var scene = document.getElementById("serviceHead");
    localStorage.setItem("servicesList", JSON.stringify(data));
    new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true,
    });
  }, [data]);
  const handleClick = (item) => {
    localStorage.setItem("service", JSON.stringify(item));
    window.open(`/service/${item.title}`, "_self");
  };

  const { asPath } = useRouter();

  useEffect(() => {
    const loca = asPath;

    if (loca.includes("/service")) {
      document.getElementById("service").scrollIntoView({ behavior: "smooth" });
    }
  }, [data, asPath]);

  return (
    <S.Container>
      <S.ServiceContainer>
        <S.SideLine>
          <SideLine />
        </S.SideLine>
        <S.ContentWrapper>
          <S.HeaderWrapper>
            <S.MainHeading>
              <S.Head data-relative-input="true" id="serviceHead">
                <S.FirstHeadLayer data-depth="0.6">Services</S.FirstHeadLayer>
              </S.Head>
              <S.SecHeadLayer strings={["Services"]}></S.SecHeadLayer>
            </S.MainHeading>
          </S.HeaderWrapper>

          <S.ServiceListContainer>
            {data &&
              data?.map((item) => (
                <S.ServiceList
                  key={item?.sys?.id}
                  onClick={() => handleClick(item)}
                >
                  <S.IconHeadingWrapper className="line">
                    <S.mmm>
                      <S.IconWrapper>
                        <Image
                          className="image"
                          alt={item?.icon?.description}
                          src={item?.icon?.url}
                          width={500}
                          height={500}
                        />
                      </S.IconWrapper>
                      <S.Heading>
                        <S.Title>{item.title}</S.Title>
                      </S.Heading>
                      <S.Cont>
                        <S.Content>{item.content}</S.Content>
                      </S.Cont>
                    </S.mmm>
                  </S.IconHeadingWrapper>
                </S.ServiceList>
              ))}
            {data &&
              data?.map((item) => (
                <S.ServiceList_1
                  key={item?.sys?.id}
                  onClick={() => handleClick(item)}
                >
                  <S.IconHeadingWrapper_1 className="line">
                    <S.mmmm>
                      <S.IconWrapper_1>
                        <Image
                          className="image"
                          alt={item?.icon?.description}
                          src={item?.icon?.url}
                          width={500}
                          height={500}
                        />
                      </S.IconWrapper_1>
                      <S.Heading>
                        <S.Title>{item.title}</S.Title>
                      </S.Heading>
                      <S.Cont>
                        <S.Content>{item.content}</S.Content>
                      </S.Cont>
                    </S.mmmm>
                  </S.IconHeadingWrapper_1>
                </S.ServiceList_1>
              ))}
          </S.ServiceListContainer>
        </S.ContentWrapper>
      </S.ServiceContainer>
    </S.Container>
  );
}

export default ServiceList;
