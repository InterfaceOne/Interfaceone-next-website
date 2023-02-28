import React, { useEffect } from "react";

import { SideLine } from "../../public/svgicon/svgIcons";
// import BlogCard from "../BlogCard/BlogCard";
import * as S from "../../components/blogs.styles";
import { ApolloClient, useApolloClient, useQuery, gql, InMemoryCache } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/router";
import AnimatedButton from "../../components/common/button/animatedButton";
import HorizontalScroll from "react-scroll-horizontal";
import BlogCard from "../../components/common/BlogCard/BlogCard";
const token = process.env.NEXT_PUBLIC__CONTENTFUL_CPA;
const space = process.env.NEXT_PUBLIC__CONTENTFUL_SPACE_ID;


const Blogs = ({ data }) => {
  useEffect(() => {
    let parallax = document.getElementById("parallaxCustom");
    parallax.addEventListener("mousemove", (e) => {
      parallax.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerWidth - e.pageY * speed) / 650;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
    parallax.addEventListener("mouseout", (e) => {
      parallax.querySelectorAll(".layer").forEach((layer) => {
        layer.style.transform = `translateX(${0}px) translateY(${0}px)`;
      });
    });
  }, []);

  // eslint-disable-next-line
  // const { loading, data, error } = useQuery(mainQuery);

  const children =
    data &&
    data?.map((blog, index) => {
      return <BlogCard key={index} blog={blog} />;
    });

  const { asPath } = useRouter();

  
  useEffect(() => {
    const loca = asPath;
    if (loca.includes("/blogs")) {
      document.getElementById("blogs").scrollIntoView();
    }
  }, [data, asPath]);

  return (
    <>
      <S.HorizontalContainer>
        <S.FirstContainer className="relative">
          <S.Container>
            <S.MainWrapper>
              <S.SideLine>
                <SideLine />
              </S.SideLine>
              <S.ContentWrapper>
                <S.CardWrapper>
                <S.MainHeading id="parallaxCustom">
                    <S.FirstHeadLayer data-speed="-6" className="layer">
                      Blogs
                    </S.FirstHeadLayer>
                    <S.SecHeadLayer strings={["Blogs"]}></S.SecHeadLayer>
                  </S.MainHeading>
                  <HorizontalScroll>
                    {children}
                    <div></div>
                  </HorizontalScroll>
                </S.CardWrapper>
              </S.ContentWrapper>
            </S.MainWrapper>
          </S.Container>
        </S.FirstContainer>
      </S.HorizontalContainer>
      <S.CardContainer>
        <S.SecondContainer className="relative">
          <S.Container1>
            <S.MainWrapper1>
              <S.SideLine1>
                <SideLine />
              </S.SideLine1>
              <S.ContentWrapper1>
                <S.CardWrapper1>
                  <S.MainHeading1 id="parallaxCustom">
                    <S.FirstHeadLayer1 data-speed="-6" className="layer">
                      Blogs
                    </S.FirstHeadLayer1>
                    <S.SecHeadLayer1 strings={["Blogs"]}></S.SecHeadLayer1>
                  </S.MainHeading1>
                  <S.Cards>{children}</S.Cards>
                </S.CardWrapper1>
                <Link href="/blogs/cards">
                  <S.ButtonWrapper>
                    <AnimatedButton buttonname="See More" />
                  </S.ButtonWrapper>
                </Link>
              </S.ContentWrapper1>
            </S.MainWrapper1>
          </S.Container1>
        </S.SecondContainer>
      </S.CardContainer>
    </>
  );
};

export default Blogs;