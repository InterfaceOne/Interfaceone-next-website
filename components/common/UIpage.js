import React, { useState } from "react";
import Ui from "./ui";

import * as S from "../UiPage.styles";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoIosArrowDropdown } from "react-icons/io";
// import {  Redirect } from "react-router-dom";
import Link from "next/link";

import RecentWork from "./UiRecentWork";
import { useQuery } from "@apollo/client";
import { serviceContent } from "../../queries";
import { Navbar } from "../common/navbar/navbar";
import { useRouter } from "next/router";
import Head from "next/head";

const uiData = [
  {
    number: "01",
    stepheader: "  Requirement Analysis",
    stepcontent:
      "First level scope discussionand target definition formsthe base of our process",
  },
  {
    number: "02",
    stepheader: "  Market + User Resarch",
    stepcontent:
      "Based on the requirement, we gather information through market research, competition analysis and identify the target audience",
  },
  {
    number: "03",
    stepheader: " Scope Documentation",
    stepcontent:
      "This is the holy grail of our project activity and this will have all our efforts and information on strategies used",
  },
  {
    number: "04",
    stepheader: "  Creative Process Tracking",
    stepcontent:
      "This is the phase of action where activities pertaining to the project are done every day and the results are closely",
  },
  {
    number: "05",
    stepheader: "  Result Tracking and Reporting",
    stepcontent:
      "Every month, cumulative efforts are analyzed, recalibrated if necessary. Regular check on targets are done",
  },
  {
    number: "06",
    stepheader: "  Interaction Design",
    stepcontent:
      "We understand the what, who, why and when of a project to build user centric designs for different user personas",
  },
];
export function UiWebPage({ data, data1, data2, data3, data4, data5 ,data6}) {
  const parsed = data;

  const [style, setStyle] = useState("menu");
  const [menuStatus, setMenuStatus] = useState("open");

  const params = useRouter();
  const id = params.query.id;

  const handleChange = (item) => {
    localStorage.setItem("service", JSON.stringify(item));
    setMenuStatus("open");
    setStyle("menu");
  };

  const handleClick = () => {
    switch (menuStatus) {
      case "open":
        setMenuStatus("close");
        setStyle("menu active");

        break;
      case "close":
        setMenuStatus("open");
        setStyle("menu");

        break;
      default:
        setMenuStatus("");
        setStyle("");
    }
  };
  return (
    <>
      <S.SmoothScroll>
        <S.Container>
          <Navbar />
          <S.Header></S.Header>
          <S.HeroContent>
            <S.HeroMenu>
              <Head>
                <title>Explore our {id} : Interone Technologies</title>
                <meta
                  name="description"
                  content="We Expertise in ReactJs,NodeJS,UI/UX, Ruby on Rails,DevOps,Fullstack & Digital Transformation services."
                />
              </Head>
              <S.Param>{id}</S.Param>

              <IoIosArrowDropdown
                style={{ cursor: "pointer", width: "2rem" }}
                onClick={() => {
                  handleClick();
                }}
              />
              <S.MenuWrapper className={style}>
                <AiOutlineCloseCircle
                  style={{
                    fill: "white",
                    marginLeft: "auto",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleClick();
                  }}
                />

                <S.UnorderedList>
                  {parsed?.length &&
                    parsed?.map((item, index) => (
                      <S.List key={index} onClick={() => handleChange(item)}>
                        <S.TitleContainer>
                          <Link href={`/service/${item.title}`}>
                            <S.Heading>{item.title}</S.Heading>
                          </Link>
                        </S.TitleContainer>
                      </S.List>
                    ))}
                </S.UnorderedList>
              </S.MenuWrapper>
            </S.HeroMenu>
            {data &&
              data.map((item, index) => {
                return item.title === id ? (
                  <S.HeroText key={index}>{item.content}</S.HeroText>
                ) : (
                  ""
                );
              })}
          </S.HeroContent>
        </S.Container>
        <S.MethodologyWrapper>
          <S.MethodologyHeader>Our {id} Methodology</S.MethodologyHeader>
          <S.Wrapper>
            {uiData.map((obj, index) => (
              <Ui
                key={index}
                number={obj.number}
                stepheader={obj.stepheader}
                stepcontent={obj.stepcontent}
              ></Ui>
            ))}
          </S.Wrapper>
        </S.MethodologyWrapper>
        <RecentWork
          data={data1}
          data1={data2}
          data2={data3}
          data3={data4}
          data4={data5}
          data5={data6}
        />
      </S.SmoothScroll>
    </>
  );
}

export default UiWebPage;
