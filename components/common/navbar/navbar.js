import React, { useState } from "react";
import * as S from "./navbar.styles";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

// import { IOIcon, Loading, SmallIoIcon } from "../../../public/svgicon/svgIcons";
import IOIcon from "../../../public/images/io-icon.webp";
import Image from "next/image";
export const Navbar = () => {
  const [nav, setNav] = useState(false);

  let Router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    setNav(!nav);
  };

  const mainQuery = gql`
    query {
      navigationBarCollection {
        items {
          home
          services
          industries
          customers
          technologies
          blogs
          careers
          contactUs
        }
      }
    }
  `;
  const {  data, error } = useQuery(mainQuery, {});

  return (
    <>
      {error ? (
        <h1 className="text-red-800 font-bold text-3xl w-full text-center">
          Error loading from Contentful
        </h1>
      ) : (
        <S.Container>
          <S.LogoWrapper1 onClick={() => Router.push("/")}>
            <Image src={IOIcon} width={45} height={85} alt="interone" />
          </S.LogoWrapper1>
          <S.LogoWrapper2 onClick={() => Router.push("/")}>
            <Image src={IOIcon} width={30} height={53} alt="interone" />
          </S.LogoWrapper2>
          <S.NavLinksWrapper nav={nav}>
            <S.NavLink
              activeClassName="active"
              onClick={() => Router.push("/")}
            >
              {data?.navigationBarCollection?.items[0].home}
            </S.NavLink>
            <S.NavLink
              onClick={() => Router.push("/", `/service`, { shallow: true })}
            >
              {data?.navigationBarCollection?.items[0].services}
            </S.NavLink>
            <S.NavLink
              onClick={() => Router.push("/", "/industry", { shallow: true })}
            >
              {data?.navigationBarCollection?.items[0].industries}
            </S.NavLink>
            <S.NavLink
              onClick={() => Router.push("/", "/customer", { shallow: true })}
            >
              {data?.navigationBarCollection?.items[0].customers}
            </S.NavLink>
            <S.NavLink
              onClick={() => Router.push("/", "/technology", { shallow: true })}
            >
              {data?.navigationBarCollection?.items[0].technologies}
            </S.NavLink>
            <S.NavLink
              onClick={() => Router.push("/", "/blogs", { shallow: true })}
            >
              {data?.navigationBarCollection?.items[0].blogs}
            </S.NavLink>
            <S.NavLink
              href="https://interfaceone.grovehr.com/careers/job?id=620619f560ed7100262021ce"
              target="_self"
            >
              {data?.navigationBarCollection?.items[0].careers}
            </S.NavLink>
            <S.NavLink
              onClick={() => Router.push("/", "/contact-us", { shallow: true })}
            >
              {data?.navigationBarCollection?.items[0].contactUs}
            </S.NavLink>
          </S.NavLinksWrapper>
          <S.NavLinkContainer>
            <S.HanburgerIcon
              nav={nav}
              onClick={(e) => {
                handleClick(e);
              }}
            ></S.HanburgerIcon>
          </S.NavLinkContainer>
        </S.Container>
      )}
    </>
  );
};

export default Navbar;
