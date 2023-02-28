import React from "react";
import * as S from "../RecentWork.style";

import Link from "next/link";
import AnimatedButton from "../common/button/animatedButton";
import CustomService from "../servicecomponents/customService/customService";
import WebTechnology from "../servicecomponents/customService/webTechnology";
import DevopsServices from "../servicecomponents/customService/devopsServices";
import TestingServices from "../servicecomponents/customService/testingService";
import MobileDevelop from "../servicecomponents/customService/mobileDevelop";
import ECommerce from "../servicecomponents/customService/eCommerce";
import { useRouter } from "next/router";

const RecentWork = (props) => {
  const data1 = props.data;
  const data2 = props.data1;
  const data3 = props.data2;
  const data4 = props.data3;
  const data5 = props.data4;
  const data6 = props.data5;

  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      {id === "UI & UX Design" ? (
        <CustomService data={data1} />
      ) : id === "Web Development" ? (
        <WebTechnology data={data2} />
      ) : id === "Testing Services" ? (
        <TestingServices data={data3} />
      ) : id === "DevOps Services" ? (
        <DevopsServices data={data4} />
      ) : id === "Mobile Development" ? (
        <MobileDevelop data={data5} />
      ) : id === "E-Commerce Services" ? (
        <ECommerce data={data6} />
      ) : (
        ""
      )}

      <S.QuestionWrapper>
        <S.Question>
          <S.QuestionText>
            <p> Have A Question ? We Are Happy to Help</p>
          </S.QuestionText>
          <S.RouteButton
            onClick={() => router.push("/", "/contact-us", { shallow: true })}
          >
            <AnimatedButton buttonname="Contact Us">Contact Us</AnimatedButton>
          </S.RouteButton>
        </S.Question>
      </S.QuestionWrapper>
    </>
  );
};

export default RecentWork;
